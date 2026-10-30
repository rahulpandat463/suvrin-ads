"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface OpenBookingOptions {
  source?: string;
  topic?: string;
  format?: string;
}

interface BookingContextType {
  isOpen: boolean;
  source: string;
  initialTopic?: string;
  initialFormat?: string;
  openBooking: (options?: OpenBookingOptions) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("header");
  const [initialTopic, setInitialTopic] = useState<string | undefined>();
  const [initialFormat, setInitialFormat] = useState<string | undefined>();

  const openBooking = (options?: OpenBookingOptions) => {
    setSource(options?.source || "direct");
    setInitialTopic(options?.topic);
    setInitialFormat(options?.format);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        source,
        initialTopic,
        initialFormat,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextType {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
