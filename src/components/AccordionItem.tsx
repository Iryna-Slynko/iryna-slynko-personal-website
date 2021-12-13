import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface IProps {
  prefix: string; index: number; title: string; subtitle: string; date: string;
}

export class MyAccordionItem extends React.Component<IProps> {

  render() {
    return <Accordion.Item key={this.props.title} eventKey={this.props.prefix + '-' + this.props.index.toString()}>
      <ContextAwareToggle subtitle={this.props.date} eventKey={this.props.prefix + '-' + this.props.index.toString()}>{this.props.title}</ContextAwareToggle>
      <Accordion.Body>
        <h6>
          <span className='title'>
            {this.props.subtitle}</span><span>•</span>
          <span className='date'>
            {this.props.date}
          </span>
        </h6>
        <p>
          {this.props.children}
        </p>
      </Accordion.Body>
    </Accordion.Item>;
  }
}


interface IParams {
  children: string,
  eventKey: string,
  subtitle: string
}
function ContextAwareToggle(params: IParams) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    params.eventKey,
    () => { },
  );

  const isCurrentEventKey = activeEventKey === params.eventKey;

  return (
    <button
      type="button"
      className="accordion-button collapsed"
      onClick={decoratedOnClick}
    >
      <Container>
        <Row>
          <Col xs={6} className='h5'>
            {params.children}
          </Col>
          <Col xs={6} className='text-end h6'>
            <span className='date'>
              {isCurrentEventKey ? "" : params.subtitle}
            </span>
          </Col>
        </Row>
      </Container>
    </button>
  );
}


