import ItemCard from "./ItemCard";

const ItemList = (props) => {
  const { itemCards } = props;
  // console.log(itemCards);
  return (
    <div>
      {itemCards?.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};
export default ItemList;
