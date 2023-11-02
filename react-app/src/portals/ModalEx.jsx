import React from 'react'
import {createPortal} from 'react-dom';

export default function ModalEx({isOpen, onClose}) {
    if(!isOpen)return null;
          //pop up styling 
          const popup = {
            position: 'fixed',
            zIndex: '2',
            top: '50%',
            left: '35%',
            width: '25%',
            height: '25%',
            color : '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            overflow: 'auto',
        }
    return createPortal(
    <div >
        <p style={popup}>Goten Morgen =)</p>
        <button onClick={onClose}>close popup</button>
    </div>
    , document.getElementById('anID')
  )
}
