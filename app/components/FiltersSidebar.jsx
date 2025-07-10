import React, {useEffect} from 'react';
import { Form, Button, InputGroup, Card } from 'react-bootstrap';



export default function FiltersSidebar() {




  return (
    <Card style={{}}>
        <Card.Body>
            <Card.Title><h5>Фильтры</h5></Card.Title>
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Категория</Form.Label>
          <Form.Select>
            <option>Все</option>
            <option>ПК</option>
            <option>Ноутбуки</option>
            <option>Видеокарты</option>
            <option>Процессоры</option>
            <option>ОЗУ</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Производительность</Form.Label>
          <Form.Range min={1} max={10} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Цена, ₽</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="от" />
            <Form.Control type="number" placeholder="до" />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Бренд</Form.Label>
          <Form.Select>
            <option>Все</option>
            <option>Intel</option>
            <option>AMD</option>
            <option>NVIDIA</option>
            <option>ASUS</option>
            <option>MSI</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit" className="w-100">
          Применить
        </Button>
      </Form>
      </Card.Body>
    </Card>
  );
}