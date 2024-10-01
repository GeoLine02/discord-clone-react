import Input from "../ui/Input";

interface ISearchProps {
  placeholder: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ placeholder, setSearchValue }: ISearchProps) => {
  return (
    <div>
      <Input placeholder={placeholder} setValue={setSearchValue} />
    </div>
  );
};

export default Search;
