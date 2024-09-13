import { Container, Row, Col } from 'react-bootstrap'
import Product from '../components/eCommerce/Product/Product'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useEffect } from 'react';
import { actGetProductsByCatPrefix, productsCleanUp } from '../store/products/productsSlice';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/feedback';

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const{loading,error,records} = useAppSelector(state=> state.products);

  useEffect(()=>{
    let prefix: string
    if(params.prefix && typeof params.prefix ==="string"){
      prefix = params.prefix;
      dispatch(actGetProductsByCatPrefix(prefix));
     
    }
    return ()=>{
      dispatch(productsCleanUp());
    }
   

  },[dispatch,params]);
  const productsList =
  records.length > 0
    ? records.map((record) => (
        <Col
          xs={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <Product
           {...record}
          />
        </Col>
      ))
    : "there are no products";
  return (
    <Container>
      <Loading status={loading} error={error}>
      <Row>
    {productsList}
    </Row>
      </Loading>
    
   </Container>
  )
}

export default Products
