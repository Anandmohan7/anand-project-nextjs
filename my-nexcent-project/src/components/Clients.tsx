import React from "react";

function Clients() {
  return (
    <div className="flex flex-col items-center justify-center bg-foreground">
      <div className="mb-4 mt-8 text-primary-heading">
        <h1 className="text-4xl font-bold">Our Clients</h1>
      </div>
      <div className="text-center text-muted">
        <p>We have been working with Fortune 500+ clients</p>
      </div>
      <div className="flex flex-wrap w-full justify-evenly">
        <img className="p-10" src="/Logo (1).png" alt="Client Logo 1" />
        <img className="p-10" src="/Logo (2).png" alt="Client Logo 2" />
        <img className="p-10" src="/Logo (3).png" alt="Client Logo 3" />
        <img className="p-10" src="/Logo (4).png" alt="Client Logo 4" />
        <img className="p-10" src="/Logo (5).png" alt="Client Logo 5" />
        <img className="p-10" src="/Logo (6).png" alt="Client Logo 6" />
        <img className="p-10" src="/Logo(7).png" alt="Client Logo 7" />
      </div>
    </div>
  );
}

export default Clients;
