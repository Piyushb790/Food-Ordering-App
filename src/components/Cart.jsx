import { useSelector } from "react-redux";
import { IMG_CDN_LINK } from "../constants";
import { useDispatch } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "./Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.png";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const foodItem = useSelector((store) => store?.cart?.items);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    const id = toast.loading("Please wait...");
    //do something else
    toast.update(id, {
      render: "Please Do Not Refresh, Placing Order",
      type: "success",
      isLoading: true,
    });
    setTimeout(() => {
      navigateTo("/success");
      dispatch(clearCart());
    }, 5000);
  };

  const total = foodItem
    .map(
      (item) =>
        (item?.card?.info?.price / 100) * item.quantity ||
        (item?.card?.info?.defaultPrice / 100) * item.quantity
    )
    .reduce((acc, price) => acc + price, 0);

  const handClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };

  if (foodItem.length === 0)
    return <h1 className="text-2xl font-semibold mt-10 ">Cart is Empty</h1>;

  return (
    <div className="mx-32 mt-20 flex justify-between  items-start ">
      <div className="  w-6/12">
        <h1 className="text-2xl font-semibold">Cart</h1>

        {foodItem.map((item) => (
          <div className="card flex gap-x-10 my-4" key={item?.card?.info?.id}>
            <div className="img w-24">
              {<img src={IMG_CDN_LINK + item?.card?.info?.imageId} alt="img" />}
            </div>
            <div className="details">
              <p className="font-bold">
                {item?.card?.info?.name} - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>

              <p className="w-[300px] text-xs">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-[#FF7F50] w-4/12  px-2 py-6 rounded-lg">
        <h1 className="text-2xl font-semibold mb-2">Checkout</h1>
        {foodItem.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="flex justify-between items-center my-3  leading-8 "
          >
            <p className=" w-44 ">{item?.card?.info?.name}</p>
            <div className="flex items-center max-w-20 max-h-9">
              <button
                className="bg-gray-100 w-4 "
                onClick={() => handleDecrement(item.card?.info?.id)}
              >
                -
              </button>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="w-6 text-center select-none"
                placeholder="0"
                maxLength={2}
                required
                readOnly
                value={item.quantity}
              />
              <button
                className="bg-gray-100 w-4"
                onClick={() => handleIncrement(item?.card?.info?.id)}
              >
                +
              </button>
            </div>

            <p className=" w-14 text-right">
              ₹
              {(item?.card?.info?.price / 100) * item.quantity ||
                (item?.card?.info?.defaultPrice / 100) * item.quantity}
            </p>
          </div>
        ))}
        <p className="flex justify-between font-bold mt-3">
          Total <span>₹ {total}</span>
        </p>
        <div className="mt-2 flex flex-col">
          <button
            className=" p-2 text-xs bg-white hover:bg-slate-100 font-bold float-right rounded-lg mt-2 "
            onClick={handleCheckout}
          >
            Check Out
          </button>

          <ToastContainer position="top-center" />
          <button
            className=" p-2 text-xs bg-white  float-right rounded-lg mt-2 hover:bg-slate-100 flex items-center justify-center "
            onClick={() => handClearCart()}
          >
            Clear Cart
            <img src={cart} alt="img" className="w-4 ml-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
