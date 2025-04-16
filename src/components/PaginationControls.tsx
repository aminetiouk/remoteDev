import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

type TPaginationControlsProp = {
  onClick: (direction: 'next' | 'previous') => void;
  currentPage: number;
};

export default function PaginationControls({
  onClick,
  currentPage
}: TPaginationControlsProp) {
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage}
          onClick={() => onClick('previous')}
        />
      )}
      <PaginationButton
        direction="next"
        currentPage={currentPage}
        onClick={() => onClick('next')}
      />
    </section>
  );
}

type PaginationButtonProps = {
  currentPage: number;
  onClick: () => void;
  direction: 'next' | 'previous';
};

function PaginationButton({
  currentPage,
  onClick,
  direction
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === 'next' && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
      {direction === 'previous' && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}
    </button>
  );
}
