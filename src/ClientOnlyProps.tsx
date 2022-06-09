import { useState, useEffect } from "react";

interface ClientOnlyProps {}

// @ts-ignore
const ClientOnly = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : null;
};

export default ClientOnly;