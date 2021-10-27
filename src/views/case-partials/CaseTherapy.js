import React, {lazy} from 'react';

const CaseTherapy = (therapy) => {
    return(
        <>
            <CInputGroup>
                <CInputGroupText>Statin</CInputGroupText>
                <CInputGroupText>Type</CInputGroupText>
                <CFormInput value={therapy.statinType} />
                <CInputGroupText>Dose</CInputGroupText>
                <CFormInput value={therapy.statinDose}  />
            </CInputGroup>
            <CInputGroup>
                <CInputGroupText>Fibrat</CInputGroupText>
                <CInputGroupText>Type</CInputGroupText>
                <CFormInput value={therapy.fibratType}  />
                <CInputGroupText>Dose</CInputGroupText>
                <CFormInput value={therapy.fibratDose}  />
            </CInputGroup>
            <CInputGroup>
                <CInputGroupText>Beta Blocator</CInputGroupText>
                <CInputGroupText>Type</CInputGroupText>
                <CFormInput value={therapy.betaBlocatorType}  />
                <CInputGroupText>Dose</CInputGroupText>
                <CFormInput value={therapy.betabBlocatorType}  />
            </CInputGroup>
            <CInputGroup>
                <CInputGroupText>Antibiotic</CInputGroupText>
                <CInputGroupText>Type</CInputGroupText>
                <CFormInput value={therapy.antibioticType}  />
                <CInputGroupText>Dose</CInputGroupText>
                <CFormInput value={therapy.antibioticDose}  />
            </CInputGroup>
            <CInputGroup>
                <CInputGroupText>Imunosupresant</CInputGroupText>
                <CInputGroupText>Type</CInputGroupText>
                <CFormInput value={therapy.imunosupressiveType}  />
                <CInputGroupText>Dose</CInputGroupText>
                <CFormInput value={therapy.imunosupressiveDose}  />
            </CInputGroup>
        </>
    );
}

export default CaseTherapy;