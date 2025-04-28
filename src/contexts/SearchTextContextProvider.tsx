import { createContext, useState } from 'react';
import { useDebounce } from '../lib/hooks';

type SearchTextContext = {
  searchText: string;
  debounceSearchText: string;
  handleChangeSearchText: (newSearchText: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const SearchTextContext = createContext<SearchTextContext | null>(null);

export default function SearchTextContextProvider({ children }: Props) {
  const [searchText, setSearchText] = useState('');
  const debounceSearchText = useDebounce(searchText, 250);
  const handleChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
  };
  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        debounceSearchText,
        handleChangeSearchText
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
