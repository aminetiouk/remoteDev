import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

type TPaginationControlsProp = {
  onClick: (direction: "next" | "previous") => void;
  currentPage: number;
}

export default function PaginationControls({ onClick, currentPage }: TPaginationControlsProp) {
  return (
    <section className="pagination">
      <button
        onClick={() => onClick('previous')}
        className="pagination__button"
      >
        <ArrowLeftIcon />
        page {currentPage === 0 ? 0 : currentPage - 1}
      </button>
      <button onClick={() => onClick('next')} className="pagination__button">
        page {currentPage < 1 ? 1 : currentPage}
        <ArrowRightIcon />
      </button>
    </section>
  );
}
