import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { handleNew, handleEdit, handleDelete } from "./util";
import db from "./firebase";
import Dot from "./Dot";

const App = () => {
  const [colors, setColors] = useState([{ Name: "Loading...", id: "initial" }]);

  useEffect(
    () =>
      onSnapshot(collection(db, "colours"), (snapshot) =>
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div className="root">
      <button className="button" onClick={handleNew}>
        New
      </button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <button
              className="button-edit"
              onClick={() => handleEdit(color.id)}
            >
              edit
            </button>
            <button
              className="button-edit"
              onClick={() => handleDelete(color.id)}
            >
              delete
            </button>
            <Dot color={color.Value} /> {color.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
