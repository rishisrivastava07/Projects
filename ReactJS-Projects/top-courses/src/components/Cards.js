import React from "react";
import Card from "./Card.js";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  // console.log("printing courses");
  // console.log(courses);
  let category = props.category;
  
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category === "All"){
      let allCourses = [];
      Object.values(courses).forEach((courseArray) => {
        courseArray.forEach((courseData) => {
          // console.log(courseData);
          allCourses.push(courseData);
        });
      });
      // console.log(allCourses);
      return allCourses;
    }
    else{
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        // console.log(course);
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
