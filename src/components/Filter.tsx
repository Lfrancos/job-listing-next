import Image from "next/image";
import styles from "./Filter.module.scss";

interface Props {
    filters: string[];
    onDelete: any;
    onClear: any;
}

export const Filter = ({ filters, onDelete, onClear }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <div className={styles.filters}>
                    {filters.map((filter) => (
                        <div className={`${styles.filter}`} key={filter}>
                            <p>{filter}</p>
                            <button className={styles.close} value={filter} onClick={onDelete}>
                                <div className={styles.closeContainer}>
                                    <Image
                                        src={"/images/icon-remove.svg"}
                                        alt={"remove icon"}
                                        layout={"responsive"}
                                        width={"40"}
                                        height={"40"}
                                    />
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
                <button className={styles.clear} onClick={onClear}>
                    Clear
                </button>
            </div>
        </div>
    );
};
