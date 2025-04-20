import { useState, createContext, useEffect } from 'react';

export const BookmarksContext = createContext(null);

export default function BookmarksContextProvider({ children }) {
  const bookmarkIdsFromLocalstorage = JSON.parse(
    localStorage.getItem('bookmarkedIds') || '[]'
  );

  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(bookmarkIdsFromLocalstorage);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(prev => prev.filter(item => item !== id));
    } else {
      setBookmarkedIds(prev => [...prev, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem('bookmarkedIds', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  return (
    <BookmarksContext.Provider value={{ bookmarkedIds, handleToggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}
