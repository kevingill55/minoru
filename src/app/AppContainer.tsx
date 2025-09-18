import React from "react";
import { Navbar } from "./Navbar";

export const AppContainer = (props: React.PropsWithChildren) => {
  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="grid md:grid-cols-[minmax(16px,1fr)_repeat(7,minmax(0,150px))_minmax(16px,1fr)] md:grid-rows-[repeat(22,minmax(30px,auto))] grid-rows-[repeat(21, minmax(30px, auto))] grid-cols-[minmax(12px,1fr)_minmax(18px,1fr)_repeat(3,minmax(0,120px))_minmax(18px,1fr)_minmax(12px,1fr)]">
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};
