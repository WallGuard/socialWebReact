import React from "react";
import Preloader from "../PAGES/common/Preloader/index";


export const withSuspense = (Component) => {
  return (props) => {
    return <React.Suspense fallback={<Preloader />} >
      <Component {...props} />
    </React.Suspense>
  };
};
