'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type ProviderProps = {
  children?: React.ReactNode | React.ReactNode[];
};

const queryClient = new QueryClient();

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
