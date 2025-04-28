import { createContext, useState } from 'react';
import { useDebounce } from '../lib/hooks';

type SearchTextContext = {
  activeId: number | null;
};

type Props = {
  children: React.ReactNode;
};

export const SearchTextContext = createContext<SearchTextContext | null>(null);

export default function SearchTextContextProvider({ children }: Props) {
  const [searchText, setSearchText] = useState('');
  const debounceSearchText = useDebounce(searchText, 250);
  return (
    <SearchTextContext.Provider
      value={{
        activeId
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
