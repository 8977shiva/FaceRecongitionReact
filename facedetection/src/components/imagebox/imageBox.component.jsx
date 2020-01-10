import  React from 'react';
import './imageBox.css'


const ImageBox =({imageUrl,box })=>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inimage' alt="" src={imageUrl} width='500px' height='auto'/></div>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    );
}

 export default ImageBox 