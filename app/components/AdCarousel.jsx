import React from 'react';
import { Button, Card, Carousel} from 'react-bootstrap'
import slide1 from '../images/sl1.png'




//для рекламных баннеров

export default function AdCarousel() {


return (
    <Carousel style={{ marginBottom:"10px"}}>
    <Carousel.Item>
        {
        //<ExampleCarouselImage text="First slide" />
        <img src="" width="900" height="200" />
        }
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      {
        //<ExampleCarouselImage text="Second slide" />
        <img src={slide1} width="900" height="200" />
      }
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        {
      //<ExampleCarouselImage text="Third slide" />
      <img src="" width="900" height="200" />
        }
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

}