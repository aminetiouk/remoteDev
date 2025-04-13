type TotalNumberOfResultProp = {
  totalNumberOfResult: number;
}

export default function ResultsCount({ totalNumberOfResult }: TotalNumberOfResultProp) {
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfResult}</span> results
    </p>
  );
}
