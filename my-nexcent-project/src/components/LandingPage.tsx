import React from "react";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="flex items-center mx-auto py-8 bg-primary-foreground">
      <div className="w-1/3">
        <img src="/landingImage.png" className="w-3/4 h-auto ml-20" />
      </div>
      <div className="w-2/3 flex flex-col space-y-4">
        <p className="max-w-l text-muted pr-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h1 className="text-secondary-light text-md font-bold">Tim Smith</h1>
        <p className="text-primary-subheading text-sm">
          British Dragon Boat Racing Association
        </p>
        <div className="flex flex-row items-center">
          <img className="m-4" src="/TintedLogo.png" alt="active" />
          <img className="m-4 w-10" src="/Logo (1).png" alt="logo1" />
          <img className="m-4 w-10" src="/Logo (2).png" alt="logo2" />
          <img className="m-4 w-10" src="/Logo (3).png" alt="logo3" />
          <img className="m-4 w-10" src="/Logo (4).png" alt="logo4" />
          <img className="m-4 w-10" src="/Logo (5).png" alt="logo5" />
          <div className="flex items-center">
            <a
              className="text-secondary-light font-bold text-md flex items-center"
              href="#"
            >
              Meet all customers
              <img src="/RightGreen.png" className="ml-2" alt="Right Arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
