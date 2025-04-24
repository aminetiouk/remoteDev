import { TriangleDownIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import BookmarksPopover from './BookmarksPopover';

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest('.bookmarks-btn') &&
        !e.target.closest('.bookmarks-popover')
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section>
      <button onClick={togglePopover} className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover />}
    </section>
  );
}
