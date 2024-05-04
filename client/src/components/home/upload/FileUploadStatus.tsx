const FileUploadStatus = () => {
  return (
    <div>
      <p className="text-2xl">Your files are on their way...</p>
      <div className="uploading-loader pb-4 pt-8"></div>
      <div className="progress-bar"></div>
      <div className="absolute right-2 top-2">
        <img src="cancel.svg" alt="cancel-upload" width={40} />
      </div>
    </div>
  );
};
export default FileUploadStatus;
