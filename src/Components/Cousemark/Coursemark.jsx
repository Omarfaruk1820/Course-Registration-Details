import React from 'react';

const Coursemark = ({coursemark}) => {
    const {course_title}=coursemark;
    return (
        <div className=' bg-slate-100 p-4 m-4 rounded-xl'>

            <div>
            <li className=" text-xl   text-center border-b-2 border-gray-400">{course_title}</li>
           </div>

            </div>
    );
};

export default Coursemark;