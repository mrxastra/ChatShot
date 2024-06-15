import React from "react";
import Title from "../shared/Title";
import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <div className="roboto-medium absolute">
          <Title />
          <Header/>
          <div className="grid grid-cols-5 w-screen h-screen mt-[70px]">
            <div className="max-[640px]:hidden md:col-span-1 text-black sm:col-span-2">start</div>
            <div className="col-span-5 sm:col-span-3 md:col-span-3 bg-yellow-200">
              <WrappedComponent {...props} />
            </div>
            <div className="max-[767px]:hidden md:col-span-1">Footer</div>
          </div>
        </div>
      </>
    );
  };
};

export default AppLayout;
