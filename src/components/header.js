import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="h-16 shadow-md flex justify-between">
      <Link to="/" className="pl-8 text-3xl my-auto text-blue-900">
        <h1>Ecomm</h1>
      </Link>
      <div className="my-auto mr-16">
        <Link to="/add" className="text-lg text-blue-600 mr-4">
          Add
        </Link>
        <Link to="/cart" className="text-lg text-blue-600 mr-4">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
