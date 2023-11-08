import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';


const Courses = ({handleAddToCouremarks}) => {
   
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch('Course_Registration.json')
        .then(response=>response.json())
        .then(data=>setCourses(data))
    },[])

    return (
        
        <div className="w-3/4 bg-green-100">

        
           <h2 className="text-2xl ml-14 mb-5">Course Length:{courses.length}</h2>
           {
            courses.map(course=><Course
                 key={course.course_title}
                 course={course}
                 handleAddToCouremarks={()=>handleAddToCouremarks(course)}
                 
            ></Course>)
           } 
        </div>
        
        
        
    );
};

export default Courses;