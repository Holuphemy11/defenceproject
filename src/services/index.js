import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';

// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from 'firebase/storage';
import {
  auth,
  db,
} from '@/services/engine';

function AuthFunc() {
  this.signup = (email, password) => {
    let data = createUserWithEmailAndPassword(auth, email, password);
    return data;
  };

  this.login = (email, password) => {
    let data = signInWithEmailAndPassword(auth, email, password);
    return data;
  };
  this.signout = () => {
    let data = signOut(auth);
    return data;
  };
  this.reset = (email) => {
    const res = sendPasswordResetEmail(auth, email);
    return res;
  };

  this.verifyemail = (email)=>{
    const res =  sendEmailVerification(auth, email)
    return res
 
   }
}

function CRUD() {
  this.addDocWithId = (dbname, userId, arrayinfo) => {
    let data = setDoc(doc(db, dbname, userId), arrayinfo);
    return data;
  };

  this.addDocWithoutId = (dbname, dform) => {
    let collRef = collection(db, dbname);
    let data = addDoc(collRef, dform);
    return data;
  };

  this.getSingleDoc = (dbname, user_id) => {
    let res = getDoc(doc(db, dbname, user_id));
    return res;
  };

  this.getAllDoc = async (dbname) => {
    let docs = [];
    const querySnapshot = await getDocs(collection(db, dbname));
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  };

  this.collectionSnapDocs = (dbname) => {
    return collection(db, dbname);
  };

  this.SnapDoc = (dbname, userId) => {
    return doc(db, dbname, userId);
  };

  this.updateDocument = (dbname, userId, arrayinfo) => {
    const selectedUser = doc(db, dbname, userId);
    return updateDoc(selectedUser, arrayinfo);
  };

  this.queryDoc = (dbname, where1, where2) => {
    const collRef = collection(db, dbname);
    const q = query(collRef, where(where1, '==', where2));
    return q;
  };

  this.removeDoc = (dbname, db_id) => {
    return deleteDoc(doc(db, dbname, db_id));
  };
}
let crud = new CRUD();
let authfunc = new AuthFunc();

export { auth, authfunc, crud, db, onAuthStateChanged, onSnapshot };
