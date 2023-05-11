import styles from "./Filters.module.css";
import Search from "../../../icons/search";

const Filter = ({ search, sort, setSearch, setSort, setPageNo }) => {
    const onSearch = ({ target }) => {
        setSearch(target.value);
        setPageNo(1);
    };

    const onSort = ({ target }) => {
        setSort(target.value);
        setPageNo(1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <input
                    onChange={onSearch}
                    value={search}
                    placeholder="Search..."
                    className={styles.input}
                    type="text"
                />
                <Search className={styles.searchIcon} />
            </div>
            <div className={styles.sortContainer}>
                <p className={styles.sortText}>Sort by</p>
                <select
                    value={sort}
                    onChange={onSort}
                    className={styles.sortDropdown}
                    name="sort"
                    id="sort"
                >
                    <option value="name">Name</option>
                    <option value="dateLastEdited">Last Edited</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
