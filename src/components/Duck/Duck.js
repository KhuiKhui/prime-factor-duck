import './index.css'

import duck_png from '../../images/duck_png.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { slice } from "../../redux/store.js"

export default function Duck(){
    const dispatch = useDispatch();
    const factors = useSelector(state => state["factors"])
    const number = useSelector(state => state["number"])
    const clicked = useSelector(state => state["clicked"])
    const dialogue = useSelector(state => state["dialogue"])
    
    useEffect(() => {
        dispatch(slice.actions.chooseDia());
    }, [clicked])
    

    console.log(factors)
    return <>
    <div className='heading'>The Prophecies of Sir P.Facto</div>
    <div className='duck'>
        <img src={duck_png} alt='Logo'/>
        
    </div>
    <div className='prophecy'>{clicked ? `${dialogue}` : `I'm listening.`}</div>
    <br></br>

    <div className='prophecy'>{clicked ? `The prime factors of ${number} are: ${factors.join(' . ')}` : ``}</div>

    </>
}