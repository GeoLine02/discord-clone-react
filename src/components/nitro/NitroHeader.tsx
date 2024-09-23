import { TiRefreshOutline } from "react-icons/ti";

const NitroHeader = () => {
  return (
    <header className="flex items-center justify-between w-full bg-secondary-gray text-white py-2">
      <div className="flex items-center gap-2">
        <TiRefreshOutline size={30} />
        <h1>Nitro</h1>
      </div>
    </header>
  );
};

export default NitroHeader;
