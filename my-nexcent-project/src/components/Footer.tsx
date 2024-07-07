import React from "react";
import { Input } from "./ui/input";

function Footer() {
  return (
    <div className="bg-card-foreground w-full p-10">
      <div className="flex flex-row justify-between">
        {/* Left Section */}
        <div className="flex flex-col">
          <img className="mb-4" src="/LogoFooter.png" alt="Footer Logo" />
          <p className="text-primary-foreground mb-2">
            Copyright &copy; 2020 Nexcent Ltd.
          </p>
          <p className="text-primary-foreground mb-4">All rights reserved</p>
          <div className="flex space-x-4">
            <img
              className="w-6 h-6"
              src="/SocialIcons1.png"
              alt="Social Icon 1"
            />
            <img
              className="w-6 h-6"
              src="/SocialIcons2.png"
              alt="Social Icon 2"
            />
            <img
              className="w-6 h-6"
              src="/SocialIcons3.png"
              alt="Social Icon 3"
            />
            <img
              className="w-6 h-6"
              src="/SocialIcons4.png"
              alt="Social Icon 4"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-row space-x-10">
          {/* Company Column */}
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-primary-foreground mb-4">Company</h1>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              About us
            </a>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Contact us
            </a>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Testimonials
            </a>
          </div>

          {/* Support Column */}
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-primary-foreground mb-4">Support</h1>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Help center
            </a>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Legal
            </a>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-primary-foreground hover:text-secondary"
            >
              Status
            </a>
          </div>

          {/* Stay Up to Date Column */}
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-primary-foreground mb-4">
              Stay up to Date
            </h1>
            <Input
              className="text-secondary-heading"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
