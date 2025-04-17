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
import { useDebounce, useJobItems } from '../lib/hooks';
import { Toaster } from 'react-hot-toast';

function App() {
  const [searchText, setSearchText] = useState('');
  const debounceSearchText = useDebounce(searchText, 250);
  const { jobItems, isLoading } = useJobItems(debounceSearchText);
  const [currentPage, setCurrentPage] = useState(1);

  const totalNumberOfResult = jobItems?.length;
  const jobItemsSliced = jobItems?.slice(currentPage * 7 - 7, currentPage * 7);

  const handleChangePage = (direction: 'next' | 'previous') => {
    if (direction === 'next') {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'previous') {
      setCurrentPage(prev => prev - 1);
    }
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
            <SortingControls />
          </SidebarTop>

          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <PaginationControls
            currentPage={currentPage}
            onClick={handleChangePage}
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
