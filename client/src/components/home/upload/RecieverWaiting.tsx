const RecieverWaiting = () => {
  return (
    <>
      <div className="-mt-20 flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="left-arrow.svg" alt="back-arrow" width={40} />
          <p className="text-xl font-semibold">Waiting...</p>
        </div>
        <div className="text-white">
          <p>06:16</p>
        </div>
      </div>
      <p className="self-start px-16 text-white">
        Please input the 6-digit code on the receiving end.
      </p>

      <div className="flex gap-2 pt-8 text-5xl text-white">
        <div className="grid h-16 w-12 place-content-center rounded-md bg-stone-700">
          <p>6</p>
        </div>
        <div className="grid h-16 w-12 place-content-center rounded-md bg-stone-700">
          <p>6</p>
        </div>
        <div className="grid h-16 w-12 place-content-center rounded-md bg-stone-700">
          <p>6</p>
        </div>
        <div className="grid h-16 w-12 place-content-center rounded-md bg-stone-700">
          <p>6</p>
        </div>
        <div className="grid h-16 w-12 place-content-center rounded-md bg-stone-700">
          <p>6</p>
        </div>
        <div className="grid h-16 w-12 place-content-center rounded-md bg-stone-700">
          <p>6</p>
        </div>
      </div>
    </>
  );
};
export default RecieverWaiting;
