"use client";

import { Navbar } from "./navbar";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-primary-header">
      <div className="logo">
        <img src="/Logo.png" alt="Logo" className="h-4 ml-12" />
      </div>
      <div className="flex items-center space-x-4">
        <Navbar />
        <Button className="pr-10 pl-10 bg-secondary-light text-primary-header">
          Register Now <img className="pl-3 w-7 h-5" src="/Right.png" />{" "}
        </Button>
      </div>
    </div>
  );
}

export default Header;
