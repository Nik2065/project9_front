import React from 'react';
import { Card, Badge} from 'react-bootstrap'

import image1 from '../images/case1.jpg'


export default function ProductCard5({title, description, cpu, gpu}) {

return (
    <Card className="h-100">
      <Card.Img variant="top" src={image1} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Производительность: 1/10<br />
          {description}
        </Card.Text>
        <Badge bg="success" className="mb-2">40000 ₽</Badge>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Москва • 2 часа назад</small>
      </Card.Footer>
    </Card>
)

}