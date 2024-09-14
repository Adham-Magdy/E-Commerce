import { Col, Row } from "react-bootstrap";

type GridListProps<T>={
    records:T[],
    renderItems:(record:T) => React.ReactNode;
}

type HasID = {id?:number};
const GridList = <T extends HasID>({records,renderItems}:GridListProps<T>) => {
    /**
     * Implement Render Props Patterns
     * sharing logic and data among several components, 
     * Components can be made very reusable
     */
    const gridList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
           {renderItems(record)}
          </Col>
        ))
      : "there are no categories";
  return (
    <Row>
      {gridList}
    </Row>
  )
}

export default GridList
