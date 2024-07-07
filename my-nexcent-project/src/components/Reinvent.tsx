"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ReinventProps {}

const Reinvent: React.FC<ReinventProps> = () => {
  const [members, setMembers] = useState<string>("0");
  const [clubs, setClubs] = useState<string>("0");
  const [events, setEvents] = useState<string>("0");
  const [payments, setPayments] = useState<string>("0");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animateNumbers = (
    target: number,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    let current = 0;
    const step = Math.ceil(target / 100);

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setter(formatNumberWithCommas(current));
    }, 10);

    return () => {
      clearInterval(interval);
    };
  };

  const formatNumberWithCommas = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    if (inView) {
      animateNumbers(2245341, setMembers);
      animateNumbers(46328, setClubs);
      animateNumbers(828867, setEvents);
      animateNumbers(1926436, setPayments);
    }
  }, [inView]);

  return (
    <div className="bg-primary-foreground">
      <div className="mx-auto py-8">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-primary-heading mb-4 ml-4">
              Helping a local
            </h1>
            <h1 className="text-4xl font-bold text-secondary-light mb-4 ml-4">
              business reinvent itself
            </h1>
            <p className="text-lg text-muted ml-4">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div ref={ref} className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center p-4">
              <img
                src="/Members.png"
                alt="Members"
                className="w-19 h-19 mr-2"
              />
              <div className="flex flex-col">
                <motion.div
                  className="text-3xl font-bold text-primary-heading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  {members}
                </motion.div>
                <p className="text-sm text-muted">Members</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/Clubs.png" alt="Clubs" className="w-19 h-19 mr-2" />
              <div className="flex flex-col">
                <motion.div
                  className="text-3xl font-bold text-primary-heading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  {clubs}
                </motion.div>
                <p className="text-sm text-muted">Clubs</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="/Events.png" alt="Events" className="w-19 h-19 mr-2" />
              <div className="flex flex-col">
                <motion.div
                  className="text-3xl font-bold text-primary-heading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  {events}
                </motion.div>
                <p className="text-sm text-muted">Event Bookings</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <img
                src="/Payments.png"
                alt="Payments"
                className="w-19 h-19 mr-2"
              />
              <div className="flex flex-col">
                <motion.div
                  className="text-3xl font-bold text-primary-heading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  {payments}
                </motion.div>
                <p className="text-sm text-muted">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reinvent;
