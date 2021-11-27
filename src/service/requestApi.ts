import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const db = firebase.firestore();

export function requestApi(colName: string, docName: string) {
  const ref = db.collection(colName).doc(docName);
  return new Promise((resolve, reject) => {
    ref
      .get()
      .then((doc: any) => {
        resolve(doc.data());
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
