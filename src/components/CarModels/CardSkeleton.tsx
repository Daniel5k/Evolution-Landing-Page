const CardSkeleton = () => {
  return (
    <>
      <div className="animate-pulse bg-slate-300 rounded-md">
        <div className="h-32 bg-gray-200"></div>
        <div className="p-2 rounded inset-0 flex flex-col gap-4">
          <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
          <div className="h-10 grid grid-cols-2 grid-flow-row gap-4">
            <div className="bg-gray-200 h-8 rounded-lg"></div>
            <div className="bg-gray-200 h-8 rounded-lg"></div>
            <div className="bg-gray-200 h-8 rounded-lg"></div>
          </div>
          <div className="rounded-2xl bg-gray-200 h-8 mt-8"></div>
        </div>
      </div>
      <div className="animate-pulse bg-slate-300 rounded-md">
        <div className="h-32 bg-gray-200"></div>
        <div className="p-2 rounded inset-0 flex flex-col gap-4">
          <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
          <div className="h-10 grid grid-cols-2 grid-flow-row gap-4">
            <div className="bg-gray-200 h-8 rounded-lg"></div>
            <div className="bg-gray-200 h-8 rounded-lg"></div>
            <div className="bg-gray-200 h-8 rounded-lg"></div>
          </div>
          <div className="rounded-2xl bg-gray-200 h-8 mt-8"></div>
        </div>
      </div>
      <div className="animate-pulse bg-slate-300 rounded-md">
        <div className="h-32 bg-gray-200"></div>
        <div className="p-2 rounded inset-0 flex flex-col gap-4">
          <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
          <div className="h-10 grid grid-cols-2 grid-flow-row gap-4">
            <div className="bg-gray-200 h-8 rounded-lg"></div>
            <div className="bg-gray-200 h-8 rounded-lg"></div>
            <div className="bg-gray-200 h-8 rounded-lg"></div>
          </div>
          <div className="rounded-2xl bg-gray-200 h-8 mt-8"></div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
