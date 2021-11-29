import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const db = firebase.firestore();

// get -> collection & ref
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

// get -> collection
export function requestColApi(colName: string) {
  return new Promise((resolve, reject) => {
    const ref = db.collection(colName);
    ref
      .get()
      .then((doc: any) => {
        resolve(doc.docs);
        // doc.docs.forEach((item: any) => {
        //   console.log(item.data());
        // });
        // console.log(doc.docs);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

// set
export function setQueryApi(colName: string, docName: any, data: any) {
  return new Promise((resolve, reject) => {
    const ref = db.collection(colName).doc(docName + '');
    ref
      .set(data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
