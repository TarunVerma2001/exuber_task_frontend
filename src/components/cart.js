import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementProduct,
  decrementProduct,
} from './../redux/actions/cartActions';
const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState();
  const cartProducts = useSelector((state) => state.cartProducts.products);

  const incrementClicked = (productId) => {
    dispatch(incrementProduct(productId));
  };
  const decrementClicked = (productId) => {
    dispatch(decrementProduct(productId));
  };
  useEffect(() => {
    let amt = 0;
    cartProducts.map((product) => (amt += product.price*product.quantity));
    setTotalPrice(amt);
  }, [cartProducts]);
  return (
    <div className="p-8">
      <div className="flex justify-between ">
        <h1 className="text-3xl  my-auto">Cart</h1>
        <div className='flex '>
          {cartProducts && <h1 className="my-auto">Total Amount: {totalPrice}$</h1>}
          <p className="p-2 rounded-lg bg-red-400 my-auto ml-4 hover:shadow-lg transition">Pay Now</p>
        </div>
      </div>
      {cartProducts.length === 0 && (
        <h1 className="text-xl text-blue-600">
          Cart is Empty Please add some items to purchage!
        </h1>
      )}
      {cartProducts &&
        cartProducts.map((product) => (
          <div
            key={product._id}
            className="w-72 shadow-slate-200 shadow-xl m-4 rounded-md p-4"
          >
            <h1 className="font-semibold text-xl">{product.name}</h1>
            <img src={product.image} alt="" className="object-contain" />
            <h3 className="text-lg">{product.price}$</h3>
            <div className="flex">
              <div className="flex">
                <button
                  className="px-4 py-2 bg-blue-100 rounded-lg text-center"
                  onClick={() => decrementClicked(product._id)}
                >
                  -
                </button>
                <p className="px-4 py-2">{product.quantity}</p>
                <button
                  className="px-4 py-2 bg-blue-100 rounded-lg text-center"
                  onClick={() => incrementClicked(product._id)}
                >
                  +
                </button>
              </div>
              {/* <button
                  className="ml-2 p-2 bg-red-400 rounded-lg"
                  onClick={() => onAddToCartClick(product)}
                > */}
              {/* Add to Cart
                </button> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
