const ResultBox = ({
  result,
  example,
  isError,
}: {
  result: string;
  example: string;
  isError: boolean;
}) => {
  if (result) {
    return (
      <div className="mx-10 rounded-md bg-white p-4 shadow-md">
        <div
          style={{ backgroundColor: !isError ? 'rgb(220 252 231)' : 'rgb(254 202 202)' }}
          className="rounded-md p-4 text-xl shadow-md"
        >
          {result}
        </div>
        <div className="pt-4">{example}</div>
      </div>
    );
  } else {
    return;
  }
};

export default ResultBox;
