import styles from "./Pagination.module.css";

const Pagination = ({ pageNo, setPageNo, totalNoOfPages }) => {
    const allPagesArray = Array(totalNoOfPages)
        .fill()
        .map((a, i) => i + 1);
    const isPreviousDisabled = pageNo == 1;
    const isNextDisabled = pageNo == totalNoOfPages;

    const onPageChange = (pageNo) => {
        setPageNo(pageNo);
        // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div className={styles.container}>
            <button
                className={`${styles.previousBtn} ${!isPreviousDisabled && styles.cursorPointer} ${
                    isPreviousDisabled && styles.disabled
                }`}
                onClick={() => !isPreviousDisabled && onPageChange(pageNo - 1)}
            >
                Previous
            </button>
            {allPagesArray?.map((page, i) => (
                <button
                    key={i}
                    className={`${styles.pageNo} ${pageNo == page && styles.currentPageNo}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={`${styles.next} ${!isNextDisabled && styles.cursorPointer} ${
                    isNextDisabled && styles.disabled
                }`}
                onClick={() => !isNextDisabled && onPageChange(pageNo + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
