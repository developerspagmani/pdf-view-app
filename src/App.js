import "./App.css";
import React from "react";

//define the mock data with keys
const courses = [

  {
    id: 0,
    name: 'Full Stack Developement Program',
    price: '89,999'
  },

  {

    id: 1,
    name: 'Python Automation Testing Program',
    price: '64,999'
  },

  {
    id: 2,
    name: 'UI/UX Program',
    price: '89,999'
  }

]

window.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
  console.log('added'); // never printed
  window.flutter_inappwebview.callHandler('eventHandler', 'hello', 'world').then(function(result) {
    courses.push({id: 3,
      name: 'UI/UX Program',
      price: '89,999'})
  });
});

var App = () => {

  /* Mapping the courses into a new array of JSX nodes as arrayDataItems */

  const arrayDataItems = courses.map((course,index) => 
    <li key={index}>
      <p>{course.name}</p>
      <span>{course.price}</span>
    </li>
  )

  return (
    <div className="container">
      <div>
        <h1>Course List</h1>
      </div>

      {/* returning arrayDataItems wrapped in <ul> */}
      <ul>{arrayDataItems}</ul>
    </div>
  );
}

export default App;