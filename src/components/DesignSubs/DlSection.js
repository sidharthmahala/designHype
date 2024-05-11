import React from 'react'
import './DlSection.css'

function DlSection() {
  return (
    <div className='dls-container'>
        <div className='dls-left'></div>
        <div className='dls-right'>
            <div className='dlsr-col-1'></div>
            <div className='dlsr-col-2'>
                <div className='col-2-left'></div>
                <div className='col-2-right'></div>
            </div>
            <div className='dlsr-col-3'></div>
        </div>
    </div>
  )
}

export default DlSection