import React from "react";

const Navbar = () => {
  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-50'>
      <nav className=' flex gap-1 border rounded-full p-0.5 bg-white/10 backdrop-blur'>
        <a href='#' className='nav-item'>
          Home
        </a>
        <a href='#' className='nav-item'>
          Projects
        </a>
        <a href='#' className='nav-item'>
          About
        </a>
        <a
          href='#'
          className='nav-item bg-card-foreground !text-card hover:bg-card-foreground/70 hover:!text-card'
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
