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
      <div className="mx-10 flex gap-4 rounded-md bg-white p-4 shadow-md">
        <div className="w-full text-xl">
          <div
            style={{ backgroundColor: !isError ? 'rgb(220 252 231)' : 'rgb(254 202 202)' }}
            className="rounded-md p-6 text-5xl font-bold"
          >
            {result}
          </div>
          <div className="rounded-md bg-white pt-6 text-3xl">{example}</div>
        </div>
        {gimmick && <img src={`../../public/${gimmick}`} className="max-w-xl" alt="Gimmick" />}
      </div>
    );
  } else {
    return;
  }
};

export default ResultBox;
