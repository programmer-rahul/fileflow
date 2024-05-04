import { useRef, useState } from "react";
import { checkTotalFilesSize } from "../../utils";
import toast from "react-hot-toast";
import FileDropBanner from "./upload/FileDropBanner";
import FileUploadStatus from "./upload/FileUploadStatus";

const FileDropZone = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [filesUploading, setFilesUploading] = useState(false);
  const [recieverWaiting, setRecieverWaiting] = useState(false);

  const handleFileSelect = () => {
    console.log(fileInputRef.current);
    fileInputRef.current?.click();
  };

  const handleFileChanges = () => {
    if (!fileInputRef.current) return;
    if (!fileInputRef.current.files) return;

    console.log(checkTotalFilesSize(fileInputRef.current.files));

    // check total files size if higher than prevent user to upload files
    if (!checkTotalFilesSize(fileInputRef.current.files)) {
      console.log("Total file size is greater than expected file size");
      toast.error("File size is greater than expected");
    }

    // set files uploading state to true
    setFilesUploading(true);
    setTimeout(() => {
      setFilesUploading(false);
    }, 4000);
  };

  return (
    <div
      className="file-drop-zone h-[20rem] w-[40rem] cursor-pointer border-dashed p-4"
      onClick={handleFileSelect}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-rose-500">
        {!filesUploading ? <FileDropBanner /> : <FileUploadStatus />}
      </div>

      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChanges}
        multiple
        disabled={filesUploading}
      />
    </div>
  );
};
export default FileDropZone;
