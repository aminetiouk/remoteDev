import { useJobItemsContext } from "../lib/hooks";

export default function ResultsCount() {
  const {totalNumberOfResult} = useJobItemsContext();
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfResult}</span> results
    </p>
  );
}
