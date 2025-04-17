export default function SortingControls({onClick}) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button onClick={() => onClick("relevant")} className="sorting__button sorting__button--relevant">
        Relevant
      </button>

      <button onClick={() => onClick("recent")} className="sorting__button sorting__button--recent">
        Recent
      </button>
    </section>
  );
}
