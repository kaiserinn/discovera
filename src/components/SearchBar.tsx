import Select from "./Select";

type SearchBarProps = {
  isSearched: boolean,
  searchClicked: () => void,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  selectValue: string,
  setSelectValue: React.Dispatch<React.SetStateAction<string>>,
};

const SearchBar = ({
  isSearched,
  searchClicked,
  inputValue,
  setInputValue,
  selectValue,
  setSelectValue
}: SearchBarProps) => {
  if (!isSearched) {
    return (
      <>
        <div className="text-center text-7xl font-bold text-[#5627FF]">
          BALOLA
        </div>
        <div className="flex justify-center gap-2">
          <Select selectValue={selectValue} setSelectValue={setSelectValue} />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-1/2 rounded-md border border-gray-300 p-2 shadow-lg"
          />
          <button
            onClick={searchClicked}
            type="submit"
            className="rounded-md border border-gray-300 bg-white px-4 shadow-lg"
          >
            Search
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex items-center justify-center gap-2 bg-[#5627FF] py-4 shadow-md">
        <Select selectValue={selectValue} setSelectValue={setSelectValue} />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-1/2 rounded-md border border-gray-300 px-2 py-1 shadow-lg"
        />
        <button
          onClick={searchClicked}
          type="submit"
          className="rounded-md border border-gray-300 bg-white px-4 py-1 shadow-lg"
        >
          Search
        </button>
      </div>
    );
  }
};

export default SearchBar;
