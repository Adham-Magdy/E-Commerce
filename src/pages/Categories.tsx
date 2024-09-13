import { Col, Container, Row } from "react-bootstrap";
import Category from "../components/eCommerce/Category/Category";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { actGetCategories } from "../store/categories/categoriesSlice";
import { Loading } from "../components/feedback";

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

  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category
              title={record.title}
              img={record.img}
              prefix={record.prefix}
            />
          </Col>
        ))
      : "there are no categories";

  return (
    <>
      <Container>
        <Loading status={loading} error={error}>
        <Row>{categoriesList}</Row>

        </Loading>
      </Container>
    </>
  );
};

export default Categories;
