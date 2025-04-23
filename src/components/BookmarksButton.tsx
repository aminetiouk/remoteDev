import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import BookmarksPopover from "./BookmarksPopover";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <section>
      <button onClick={togglePopover} className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>
      { isOpen && <BookmarksPopover/>}
    </section>
  );
}
