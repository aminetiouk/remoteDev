import { TriangleDownIcon } from '@radix-ui/react-icons';
import { useRef, useState } from 'react';
import BookmarksPopover from './BookmarksPopover';
import { useOnClickOutside } from '../lib/hooks';

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false));

  const togglePopover = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <section>
      <button ref={buttonRef} onClick={togglePopover} className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}
