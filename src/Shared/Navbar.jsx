import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100 font-roboto mt-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
      <Link>Home</Link>
      </li>
      <li>
      <Link>Categories</Link>
      </li>
      <li>
      <Link>About Us</Link>
      </li>
      <li>
      <Link>Products</Link>
      </li>
      <li>
      <Link>Pet Care</Link>
      </li>
      <li>
      <Link>Contacts</Link>
      </li>
      </ul>
    </div>
    <img src="https://i.ibb.co/PG457mG/Group-7.png" className="w-10" alt="" />

    <p className="text-2xl font-bold text-[#FFE55E]"><span className="text-[#FFAA00]">G</span>local</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
      <li>
      <Link>Home</Link>
      </li>
      <li>
      <Link>Categories</Link>
      </li>
      <li>
      <Link>About Us</Link>
      </li>
      <li>
      <Link>Products</Link>
      </li>
      <li>
      <Link>Pet Care</Link>
      </li>
      <li>
      <Link>Contacts</Link>
      </li>
     
    </ul>
  </div>
  <div className="navbar-end flex gap-4 font-semibold">
    <a className="bg-[#124C5F] text-white p-2 lg:px-8 rounded-md">Sign In</a>
    <a className="bg-[#C7E7E1] text-[#124C5F] p-2 lg:px-8 rounded-md">Register</a>

  </div>
  
</div>
        </div>
    );
};

export default Navbar;