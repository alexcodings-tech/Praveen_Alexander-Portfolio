"use client";

import { useEffect, useState } from 'react';

// This component safely wraps client-side rendering
export default function ClientWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null; // Return nothing during server-side rendering
  }
  
  return <>{children}</>;
}