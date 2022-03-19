import React from 'react';
import './FaceRoconition.css'

const FaceReconition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputimage' alt='' src={imageUrl} width='500' height='auto'/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}
export default FaceReconition;