import React from 'react'
import { RxResume } from 'react-icons/rx'
import {MdOutlineDocumentScanner} from 'react-icons/md'
import './home.css'
import { ButtonDocument, DisplayDocumentPage } from './component'

export default function Home() {
  return (
    <div className='body'>
      <div className='body-header'>
        <div className='header-item-view column'>
          <span className='say-hello'>Hello!</span>
          <span>What would you like to see about me!</span>
        </div>
        <div className='header-item-view'>
          <RxResume className='icon-body-header' />
          <div className='item-view'>
            <span className='say-any'>Cover letter</span>
            <span>Any</span>
          </div>
        </div>
        <div className='header-item-view'>
          <RxResume className='icon-body-header' />
          <div className='item-view'>
            <span className='say-any'>Cover letter</span>
            <span>Any</span>
          </div>
        </div>
      </div>
      <span className='documents'>Your Documents <MdOutlineDocumentScanner/></span>
      <ButtonDocument/>
      <DisplayDocumentPage/>
    </div>
  )
}
