import Input from "../ui/Input";
import { FiSearch } from "react-icons/fi";

interface ISearchProps {
  placeholder: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  hasIcon: boolean;
}

const Search = ({ placeholder, setSearchValue, hasIcon }: ISearchProps) => {
  return (
    <div>
      <Input placeholder={placeholder} setValue={setSearchValue} />
      {hasIcon && <FiSearch />}
    </div>
  );
};

export default Search;
