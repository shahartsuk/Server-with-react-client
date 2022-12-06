import React, { useEffect, useState } from "react";

import "./StudentsList.css";
export const StudentsList = () => {
  const [studentsArr, setStudentsArr] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/getsStudent").then((r) => {
      r.json().then((j) => {
        setStudentsArr(j);
      });
    });
  }, []);
  return (
    <div className="style">
      {studentsArr.length > 0 ? (
        studentsArr.map((s) => {
          let { firstName, lastName, age } = s;
          return (
            <StudentInfo firstName={firstName} lastName={lastName} age={age} />
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};
function StudentInfo({ firstName, lastName, age }) {
  return (
    <div className="style">
      <div className="space">{firstName}</div>
      <div className="space">{lastName}</div>
      <div className="space">{age}</div>
    </div>
  );
}
