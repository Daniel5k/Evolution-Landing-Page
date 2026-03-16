import footerData from "../data/FooterData";

const CardFooter = () => {
  const footer = footerData.map((item) => (
    <div key={item.id} className="flex gap-3 items-center">
      {item.image}
      <p>{item.description}</p>
    </div>
  ));

  return footer;
};

export default CardFooter;
