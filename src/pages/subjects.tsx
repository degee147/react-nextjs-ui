import Progress from '@paljs/ui/ProgressBar';
import { Card, CardBody } from '@paljs/ui/Card';
import { Button } from '@paljs/ui/Button';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import styled from 'styled-components';
import React from 'react';
import Layout from 'Layouts';
import { EvaIcon } from '@paljs/ui/Icon';
import Select from '@paljs/ui/Select';
import Badge from '@paljs/ui/Badge';

const SelectStyled = styled(Select)`
  width: 200px;
  display:inline-block;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  .bar {
    flex: 1;
  }
`;

export default function Subjects() {
  // const [value, setValue] = useState(25);
  // const [status, setStatus] = useState<Status>('Danger');

  // useEffect(() => {
  // if (value <= 25) {
  //   setStatus('Danger');
  // } else if (value <= 50) {
  //   setStatus('Warning');
  // } else if (value <= 75) {
  //   setStatus('Info');
  // } else {
  //   setStatus('Success');
  // }
  // setStatus('Success');
  // }, [value]);

  // const setProgressValue = (newValue: number) => {
  //   setValue(Math.min(Math.max(newValue, 0), 100));
  // };
  const positionOptions = () => [
    { value: 'Relevance', label: 'Relevance' },
    { value: 'Sequence', label: 'Sequence' },
  ];
  return (
    <Layout title="Progress">
      <Row style={{ marginBottom: 20 }}>
        <Col breakPoint={{ xs: 6, md: 12 }}>
          <EvaIcon name="home" /><span> </span>
          {/* <EvaIcon name="home" options={{ fill: '#3366ff',  fontSize: "150px" }} /> */}
          | <span><strong>Subjects</strong></span>  |  <span><strong>Physics</strong></span>
        </Col>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Col breakPoint={{ xs: 12, md: 12 }}>

          <div style={{ float: "right" }}>
            <span><strong>SORT BY</strong>  </span>
            <SelectStyled
              instanceId="react-select-input"
              isSearchable={false}
              shape="Rectangle"
              placeholder="Relevance"
              options={positionOptions()}
            />
            <Button appearance="outline" style={{ marginRight: 10, marginLeft: 10 }}><EvaIcon name="arrowhead-down" /></Button>
            <Button appearance="outline" style={{ marginRight: 10, marginLeft: 10 }}><EvaIcon name="arrowhead-up" /></Button>
            {/* <Button appearance="outline" style={{ marginRight: 10, marginLeft: 10 }}><EvaIcon name="flip" /></Button> */}
            <SelectStyled
              instanceId="react-select-input"
              isSearchable={false}
              shape="Rectangle"
              placeholder="Filter By"
              options={positionOptions()}
            />
            <Button appearance="outline" style={{ marginRight: 10, marginLeft: 10 }}><EvaIcon name="grid-outline" /></Button>
            <Button appearance="outline" style={{ marginRight: 10, marginLeft: 10 }}><EvaIcon name="list-outline" /></Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col breakPoint={{ xs: 6, md: 4 }}>
          <Card className="subjectcard">
            <header className="badgeheader">
              <Badge status="Primary" position="topRight">
                2 Modules
              </Badge>
            </header>
            <img className="subjectimage" src="/subjects/subject1.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Force, Work and Energy</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={74} status="Success" displayValue />
              </Container>
              <span style={{ float: "right" }}>74% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 6, md: 4 }}>
          <Card className="subjectcard">
            <header className="badgeheader">
              <Badge status="Primary" position="topRight">
                2 Modules
              </Badge>
            </header>
            <img className="subjectimage" src="/subjects/subject2.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Evaporation</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={100} status="Success" displayValue />
              </Container>
              <span style={{ float: "right" }}>100% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 6, md: 4 }}>
          <Card className="subjectcard">
            <header className="badgeheader">
              <Badge status="Primary" position="topRight">
                2 Modules
              </Badge>
            </header>
            <img className="subjectimage" src="/subjects/subject3.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Static Electricity</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={56} status="Success" displayValue />
              </Container>
              <span style={{ float: "right" }}>56% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 6, md: 4 }}>
          <Card className="subjectcard">
            <header className="badgeheader">
              <Badge status="Primary" position="topRight">
                2 Modules
              </Badge>
            </header>
            <img className="subjectimage" src="/subjects/subject4.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Source of Energy</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={41} status="Success" displayValue />
              </Container>
              <span style={{ float: "right" }}>41% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 6, md: 4 }}>
          <Card className="subjectcard">
            <header className="badgeheader">
              <Badge status="Primary" position="topRight">
                2 Modules
              </Badge>
            </header>
            <img className="subjectimage" src="/subjects/subject1.png" alt="slack" />
            <CardBody>
              <p style={{ margin: 0, color: "#20A6D2" }}>14/20 CREDITS</p>
              <h6 style={{ margin: 0 }}>Mass and Weight</h6>
              <Container style={{ marginTop: 10, marginBottom: 10 }}>
                <Progress className="bar" value={73} status="Success" displayValue />
              </Container>
              <span style={{ float: "right" }}>73% COMPLETED</span>
            </CardBody>
          </Card>
        </Col>

      </Row>
    </Layout>
  );
}
