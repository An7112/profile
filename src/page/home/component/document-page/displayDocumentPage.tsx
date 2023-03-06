import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { AllDocument } from './all/allDocument';
import { ResumeDocumentPage } from './resume/resumeDocumentPage';

export const DisplayDocumentPage = () => {
    const [searchParams] = useSearchParams();
    const getParam = searchParams.get('documents');
    switch (getParam) {
        case 'all':
            return <AllDocument />
        case 'resume':
            return <ResumeDocumentPage/>
        default:
            return <AllDocument />
    }
}