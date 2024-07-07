import React from "react";
import { Button } from "./ui/button";

function Demo() {
  return (
    <div className="flex flex-col justify-center items-center bg-foreground p-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold max-w-l text-primary-heading">
          Pellentesque susipit fringilla libero eu.
        </h1>
        <div>
          <Button className="pr-10 pl-10 bg-secondary-light text-primary-header mt-20">
            Get a Demo <img className="pl-3 w-7 h-5" src="/Right.png" />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Demo;
