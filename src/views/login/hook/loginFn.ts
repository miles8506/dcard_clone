import { firebase } from '@/service';
import { localStorage } from '@/hook/localStorageClass';

// google login
export async function googleLoginFn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const res = await firebase.auth().signInWithPopup(provider);
  const user = res.user;
  user!.email
    ? localStorage.setLocalItem('clone_dcard_user_name', user!.email)
    : localStorage.setLocalItem('clone_dcard_user_name', '');
}
