import Image from "next/image";
import data from "../data.json";
import styles from "./Job-card.module.scss";

interface Job {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

interface Props {
    job: Job;
    onClick?: any;
    filters: string[];
}

export const JobCard = ({ job, onClick, filters }: Props) => {
    const rawTags = [...job.tools, job.level, ...job.languages];
    const tags = rawTags.map((tag) => tag.toLowerCase());

    const exists = filters.every((tag) => tags.includes(tag));
    return (
        <>
            {filters.length > 0 && !exists ? null : (
                <div className={`${styles.card} ${job.featured ? styles.featuredColor : null}` }>
                    <div className={styles.featuredBackground}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={job.logo}
                                alt={`${job.company} logo`}
                                layout="responsive"
                                width={"40"}
                                height={"40"}
                            />
                        </div>
                        <div>
                            <div className={`${styles.title} `}>
                                <h2> {job.company} </h2>
                                {job.new && (
                                    <div
                                        className={`${styles.label} ${styles.new}`}
                                    >
                                        NEW!
                                    </div>
                                )}
                                {job.featured && (
                                    <div
                                        className={`${styles.label} ${styles.featured}`}
                                    >
                                        FEATURED
                                    </div>
                                )}
                            </div>
                            <div className={styles.position}>
                                <h3>{job.position}</h3>
                            </div>
                            <div className={styles.info}>
                                <p> {job.postedAt} </p>
                                <div className={styles.dot}></div>
                                <p> {job.contract} </p>
                                <div className={styles.dot}></div>
                                <p> {job.location} </p>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.filters}>
                            {tags.map((item) => (
                                <p
                                    className={styles.filter}
                                    onClick={onClick}
                                    key={item}
                                >
                                    {`${item}`}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
