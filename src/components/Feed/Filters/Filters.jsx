import styles from "./Filters.module.css";
import Search from "../../../icons/search";

const Filter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <input placeholder="Search..." className={styles.input} type="text" />
                <Search className={styles.searchIcon} />
            </div>
            <div className={styles.sortContainer}>
                <p className={styles.sortText}>Sort by</p>
                <select className={styles.sortDropdown} name="sort" id="sort">
                    <option value="name">Name</option>
                    <option value="name">Last Edited</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
