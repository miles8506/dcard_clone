import { firebase } from '@/service';
import { localStorage } from '@/hook/localStorageClass';

// other login
export async function otherLoginFn(otherName: string) {
  let provider: any;
  if (otherName === 'google') {
    provider = new firebase.auth.GoogleAuthProvider();
  } else if (otherName === 'facebook') {
    provider = new firebase.auth.FacebookAuthProvider();
  }
  const res = await firebase.auth().signInWithPopup(provider);
  const user = res.user;
  user!.email
    ? localStorage.setLocalItem('clone_dcard_user_name', user!.email)
    : localStorage.setLocalItem('clone_dcard_user_name', '');
}
