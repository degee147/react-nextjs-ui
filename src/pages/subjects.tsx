import Progress from '@paljs/ui/ProgressBar';
import { Status } from '@paljs/ui/types';
import { Card, CardBody } from '@paljs/ui/Card';
// import { Actions } from '@paljs/ui/Actions';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Layout from 'Layouts';
// import Image from 'next/image'

const Container = styled.div`
  display: flex;
  align-items: center;
  .bar {
    flex: 1;
  }
`;

export default function Subjects() {
  const [value, setValue] = useState(25);
  const [status, setStatus] = useState<Status>('Danger');

  useEffect(() => {
    // if (value <= 25) {
    //   setStatus('Danger');
    // } else if (value <= 50) {
    //   setStatus('Warning');
    // } else if (value <= 75) {
    //   setStatus('Info');
    // } else {
    //   setStatus('Success');
    // }
    setStatus('Success');
  }, [value]);

  const setProgressValue = (newValue: number) => {
    setValue(Math.min(Math.max(newValue, 0), 100));
  };

  const style = { marginBottom: '1rem' };
  return (
    <Layout title="Progress">
      <Row>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Card>
            <img height={150} src="/subjects/subject1.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Force, Work and Energy</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={74} status={status} displayValue />
              </Container>
              <span style={{ float: "right" }}>74% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Card>
            <img height={150} src="/subjects/subject2.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Evaporation</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={100} status={status} displayValue />
              </Container>
              <span style={{ float: "right" }}>100% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Card>
            <img height={150} src="/subjects/subject3.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Static Electricity</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={56} status={status} displayValue />
              </Container>
              <span style={{ float: "right" }}>56% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Card>
            <img height={150} src="/subjects/subject4.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Source of Energy</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={41} status={status} displayValue />
              </Container>
              <span style={{ float: "right" }}>41% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Card>
            <img height={150} src="/subjects/subject1.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Mass and Weight</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={73} status={status} displayValue />
              </Container>
              <span style={{ float: "right" }}>73% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        
        </Row>
    </Layout>
  );
}
