import  React from 'react';
import './imageBox.css'


const ImageBox =({imageUrl,box })=>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inimage' alt="" src={imageUrl} width='500px' height='auto'/>
            <div className='bounding-box' style={{left: box.leftCol, top:box.topRow , right: box.rightRow, bottom:box.dottomRow}}></div></div>
        </div>
    );
}

 export default ImageBox 