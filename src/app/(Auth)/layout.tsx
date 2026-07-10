import Header from "@/components/layout/header";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-64px)] overflow-auto">{children}</div>
    </>
  );
};

export default layout;
