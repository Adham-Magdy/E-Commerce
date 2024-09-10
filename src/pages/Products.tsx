import { Container, Row, Col } from 'react-bootstrap'
import Product from '../components/eCommerce/Product/Product'

const Products = () => {
  return (
    <Container>
    <Row>
      <Col xs={6} md={3} className='d-flex justify-content-center mt-2 mb-5 '>
      <Product/>
      </Col>
      <Col xs={6} md={3} className='d-flex justify-content-center mt-2 mb-5 '>
      <Product/>
      </Col>
      <Col xs={6} md={3} className='d-flex justify-content-center mt-2 mb-5 '>
      <Product/>
      </Col>
      <Col xs={6} md={3} className='d-flex justify-content-center mt-2 mb-5 '>
      <Product/>
      </Col>
      <Col xs={6} md={3} className='d-flex justify-content-center mt-2 mb-5 '>
      <Product/>
      </Col>
      <Col xs={6} md={3} className='d-flex justify-content-center mt-2 mb-5 '>
      <Product/>
      </Col>
      <Col xs={6} md={3} className='d-flex justify-content-center mt-2 mb-5 '>
      <Product/>
      </Col>
      <Col xs={6} md={3} className='d-flex justify-content-center mt-2 mb-5 '>
      <Product/>
      </Col>
    </Row>
   </Container>
  )
}

export default Products
