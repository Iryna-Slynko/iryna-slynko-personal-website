import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';


interface IProps {
  id: string,
  title: string
}

export class AccordionSection  extends React.Component<IProps> {
  render(){
  return <section id={this.props.id}>
    <Row>
      <Col  className="pb-5 text-left" sm={3} md={2}>
        <h4>
          <span>
            {this.props.title}
          </span>
        </h4>
      </Col>
      <Col>
        <Accordion>
          {this.props.children}
        </Accordion>
      </Col>
    </Row>
  </section>;
  }
}
