// firebase
import { firebase } from '@/service';

// // utils:localstorage
import { localStorage } from '@/utils';

export function verifyLogin() {
  firebase.auth().onAuthStateChanged((user: any) => {
    if (user) {
      const mail: string = user.email;
      localStorage.setItem('cloned_mail', mail);
    } else {
      localStorage.setItem('cloned_mail', '');
    }
  });
}
