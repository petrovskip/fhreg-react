import React, {lazy} from 'react';

const CaseProfile = (profile) => {
    return(
    <>
        <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">Patient's name</CInputGroupText>
            <CFormInput value={profile.Name} placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
        </CInputGroup>
        <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">Patient's surname</CInputGroupText>
            <CFormInput value={profile.Surname} placeholder="Surname" aria-label="Name" aria-describedby="basic-addon1" />
        </CInputGroup>
        <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">Patient's birthdate</CInputGroupText>
            <CFormInput value={profile.Birthdate} type="date" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
        </CInputGroup>
        <CFormSelect aria-label="Select Gender" selected="profile.Gender">
            <option>Please select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </CFormSelect>
        <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">Patient's nationality</CInputGroupText>
            <CFormInput value={profile.Nationality} placeholder="Nationality" aria-label="Name" aria-describedby="basic-addon1" />
        </CInputGroup>
        <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">Patient's Height</CInputGroupText>
            <CFormInput alue={profile.Height} type="number" placeholder="Height" aria-label="Name" aria-describedby="basic-addon1" />
        </CInputGroup>

        <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">Patient's Weight</CInputGroupText>
            <CFormInput alue={profile.Weight} type="number" placeholder="Weight" aria-label="Name" aria-describedby="basic-addon1" />
        </CInputGroup>

        <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">Patient's BMI</CInputGroupText>
            <CFormInput alue={profile.bmi} type="number" placeholder="BMI" aria-label="Name" aria-describedby="basic-addon1" />
        </CInputGroup>

        <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">Patient's BSA</CInputGroupText>
            <CFormInput alue={profile.bsa} type="number" placeholder="BSA" aria-label="Name" aria-describedby="basic-addon1" />
        </CInputGroup>
    </>
    );
}

export default CaseProfile;