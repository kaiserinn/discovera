type selectProps = {
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const Select = ({ selectValue, setSelectValue }: selectProps) => {
  return (
    <select
      value={selectValue}
      onChange={(e) => setSelectValue(e.target.value)}
      className="rounded-md px-2 py-1 bg-white shadow-md"
    >
      <option value="id_en">ID - EN</option>
      <option value="en_id">EN - ID</option>
    </select>
  );
};

export default Select;
