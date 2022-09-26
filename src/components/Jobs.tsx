import { JobCard } from "./Job-card";

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
    jobs: Job[];
    filters?: string[];
    onClick: any;
}

export const Jobs = ({ jobs, filters = [], onClick }: Props) => {
    return (
        <>
        <div style={{
            margin: "0 auto",
            maxWidth: 1100,
            

        }}>

            {jobs.map((job: Job) => (
                <JobCard job={job} key={job.id} filters={filters} onClick={onClick} />
            ))}
        </div>
        </>
    );
};
