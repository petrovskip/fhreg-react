import React, { lazy } from 'react';
import { CForm, CButton } from '@coreui/react'
import {Card, Col, Row, Tab, Nav} from 'react-bootstrap';
import {CaseProfile, CaseRiskFactor, CaseHistory, CaseTherapy, CaseScores } from 'case-partials/index'
import { Checkup, Profile, Score, Therapy } from '../model/Checkup';

const Case = () => {
    const dispatch = useDispatch();
    const currentCheckupId = useSelector((state) => state.case.currentCheckupId);
    const records = useSelector((state) => state.records.checkups);
    const currentCheckup = records.find(c => c.checkupid === currentCheckupId) == undefined ? InstantiateNewCheckup(records) : records.find(c => c.checkupid === currentCheckupId);


    return (
        <CForm>
            <Card>
                <Card.Header>Case</Card.Header>
                <Card.Body>
                    <Card.Title><CButton color="primary" onClick={(e) => {
                        if(currentCheckupId != 0)
                            dispatch( updateItem({index: currentCheckup.checkupid, item: currentCheckup }));
                        else 
                        {
                            dispatch( insesrtItem({ index: currentCheckup.checkupid, item: currentCheckup }));
                            dispatch( setcurrent( {currentCheckupId: currentCheckup.checkupid }));
                        }
                    }}>
          Save case</CButton></Card.Title>
                    <Card.Text>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="profile">Patinet's info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="riskfactor">Risk Factors and habbits</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="history">Patinet's history</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="therapy">Threrapy presciption</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="scores">Scores</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                            <CaseProfile profile={currentCheckup.profile} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="riskfactor">
                                            <CaseRiskFactor risk = {currentCheckup.risk} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="history">
                                            <CaseHistory history = {currentCheckup.history}/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="therapy">
                                            <CaseTherapy therapy = {currentCheckup.therapy} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="scores">
                                            <CaseScores scores = {currentCheckup.scores} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CForm>
    );
}

export default Case


function InstantiateNewCheckup(records){
    let newId = Math.max.apply(Math, records.map(function(o) { return o.checkupid; }));
    return new Checkup(newId+1, new Date(), new Profile(), new History(), new Risk(), new Therapy(), new Score());
}