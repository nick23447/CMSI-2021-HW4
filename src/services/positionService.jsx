import { db } from "./firebaseConfig"
import {
  collection,
  doc,
  query,
  getDocs,
  setDoc,
  where,
  addDoc,
  orderBy,
  limit,
  Timestamp,
  updateDoc,
} from "firebase/firestore"
// ######### READ FROM FIREBASE #############
export async function fetchPositions( massInfo ){
    const path = `/Masses/${massInfo.Week}/${massInfo.Time}`
    const snapshot = await getDocs(
        query(collection(db, path))
      )
    return snapshot.docs.map((doc) => (
        {
        id: doc.id,
        ...doc.data(),
      }))
}

export async function fetchSignUps() {
    const masses = await getDocs(collection(db, "Masses"));
    const times = ['10AM', '8PM', '9:30PM'];
    let positions = [];
    let signUps = [];
    const massPromises = masses.docs.map(async (doc) => {
        console.log(doc.id);
        const timePromises = times.map(async (time) => {
            const massInfo = { Week: doc.id, Time: time };
            const signups = await fetchPositions(massInfo);
            console.log(time, signups);
            signups.forEach((position) => {
                const info = `As a ${position.id} for the ${massInfo.Week} at ${massInfo.Time}`
                positions.push([position.slots, info ]);
            });
        });
        await Promise.all(timePromises);
    });

    await Promise.all(massPromises);
    return positions;
}
// ######### WRITE TO FIREBASE #############

export async function signUpPosition( name, id, massInfo, title, slots ){
    const input = `${name} ${id} False`
    const data = {slots:[...slots, input]}
    const massPath = `/Masses/${massInfo.Week}/${massInfo.Time}`
    const currentCol = collection(db, massPath)
    const newSignUp = doc(currentCol, title)
    await setDoc(newSignUp, data)
    return name;
}

export async function approvePositionSignUp(slots, massInfo, title ){
    const path = `/Masses/${massInfo.Week}/${massInfo.Time}`
    console.log(slots)
    const data = {slots: slots}
    const currentCol = collection(db, path)
    const newApproval = doc(currentCol, title)
    await setDoc(newApproval, data)
    return title;

}
