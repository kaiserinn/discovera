const ResultBox = ({
  result,
  example,
  gimmick,
  isError,
}: {
  result: string;
  example: string;
  isError: boolean;
  gimmick: string;
}) => {
  if (result) {
    return (
      <div className="mx-10 rounded-md bg-white p-4 shadow-md">
        {' '}
        <div
          style={{
            backgroundColor: !isError ? 'rgb(220 252 231)' : 'rgb(254 202 202)',
          }}
          className="self-stretch rounded-md p-4 text-xl shadow-md"
        >
          {result}
        </div>
        <div className="pb-20 pt-5 text-4xl">{example}</div>
        {gimmick && (
          <img src={`../../public/${gimmick}`} className="mx-auto pb-32 pt-5" />
        )}
      </div>
    );
  } else {
    return;
  }
};

export default ResultBox;
