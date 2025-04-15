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

function App() {
  const [searchText, setSearchText] = useState('');
  const debounceSearchText = useDebounce(searchText, 250);
  const { jobItems, isLoading } = useJobItems(debounceSearchText);

  const totalNumberOfResult = jobItems?.length;
  const jobItemsSliced = jobItems?.slice(0, 7);

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
          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>

      <Footer />
    </>
  );
}

export default App;
