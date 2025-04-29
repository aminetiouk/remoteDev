import { createContext, useCallback, useMemo, useState } from 'react';
import { useSearchQuery, useSearchTextContext } from '../lib/hooks';
import { RESULT_PER_PAGE } from '../lib/constants';
import { JobItem, SortBy } from '../lib/types';

type JobItemsContext = {
  totalNumberOfResult: number;
  handleChangePage: (direction: 'next' | 'previous') => void;
  handleChangeSortBy: (newSortBy: SortBy) => void;
  jobItemsSortedAndSliced: JobItem[];
  jobItems: JobItem[] | undefined;
  isLoading: boolean;
  sortBy: SortBy;
  currentPage: number;
};

type Props = {
  children: React.ReactNode;
};

export const JobItemsContext = createContext<JobItemsContext | null>(null);

export default function JobItemsContextProvider({ children }: Props) {
  const { debounceSearchText } = useSearchTextContext();
  const { jobItems, isLoading } = useSearchQuery(debounceSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>('relevant');

  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])].sort((a, b) => {
        if (sortBy === 'relevant') {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      }),
    [sortBy, jobItems]
  );

  const totalNumberOfResult = jobItems?.length;
  const jobItemsSortedAndSliced = useMemo(
    () =>
      jobItemsSorted.slice(
        currentPage * RESULT_PER_PAGE - RESULT_PER_PAGE,
        currentPage * RESULT_PER_PAGE
      ),
    [currentPage, jobItemsSorted]
  );

  const handleChangePage = useCallback((direction: 'next' | 'previous') => {
    if (direction === 'next') {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'previous') {
      setCurrentPage(prev => prev - 1);
    }
  }, []);

  const handleChangeSortBy = useCallback((newSortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  }, []);

  const contextValue = useMemo(
    () => ({
      totalNumberOfResult,
      handleChangeSortBy,
      handleChangePage,
      jobItemsSortedAndSliced,
      jobItems,
      isLoading,
      sortBy,
      currentPage
    }),
    [
      totalNumberOfResult,
      handleChangeSortBy,
      handleChangePage,
      jobItemsSortedAndSliced,
      jobItems,
      isLoading,
      sortBy,
      currentPage
    ]
  );

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>
  );
}
