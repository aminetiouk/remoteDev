import React from 'react';
import { sortBy } from '../lib/types';

type SortingControlsProps = {
  sortBy: sortBy;
  onClick: (newSortBy: sortBy) => void;
};

export default function SortingControls({
  sortBy,
  onClick
}: SortingControlsProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={() => onClick('relevant')}
        isActive={sortBy === 'relevant'}
      >
        Relevant
      </SortingButton>
      <SortingButton
        onClick={() => onClick('recent')}
        isActive={sortBy === 'recent'}
      >
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--recent ${isActive ? 'sorting__button--active' : ''}`}
    >
      {children}
    </button>
  );
}
