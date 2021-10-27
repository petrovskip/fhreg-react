import React, { lazy } from 'react';

const CaseHistory = (history) => {
    return (
        <>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Coronary Disease</CInputGroupText>
                <CFormCheck id="coronaryDisease"  checked={history.coronaryDisease} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Perifereal vascular Disease </CInputGroupText>
                <CFormCheck id="periferalvascularDiesease" checked={history.periferalvascularDiesease} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Aortic vascular stenosis</CInputGroupText>
                <CFormCheck id="aorticStent" checked={history.aorticStent} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Tyroid disorder</CInputGroupText>
                <CFormCheck id="tyroidDysorder" checked={history.tyroidDysorder} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">HOBB</CInputGroupText>
                <CFormCheck id="hobb" checked={history.hobb} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Active malignant disease </CInputGroupText>
                <CFormCheck id="activeMalignantDisease" checked={history.activeMalignantDisease} />
            </CInputGroup>
        </>
    );
}

export default CaseHistory
