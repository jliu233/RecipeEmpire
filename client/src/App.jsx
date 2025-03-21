import React, { useEffect, useState } from "react";
import WireframeA from "./WireframeA";
import WireframeB from "./WireframeB";

export default function App() {
  const [variant, setVariant] = useState(null);

  useEffect(() => {
    const chosen = Math.random() < 0.5 ? "A" : "B";
    setVariant(chosen);
  }, []);

  if (!variant) return null;

  return variant === "A" ? <WireframeA variant="A" /> : <WireframeB variant="B" />;
}
