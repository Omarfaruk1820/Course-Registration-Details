
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Coursemarks from './Components/Coursemarks/Coursemarks'
import { useState } from 'react'

function App() {
  const [coursemarks,setCoursemarks]=useState([]);
  const [selectdata,setSelectdata]=useState(0);

  const handleAddToCouremarks=(course)=>{
    //console.log('course adding soon',course);
    const newcoursemarks=[...coursemarks,course];
     setCoursemarks(newcoursemarks);

  }
  
  

  return (
    <>
    <div className="px-20"><Header></Header></div>
    

    <div className="md:flex max-w-full px-20 py-5 mx-auto">
    
      <Courses handleAddToCouremarks={handleAddToCouremarks}
      
      ></Courses>
      <Coursemarks coursemarks={coursemarks}></Coursemarks>
    </div>
     
      
     
    </>
  )
}

export default App
