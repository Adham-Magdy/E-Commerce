import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { TCategoryModel } from "../../../store/categories/categoriesSlice";


const Category = ({title,img,prefix}:TCategoryModel) => {
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
