const FileDropBanner = () => {
  return (
    <>
      <img src="upload.svg" alt="uplaod-files" width={60} />
      <p className="text-xl">Drop Files, Spread Smiles</p>
      <p className="text-sm text-stone-700">Max file size: 100MB</p>
    </>
  );
};
export default FileDropBanner;
