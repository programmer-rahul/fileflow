import Header from "../components/home/Header";

const HomePage = () => {
  return (
    <main className="bg-pattern flex max-h-screen min-h-screen flex-col">
      <div className="h-full ">
        {/* header  */}
        <Header />

        {/* main  */}
        <div className="flex h-full flex-col items-center gap-16 py-20">
          <div>
            <h3 className="text-4xl font-semibold ">Flow Your Files Freely</h3>
            <p className="text-center text-xl text-neutral-700">
              File Sharing, Simplified.
            </p>
          </div>

          <div className="send-file-container h-[20rem] w-[40rem] cursor-pointer border-dashed p-4">
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-rose-500">
              <img src="upload.svg" alt="uplaod-files" width={60} />
              <p className="text-xl">Drop Files, Spread Smiles</p>
              <p className="text-sm text-stone-700">Max file size: 100MB</p>
            </div>
          </div>

          <div className="recieve-file-container flex h-[6rem] w-[40rem] flex-col justify-between rounded-md bg-rose-500 px-4 py-2 outline">
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
        </div>
      </div>
    </main>
  );
};
export default HomePage;
