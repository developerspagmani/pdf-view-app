import "./App.css";
import React, { useState } from "react";

const data = [
  {
    id: 0,
    name: "Full Stack Developement Program",
    price: "89,999",
  },

  {
    id: 1,
    name: "Python Automation Testing Program",
    price: "64,999",
  },

  {
    id: 2,
    name: "UI/UX Program",
    price: "89,999",
  },
];




export default function App() {

  const [courses, setCourses] = useState(data);

  window.addEventListener("flutterInAppWebViewPlatformReady", function (event) {
    console.log("added"); // never printed
    window.flutter_inappwebview.callHandler("eventHandler").then((result) => {
      setCourses( current => [...current, result])
      alert(JSON.stringify(result));
    });
  });

  console.log('courses',courses)

  const arrayDataItems = courses.map((course, index) => (
    <li key={index}>
      <p>{course.name}</p>
      <span>{course.price}</span>
    </li>
  ));

  return (
    <div className="container">
      <div>
        <h1>Course List</h1>
      </div>

      {/* returning arrayDataItems wrapped in <ul> */}
      <ul>{arrayDataItems}</ul>
    </div>
  );
};
