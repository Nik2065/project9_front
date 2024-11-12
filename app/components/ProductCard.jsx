import React from 'react';
import { Button, Card} from 'react-bootstrap'

import image1 from '../images/case1.jpg'
import { ProductCardChart } from './ProductCardChart.jsx';

export default function ProductCard({title, description, cpu, gpu}) {



 


return (
<Card>
<Card.Img variant="top" src={image1} />
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text style={{fontSize:"0.6em"}}>
    CPU:{cpu}<br/>
    GPU:{gpu}

    <ProductCardChart/>

    <div>
      {description}
    </div>
  </Card.Text>
  
  <hr/>

  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
)

}