import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ContextAwareToggle } from './generateAccordion';

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
