import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface IProps {
title:string;
img:string;
prefix:string;
};

const Category = ({title,img,prefix}:IProps) => {
  return (
    <div className={styles.category}>
      <Link to={`/categories/products/${prefix}`}>
      <div className={styles.categoryImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h4 className={styles.categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
