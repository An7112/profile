import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { documentModal } from '../../../../modal/modal';
import { documentLinks } from '../../../../util';
import './buttonDocument.css'

export const ButtonDocument = () => {
    const Navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [active, setActive] = useState('');

    const handleActive = (param: string) => {
        Navigate({
            pathname: '/profile',
            search: `?documents=${param}`
        })
        setActive(param);
    }

    useEffect(() => {
        const getParam: any = searchParams.get('documents');
        setActive(getParam);
    }, [searchParams])

    return <div className='button-frame-document'>
        {documentLinks.map((ele: documentModal) => {
            return <div
                className={`button-document-page ${ele.search === active ? 'active' : ''}`}
                onClick={() => handleActive(ele.search)}
            >
                <span>{ele.name}</span>
            </div>
        })}
    </div>
}