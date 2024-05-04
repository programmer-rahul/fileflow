const FileReciever = () => {
  return (
    <div className="file-reciever flex h-[6rem] w-[40rem] flex-col justify-between rounded-md bg-rose-500 px-4 py-2 outline">
      <p className="text-xl">Recieve</p>
      <div className="relative">
        <input
          type="number"
          className="w-full rounded-md bg-gray-300 p-2 pr-20 text-xl outline-none"
          placeholder="Input Key"
        />
        <img
          src="recieve.svg"
          alt="recieve-files-icon"
          width={35}
          className="absolute right-2 top-0"
        />
      </div>
    </div>
  );
};
export default FileReciever;
