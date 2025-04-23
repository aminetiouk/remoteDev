import { useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header, { HeaderTop } from './Header';
import Sidebar, { SidebarTop } from './Sidebar';
import JobItemContent from './JobItemContent';
import BookmarksButton from './BookmarksButton';
import Logo from './Logo';
import SearchForm from './SearchForm';
import JobList from './JobList';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';
import { useDebounce, useSearchQuery } from '../lib/hooks';
import { Toaster } from 'react-hot-toast';
import { sortBy } from '../lib/types';
import { RESULT_PER_PAGE } from '../lib/constants';

function App() {
  const [searchText, setSearchText] = useState('');
  const debounceSearchText = useDebounce(searchText, 250);
  const { jobItems, isLoading } = useSearchQuery(debounceSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<sortBy>('relevant');

  const jobItemsSorted = [...(jobItems || [])].sort((a, b) => {
    if (sortBy === 'relevant') {
      return b.relevanceScore - a.relevanceScore;
    } else {
      return a.daysAgo - b.daysAgo;
    }
  });

  const totalNumberOfResult = jobItems?.length;
  const jobItemsSortedAndSliced = jobItemsSorted.slice(
    currentPage * RESULT_PER_PAGE - RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  );

  const handleChangePage = (direction: 'next' | 'previous') => {
    if (direction === 'next') {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'previous') {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleChangeSortBy = (newSortBy: sortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  };
  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResult={totalNumberOfResult} />
            <SortingControls sortBy={sortBy} onClick={handleChangeSortBy} />
          </SidebarTop>

          <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />
          <PaginationControls
            currentPage={currentPage}
            onClick={handleChangePage}
            totalNumberOfResult={totalNumberOfResult}
          />
        </Sidebar>
        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
