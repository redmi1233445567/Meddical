import Contact from "@/app/component/componentHome/Contact";
import ArticalSingel from "@/app/component/componentSingelNews/ArticalSingel";
import React from "react";

export default  function page({ params }) {
  const id = params.singelNews;
  console.log(id);

  

  return (
    <div>
      <ArticalSingel id={id} />
      <Contact /> 
    </div>
  );
}
