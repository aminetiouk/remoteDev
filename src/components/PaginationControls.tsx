import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { RESULT_PER_PAGE } from '../lib/constants';

type TPaginationControlsProp = {
  onClick: (direction: 'next' | 'previous') => void;
  currentPage: number;
  totalNumberOfResult: number;
};

export default function PaginationControls({
  onClick,
  currentPage,
  totalNumberOfResult
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
      {currentPage < totalNumberOfResult / RESULT_PER_PAGE && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          onClick={() => onClick('next')}
        />
      )}
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
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        onClick();
        e.currentTarget.blur();
      }}
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
