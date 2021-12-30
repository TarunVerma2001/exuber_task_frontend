import { useState } from 'react';
import { addProduct } from './../utils/api';
import toast from 'react-hot-toast';
const AddItem = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();

  const onLoad = () => {
    toast.success('Product added Successfully');
  };
  const onClick = async () => {
    if (!name) {
      toast.error('A product must have a Name!');
      return;
    }
    if (!price) {
      toast.error('A product must have a Price!');
      return;
    }
    const data = {
      name: name,
      image: image,
      price: price,
    };
    await addProduct(data, onLoad);
  };
  return (
    <div className="p-8 flex flex-col">
      <h1 className="text-3xl mb-8">Add Product</h1>
      <input
        type="text"
        placeholder="Name"
        className="border-2 mb-2 p-2 w-1/3 border-solid rounded-xl focus:border-2 border-blue-500 focus:border-blue-900"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="border-2 mb-2 p-2 w-1/3 border-solid rounded-xl focus:border-2 border-blue-500 focus:border-blue-900"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        className="border-2 mb-2 p-2 w-1/3 border-solid rounded-xl focus:border-2 border-blue-500 focus:border-blue-900"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        onClick={onClick}
        className="w-1/3 bg-blue-500 p-2 rounded-xl hover:shadow-lg transition text-white font-semibold  text-xl"
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
