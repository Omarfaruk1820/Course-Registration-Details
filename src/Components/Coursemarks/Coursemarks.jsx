import React from 'react';
import Coursemark from '../Cousemark/Coursemark';
//import Coursemark from '../Cousemark/Coursemark';

const Coursemarks = ({coursemarks}) => {
    //console.log(coursemarks);
    return (
        <div className="w-1/4 bg-red-100 ">
            <div>
                <h2 className=" mt-10 text-xl font-bold text-center border-b-2 border-gray-500">Credit Hour Remaining 0 hr</h2>
            </div>
            <h2 className=" mt-5 text-center text-3xl">Course Name:</h2>
            
            
            {
                coursemarks.map((coursemark,idx)=> <Coursemark key={idx} coursemark={coursemark}></Coursemark>)
            }
           
        </div>
    );
};

export default Coursemarks;