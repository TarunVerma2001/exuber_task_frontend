import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../utils/api';
import { setProducts } from '../redux/actions/productAction';
import { addToCart } from './../redux/actions/cartActions';
import toast from 'react-hot-toast';
const Home = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const getAllProducts = async () => {
    const res = await getAllData();
    if (res.status === 'success') {
     
      dispatch(setProducts(res.data.products));
    }
  };
  const onAddToCartClick = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to Cart!');
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-8">All Products</h1>
      <div className="flex">
        {products &&
          products.map((product) => (
            <div
              key={product._id}
              className="w-72 shadow-slate-200 shadow-xl m-4 rounded-md p-4"
            >
              <h1 className="font-semibold text-xl">{product.name}</h1>
              <img src={product.image} alt="" className="object-contain" />
              <h3 className="text-lg">{product.price}$</h3>
              <div className="flex">
                {/* <div className="flex">
                <button className="px-4 py-2 bg-blue-100 rounded-lg text-center">
                -
                </button>
                <p className="px-4 py-2">0</p>
                <button className="px-4 py-2 bg-blue-100 rounded-lg text-center">
                  +
                  </button>
              </div> */}
                <button
                  className="ml-2 p-2 bg-red-400 rounded-lg"
                  onClick={() => onAddToCartClick(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Home;
