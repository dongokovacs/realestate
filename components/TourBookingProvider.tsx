"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import TourBookingModal from "./TourBookingModal";

const TourBookingContext = createContext<{ open: () => void }>({ open: () => {} });

export function useTourBooking() {
  return useContext(TourBookingContext);
}

export function TourBookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TourBookingContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <TourBookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </TourBookingContext.Provider>
  );
}
