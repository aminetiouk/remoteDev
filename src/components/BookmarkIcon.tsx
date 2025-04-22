import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { BookmarksContext } from '../contexts/BookmarksContextProvider';

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const context = useContext(BookmarksContext);
  if(!context) {
    throw new Error(
      "useContext(BookmarksContext) must be used within a BookmarksContextProvider"
    );
  }
  const { bookmarkedIds, handleToggleBookmark } = context;
  return (
    <button
      className="bookmark-btn"
      onClick={e => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) ? 'filled' : ''}`}
      />
    </button>
  );
}
