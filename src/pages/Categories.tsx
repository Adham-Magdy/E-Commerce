import {  Container } from "react-bootstrap";
import Category from "../components/eCommerce/Category/Category";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { actGetCategories } from "../store/categories/categoriesSlice";
import { Loading } from "../components/feedback";
import { GridList } from "../components/common";

const Categories = () => {
  const dispatch = useAppDispatch();
  const {  loading,error,records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    // Prevent to extra getCategories Actions
    if(!records.length){
      dispatch(actGetCategories());
    }

  }, [dispatch,records]);

 

  return (
    <>
      <Container>
        <Loading status={loading} error={error}>
       <GridList records={records} renderItems={(record)=> <Category {...record}/>}/>
        </Loading>
      </Container>
    </>
  );
};

export default Categories;
