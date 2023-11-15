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
    //   <div className="mx-10 rounded-md bg-white p-4 shadow-md"> <div style={{ backgroundColor: !isError ? 'rgb(220 252 231)' : 'rgb(254 202 202)' }}
    //       className="rounded-md p-4 text-xl shadow-md self-stretch"
    //     >
    //       {result}
    //     </div>
    //     <div className="pt-4">{example}</div>
    //     {gimmick && (
    //       <img src={`../../public/${gimmick}`} className="pt-4 mx-auto" />
    //     )}
    //   </div>
    // );
    <div className="mx-10 rounded-md bg-white p-4 shadow-md flex flex-col lg:flex-row">
      <div className="p-4 text-xl  mb-4  lg:w-2/3 lg:mr-4" >
        <div style={{ backgroundColor: !isError ? 'rgb(220 252 231)' : 'rgb(254 202 202)' }}  
        className="bg-blue-400 rounded-md p-6 text-4xl lg:mb-2 ">{result}</div>
        <div className="bg-white rounded-md  p-4 text-xl  lg:mb-0">
          {example}
        </div>
      </div>
      <div>
        {gimmick && (
        <img src={`../../public/${gimmick}`}alt="Gimmick" />
        )}
      </div>
    </div>
    );
  } else {
    return;
  }
};

export default ResultBox;
