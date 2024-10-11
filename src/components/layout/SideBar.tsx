import ServerList from "../servers/serverList";

const SideBar = () => {
  return (
    <div className="flex bg-primary-gray">
      <section className="flex flex-col items-center gap-2 py-2 min-h-screen px-2 overflow-y-auto overflow-x-hidden">
        <div className="bg-primary-blue max-w-12 min-w-12 aspect-square rounded-lg cursor-pointer"></div>
        <ServerList />
      </section>
    </div>
  );
};

export default SideBar;
