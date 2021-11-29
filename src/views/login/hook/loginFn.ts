import { firebase } from '@/service';
import { localStorage } from '@/hook/localStorageClass';

// api
import { requestColApi, setQueryApi } from '@/service';

// other login
export async function otherLoginFn(otherName: string) {
  let provider: any;
  if (otherName === 'google') {
    provider = new firebase.auth.GoogleAuthProvider();
  } else if (otherName === 'facebook') {
    provider = new firebase.auth.FacebookAuthProvider();
  }
  const res = await firebase.auth().signInWithPopup(provider);

  // 判斷該user登入是否為新user
  const userList: any = await requestColApi('user');
  const userStatus = userList.some(
    (item: any) => item.data().account === res?.user?.email
  );
  if (!userStatus) {
    setQueryApi('user', res?.user?.email, {
      account: res?.user?.email,
      artical: [],
      comment: [],
      likeArtical: [],
      likeComment: []
    });
  }

  // 將user相關info 暫存至local
  const user = res.user;
  let userInfo;
  if (userStatus) {
    const filterResult = userList.filter(
      (item: any) => item.data().account === res?.user?.email
    );
    userInfo = filterResult[0].data();
  } else {
    const updateUserList: any = await requestColApi('user');
    const filterResult = updateUserList.filter(
      (item: any) => item.data().account === res?.user?.email
    );
    userInfo = filterResult[0].data();
  }
  user!.email
    ? localStorage.setLocalItem('clone_dcard_user_info', userInfo)
    : localStorage.setLocalItem('clone_dcard_user_info', '');
}
