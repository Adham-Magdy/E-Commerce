import styles from "./styles.module.css";
const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.categoryImg}>
        <img
          src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
          alt=""
        />
      </div>
      <h4 className={styles.categoryTitle}>Title</h4>
    </div>
  );
};

export default Category;
