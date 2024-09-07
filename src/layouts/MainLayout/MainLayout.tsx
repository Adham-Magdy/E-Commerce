import { Container } from "react-bootstrap";
import Header from "../../components/common/Header/Header";

import styles from "./styles.module.css";
const MainLayout = () => {
  return (
    <Container className={styles.container}>
     
      <Header/>
   
      <div className={styles.wrapper}></div>
     
    </Container>
  );
};

export default MainLayout;
