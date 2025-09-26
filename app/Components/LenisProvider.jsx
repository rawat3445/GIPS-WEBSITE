// app/Components/LenisProvider.jsx
"use client";

import React from "react";
import useLenis from "../hooks/useLenis";

export default function LenisProvider({ children }) {
  // run lenis on client
  useLenis();
  // simply render children so this component can wrap your app content
  return <>{children}</>;
}
