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
    <div className="mx-10 rounded-md gap-4 bg-white p-4 shadow-md flex">
      <div className="text-xl w-full" >
        <div style={{ backgroundColor: !isError ? 'rgb(220 252 231)' : 'rgb(254 202 202)' }}
        className="rounded-md p-6 font-bold text-5xl">{result}</div>
        <div className="bg-white rounded-md pt-6 text-3xl">
          {example}
        </div>
      </div>
      {gimmick && (
        <img src={`../../public/${gimmick}`} alt="Gimmick" />
      )}
    </div>
    );
  } else {
    return;
  }
};

export default ResultBox;
