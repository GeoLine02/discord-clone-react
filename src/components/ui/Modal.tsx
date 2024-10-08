const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black bg-opacity-75 w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
      <div className="absolute">{children}</div>
    </div>
  );
};

export default Modal;
