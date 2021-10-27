import React, {lazy} from 'react';

const CaseScores = (scores) => {
    return(
        <>
        <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Known Wound</CInputGroupText>
                <CFormCheck id="knownWound" checked={scores.knownWound} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon2">Ldl Adult</CInputGroupText>
                <CFormCheck id="ldlAdult" checked={scores.knownWound} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">Perifery Desease</CInputGroupText>
                <CFormCheck id="peryferyDesease" checked={scores.periferyDesease} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon4">Coronary Desease</CInputGroupText>
                <CFormCheck id="coronaryDesease" checked={scores.coronaryDesease} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon5">Corneal Bow</CInputGroupText>
                <CFormCheck id="cornealBow" checked={scores.cornealBow} />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon6">Probability score</CInputGroupText>
                <CFormInput type="number" placeholder="Probability" aria-describedby="basic-addon6" disabled />
                <CInputGroupText id="basic-addon7">%</CInputGroupText>
            </CInputGroup>
        </>
    );
}

export default CaseScores;