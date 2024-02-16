import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import db from "./firebase";

export const handleNew = async () => {
  const Name = prompt("Enter Color Name: ");
  const Value = prompt("Enter Color Value: ");

  const collectionRef = collection(db, "colours");
  const payload = { Name, Value };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new ID is: " + docRef.id);
};

export const handleEdit = async (id) => {
  const Name = prompt("Enter Color Name: ");
  const Value = prompt("Enter Color Value: ");

  const docRef = doc(db, "colours", id);
  const payload = { Name, Value };
  setDoc(docRef, payload);
};
