import React, {lazy} from 'react';

const CaseRiskFactor = (risk) => {
    return(
    <>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Alchocol Use</CInputGroupText>
                <CFormCheck id="alchocolUse" checked={risk.alchocolUse}  />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Tobacco use</CInputGroupText>
                <CFormCheck id="tobaccoUse" checked={risk.tobaccoUse}  />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Diabetes Type (empty if None)</CInputGroupText>
                <CFormInput placeholder="Diabetes type" aria-label="Name" aria-describedby="basic-addon1" />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Overweight status</CInputGroupText>
                <CFormCheck id="overweightStatus" checked={risk.overweightStatus}  />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Methabolic Syndrom</CInputGroupText>
                <CFormCheck id="methabolicSyndrom" checked={risk.methabolicSyndrom}  />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">EUROSCORE</CInputGroupText>
                <CFormInput type="number" placeholder="Diabetes type" aria-label="Name" aria-describedby="basic-addon1" disabled />
            </CInputGroup>
        </>
    );
}

export default CaseRiskFactor;