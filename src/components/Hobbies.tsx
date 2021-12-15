import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import hobbies from '../images/hobbies.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 12,
  magnifierWidth = 12,
  zoomLevel = 4
}: {
  src: string;
  width?: string;
  height?: string;
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width
      }}
    >
      <Image fluid
        src={src}
        style={{ height: height, width: width }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent magnifier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}vw`,
          width: `${magnifierWidth}vw`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
        }}
      ></div>
    </div>
  );
}
export default function Hobbies() {
  return (
    <section id='hobbies'>
      <Container>
        <Row className="justify-content-start">
          <Col className="pb-5 text-left" sm={3} md={2}>
            <h4>
              <span>
                Hobbies
              </span>
            </h4>
          </Col>
          <Col className='bars'>
            <ImageMagnifier src={hobbies}/>
          </Col>
        </Row>
      </Container>

    </section>
  )
}