import { MdCameraAlt } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { useRef, useState } from "react";

interface IUploadProps {
  className?: string;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  file: File | null;
}

const Upload = ({ className, file, setFile }: IUploadProps) => {
  const fileInputRef = useRef<null | HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setFileUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {!file && !fileUrl && (
        <div
          onClick={handleClick}
          className={
            " border-2 border-dashed relative p-3 cursor-pointer flex items-center justify-center flex-col w-fit rounded-full " +
            `${className}`
          }
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
          />
          <div className="bg-white text-primary-blue absolute rounded-full top-0 right-0">
            <FaCirclePlus size={22} />
          </div>
          <MdCameraAlt size={30} />
          <span className="uppercase text-sm">upload</span>
        </div>
      )}

      {fileUrl && (
        <div className="w-fit rounded-full">
          <img
            src={fileUrl}
            alt="Uploaded image"
            className="w-20 aspect-square rounded-full"
          />
        </div>
      )}
    </>
  );
};

export default Upload;
