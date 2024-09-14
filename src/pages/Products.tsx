import { Container} from 'react-bootstrap'
import Product from '../components/eCommerce/Product/Product'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useEffect } from 'react';
import { actGetProductsByCatPrefix, productsCleanUp } from '../store/products/productsSlice';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/feedback';
import { GridList } from '../components/common';

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
 
  return (
    <Container>
      <Loading status={loading} error={error}>
     <GridList
     records={records}
     renderItems={(record)=> <Product {...record}/>}
     />
      </Loading>
    
   </Container>
  )
}

export default Products
