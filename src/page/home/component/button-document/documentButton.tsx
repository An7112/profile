import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { documentModal } from '../../../../modal/modal';
import { documentLinks } from '../../../../util';
import './buttonDocument.css'

export const ButtonDocument = () => {
    const Navigate = useNavigate();
    const [active, setActive] = useState('all');

    const handleActive = (param: string) => {
        Navigate({
            pathname: '/profile',
            search: `?documents=${param}`
        })
        setActive(param);
    }

    return <div className='button-frame-document'>
        {documentLinks.map((ele:documentModal) => {
            return <div
                className={`button-document-page ${ele.search === active ? 'active' : ''}`}
                onClick={() => handleActive(ele.search)}
            >
                <span>{ele.name}</span>
            </div>
        })}
    </div>
}