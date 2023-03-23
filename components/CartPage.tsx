import { useEffect, useState } from "react";
import { StoreItems } from "@/type";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuntity,
  deleteItem,
  increaseQuantity,
  resetCart,
} from "@/redux/nextSlice";
import FormattedPrice from "./FormattedPrice";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.nextamazon.productData);
  const userInfo = useSelector((state: any) => state.nextamazon.userInfo);
  const [totalAmt, setTotalAmt] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let amt = 0;
    let items = 0;
    productData.map((item: StoreItems) => {
      amt += item.price * item.quantity;
      items += item.quantity;
      return;
    });
    setTotalAmt(amt);
    setTotalItems(items);
  }, [productData]);

  // Checkout session

  return (
    <div className="w-full bg-[#E3E6E6] p-4">
      <div className="bg-transparent flex gap-4">
        <div className="w-4/5 bg-white rounded-sm p-6">
          <div className="py-1 border-b-[1px] border-b-gray-300">
            <h1 className="text-3xl text-black font-semibold">Shopping Cart</h1>
            <button
              onClick={() => dispatch(resetCart())}
              className="text-sm text-[#007185] font-medium decoration-transparent hover:decoration-[#C7511F] hover:underline underline-offset-2 hover:text-[#C7511F] duration-300"
            >
              Delete all items
            </button>
          </div>
          {productData.map((item: StoreItems) => (
            <div
              key={item._id}
              className="w-full border-b-[1px] border-gray-300 py-4 flex items-center gap-6"
            >
              <div className="w-1/5">
                <Image
                  src={item.image}
                  alt="productImg"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-3/5 text-sm flex flex-col gap-2">
                <h2 className="text-sm font-medium">{item.description}</h2>
                <p>
                  Brand: <span className="font-medium">{item.brand}</span>
                </p>
                <p>
                  Category: <span className="font-medium">{item.category}</span>
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
                    <p className="text-base font-normal">Qty:</p>
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuntity({
                            _id: item._id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            quantity: 1,
                            brand: item.brand,
                            category: item.category,
                            isNew: item.isNew,
                            image: item.image,
                          })
                        )
                      }
                      className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                    >
                      -
                    </button>
                    <p className="font-titleFont text-base font-semibold text-amazon_blue">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity({
                            _id: item._id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            quantity: 1,
                            brand: item.brand,
                            category: item.category,
                            isNew: item.isNew,
                            image: item.image,
                          })
                        )
                      }
                      className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      dispatch(deleteItem(item._id)) &&
                      toast.error(
                        `${item.title.substring(0, 12)} is deleted from cart`
                      )
                    }
                    className="text-sm text-[#007185] font-medium decoration-transparent hover:decoration-[#C7511F] hover:underline underline-offset-2 hover:text-[#C7511F] duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="w-1/5">
                <p className="text-lg font-semibold text-right">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
          <p className="text-right font-medium flex items-center gap-1 justify-end">
            Subtotal ({totalItems} items):{" "}
            <span className="font-semibold">
              <FormattedPrice amount={totalAmt} />
            </span>
          </p>
        </div>
        <div className="w-1/5 h-44 bg-white rounded-sm p-6 flex flex-col gap-4 justify-center">
          <h2 className="text-base font-medium flex items-center gap-1">
            Subtotal (3 items):{" "}
            <span className="font-semibold text-lg">
              <FormattedPrice amount={totalAmt} />
            </span>
          </h2>
          <div className="flex items-center gap-1 text-sm -mt-4">
            <input type="checkbox" />
            <p>This order contains a gift</p>
          </div>
          {userInfo ? (
            <button className="w-full h-9 rounded-md text-sm font-medium bg-[#FFD814] shadow-btnShadow hover:bg-[#F7CA00] duration-300">
              Proceed to checkout
            </button>
          ) : (
            <button className="w-full h-9 rounded-md text-sm font-medium bg-zinc-300 shadow-btnShadow cursor-not-allowed duration-300">
              Proceed to checkout
            </button>
          )}
        </div>
      </div>
      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default CartPage;
