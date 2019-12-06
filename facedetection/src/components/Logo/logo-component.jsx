import React from'react';
import  Tilt from 'react-tilt'


const  Logo=()=>{
 return(
    <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 70, width: 100 }} >
             <div className="Tilt-inner"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQODiIVfK_HDkSfphmzaDjUuro3YUvx3wJbqG4PyxPeFInZdN&s" alt="logo"/> </div>
          </Tilt>
    </div>


 )




}
export default Logo