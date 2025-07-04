import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard5 from './ProductCard5.jsx';



// Пример массива объявлений:
const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200',
    title: 'Игровой ПК i7 + RTX 3070',
    performance: 9,
    description: '32 ГБ ОЗУ, SSD 1 ТБ, Windows 11',
    price: '120 000',
    location: 'Москва',
    timeAgo: '2 часа назад'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200',
    title: 'Ноутбук ASUS Ryzen 5',
    performance: 7,
    description: '16 ГБ ОЗУ, SSD 512 ГБ, Windows 10',
    price: '60 000',
    location: 'Санкт-Петербург',
    timeAgo: '1 день назад'
  }
  // ...добавьте еще объекты
];

/*
export default function ProductsList() {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {ads.map(ad => (
        <Col key={ad.id}>
          <AdCard ad={ad} />
        </Col>
      ))}
    </Row>
  );
}

*/

export default function ProductsList() {
      return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {products.map(item => (
        <Col key={item.id}>
          <ProductCard5 title={item.title} description={item.description}/>
        </Col>
      ))}
    </Row>
  );
}