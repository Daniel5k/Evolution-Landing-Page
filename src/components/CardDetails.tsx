import CardFooter from "./CardFooter";

const CardDetails = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <p className="text-sm">What's included:</p>
      <div className="flex flex-col gap-3">
        <CardFooter />
      </div>
    </div>
  );
};

export default CardDetails;
