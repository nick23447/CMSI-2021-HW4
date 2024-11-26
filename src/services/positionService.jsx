import { db } from "./firebaseConfig"
import {
  collection,
  doc,
  query,
  getDocs,
  setDoc,
  addDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore"

export async function fetchPositions( massInfo ){
    const path = `/Masses/${massInfo.Week}/${massInfo.Time}`
    console.log(path)
    const snapshot = await getDocs(
        query(collection(db, path))
      )
    console.log
    return snapshot.docs.map((doc) => (
        {
        id: doc.id,
        ...doc.data(),
      }))
}

export async function signUpPosition( name, user, massInfo, title, slots ){
    const data = {slots:[...slots, name]}
    const path = `/Masses/${massInfo.Week}/${massInfo.Time}`
    const currentCol = collection(db, path)
    const newSignUp = doc(currentCol, title)
    await setDoc(newSignUp, data)
    return name;
}