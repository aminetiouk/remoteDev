import { JobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';

type TJobItemsProps = {
  jobItems: JobItem[];
  isLoading: boolean;
}

export function JobList({ jobItems, isLoading }: TJobItemsProps) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map(jobItem => (
          <JobListItem key={jobItem.id} jobItem={jobItem} />
        ))}
    </ul>
  );
}

export default JobList;
