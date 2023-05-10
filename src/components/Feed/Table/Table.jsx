import styles from "./Table.module.css";

const Table = ({ data }) => {
    const headers = [
        {
            name: "Name",
            identifier: "name",
        },
        {
            name: "Description",
            identifier: "description",
        },
        {
            name: "Last Edited",
            identifier: "dateLastEdited",
        },
        {
            name: "Image",
            identifier: "image",
        },
    ];

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.td}>
                    <tr>
                        {headers.map((header, i) => (
                            <th className={styles.td} key={i}>
                                {header.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, i) => (
                        <tr className={styles.tr} key={i}>
                            <td className={styles.td}>{row.name}</td>
                            <td className={styles.td}>{row.description}</td>
                            <td className={styles.td}>
                                {new Date(row.dateLastEdited).toLocaleDateString()}
                            </td>
                            <td className={styles.td}>
                                <a href={row.image} target="_blank">
                                    Click to View
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
