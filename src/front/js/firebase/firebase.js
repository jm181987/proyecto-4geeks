// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj_PKnSzWcYuPKhBz_u4uw55fd_GTV5j0",
  authDomain: "geeks-e71e0.firebaseapp.com",
  projectId: "geeks-e71e0",
  storageBucket: "geeks-e71e0.appspot.com",
  messagingSenderId: "125769146627",
  appId: "1:125769146627:web:a9b869a70316d8cefc0936",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const fetchData = async (tableName = "") => {
  const col = collection(db, tableName);
  const snapshot = await getDocs(col);
  return snapshot?.docs.map((d) => d.data()) || [];
};

export const addData = async (tableName = "", data) => {
  const col = collection(db, tableName);
  const doc = await addDoc(col, data);
  return doc;
};

export function uploadFile(file) {
  const storageRef = ref(storage, v4());
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
}
