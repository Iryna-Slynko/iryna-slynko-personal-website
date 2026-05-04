import type { ReactNode } from 'react';
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface IProps {
  prefix: string;
  index: number;
  title: string;
  subtitle: string;
  date: string;
  selected?: boolean;
  children?: ReactNode;
}

export function MyAccordionItem({ prefix, index, title, subtitle, date, selected, children }: IProps) {
  const eventKey = `${prefix}-${index}`;

  return <Accordion.Item className={selected ? "selected" : ""} eventKey={eventKey}>
    <ContextAwareToggle subtitle={date} eventKey={eventKey}>{title}</ContextAwareToggle>
    <Accordion.Body>
      <h6>
        <span className='title'>
          {subtitle}</span><span>•</span>
        <span className='date'>
          {date}
        </span>
      </h6>
      <p>
        {children}
      </p>
    </Accordion.Body>
  </Accordion.Item>;
}

interface IParams {
  children: ReactNode,
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


