import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center bg-gray-800 mt-4 mx-8 rounded-lg">
      <div className="flex justify-around px-6 py-4 w-4/5 ">
        <Link to="/">
          <h5 className="text text-white hover:text-blue-300">Home</h5>
        </Link>
        <Link to="/shopping-cart">
          <h5 className="text text-white hover:text-blue-300">Shopping Cart</h5>
        </Link>
        <Link to="/contact">
          <h5 className="text text-white hover:text-blue-300">Contact Us</h5>
        </Link>
        <Link to="/about">
          <h5 className="text text-white hover:text-blue-300">About Us</h5>
        </Link>
        
      </div>
    </div>
  );
}

export default Navbar;
