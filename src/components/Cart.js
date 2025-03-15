import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-center">
      <div className="bg-gray-300 rounded-lg w-6/12 m-4 p-3 ">
        <ItemList itemCards={cartItems} />
      </div>
    </div>

    // <div className="flex justify-center h-screen">
    //   <div className="bg-blue-500 text-white p-8 rounded-lg">
    //     This div is centered horizontally.
    //   </div>
    // </div>
  );
};

export default Cart;
