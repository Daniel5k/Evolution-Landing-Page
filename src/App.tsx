import CardDetails from "./components/CardDetails";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="bg-white p-6 rounded-3xl border border-gray-300">
          <h1 className="text-base font-bold mb-2">Basic</h1>
          <p className="text-sm">Perfect if you need ongoing support</p>
          <div className="my-4 flex justify-start gap-2 items-center">
            <h1 className="text-[32px] font-bold">$80</h1>
            <span className="text-sm inline-block align-text-baseline">
              /month
            </span>
          </div>
          <button className="border border-gray-300 w-full py-2 rounded-2xl">
            Get started
          </button>
          <CardDetails />
        </div>
      </div>
    </>
  );
}

export default App;
