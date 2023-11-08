import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Course = ({course,handleAddToCouremarks,handleselectTime}) => {
    
    const {course_title,course_details,course_price,
        course_credit_hours,course_cover_img}=course;
    return (
        
            <div>
            <img className="ml-4 mb-5" src={course_cover_img}></img>
            <h2 className='text-5xl ml-4 font-bold mt-5'>{course_title}</h2>
            <p className="h-30  w-96 text-xl p-4">{course_details}</p>
            <div className="flex justify-between mb-5">
                <span className='text-2xl ml-4'>$ Price:{course_price}</span>
               <h2 className="text-2xl"><FaBeer></FaBeer></h2>

                <button className='text-2xl mr-5' 
                >Credit:{course_credit_hours}hr</button>
            </div>
            <button  onClick={()=>handleAddToCouremarks(course)}
            

             className="bg-blue-500 text-white ml-4
             text-2xl p-2 h-14 w-72 rounded-2xl mb-5">Select</button>
        </div>
        
    );
};

export default Course;