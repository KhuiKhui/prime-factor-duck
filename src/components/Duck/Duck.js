import './index.css'

import duck_png from '../../images/duck_png.png'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { slice } from "../../redux/store.js"

export default function Duck(){

    const factors = useSelector(state => state["factors"])
    
    return <>
    <div className='duck'>
        <img src={duck_png} alt='Logo'/>
        
    </div>
    <div className='prophecy'>The prime factors of this number are:</div>
    <div className='prophecy'>{factors.join(' . ')}</div>
        
    
    </>
}