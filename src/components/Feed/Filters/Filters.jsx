import styles from "./Filters.module.css";
import Search from "../../../icons/search";

const Filter = ({ setSearch, setSort }) => {
    const onSearch = ({ target }) => {
        setSearch(target.value);
    };

    const onSort = ({ target }) => {
        setSort(target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <input
                    onChange={onSearch}
                    placeholder="Search..."
                    className={styles.input}
                    type="text"
                />
                <Search className={styles.searchIcon} />
            </div>
            <div className={styles.sortContainer}>
                <p className={styles.sortText}>Sort by</p>
                <select onChange={onSort} className={styles.sortDropdown} name="sort" id="sort">
                    <option value="name">Name</option>
                    <option value="dateLastEdited">Last Edited</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
