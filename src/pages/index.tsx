import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { JobCard } from "../components/Job-card";
import styles from "./index.module.scss";

import data from "../data.json";
import { Filter } from "../components/Filter";
import { Jobs } from "../components/Jobs";

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
    onClick: any;
}

const Home: NextPage = () => {
    const [pageWidth, setPageWidth] = useState(0);
    const [filters, setFilters] = useState<string[]>([]);
    const [filteredData, setFilteredData] = useState<Job[]>(data);

    useEffect(() => {
        setPageWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setPageWidth(window.innerWidth);
        });
    }, [pageWidth]);

    const mobile = pageWidth > 800 ? false : true;

    const handleFilter = (e: any) => {
        const filter: string = e.target.innerText.toLowerCase();
        if (filters.includes(filter)) {
            return;
        } else {
            setFilters((prev) => [...prev, filter]);
        }
    };

    const handleDeleteFilter = (e: any) => {
        const deleted = e.currentTarget.value.toLowerCase();
        setFilters((prev) => {
            return prev.filter((input) => input !== deleted);
        });
    };
    const handleClear = () => {
        setFilters([]);
    };
    return (
        <>
            <Head>
                <title>Jobs APP</title>
            </Head>
            <main>
                <div className={styles.headerContainer}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={
                                mobile
                                    ? "/images/bg-header-mobile.svg"
                                    : "/images/bg-header-desktop.svg"
                            }
                            alt="jobs background"
                            layout="responsive"
                            width={"100"}
                            height={mobile ? "34" : "20"}
                            priority
                        />
                    </div>
                </div>
                {filters.length > 0 ? (
                    <Filter
                        filters={filters}
                        onDelete={handleDeleteFilter}
                        onClear={handleClear}
                    />
                ) : null}
                <Jobs
                    jobs={filteredData}
                    filters={filters}
                    onClick={handleFilter}
                />
            </main>
        </>
    );
};

export default Home;
