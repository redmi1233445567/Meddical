import ArticalSingel from "@/app/component/componentSingelNews/ArticalSingel";
import Head from "@/app/component/componentSingelNews/Head";
import React from "react";

export default  function page({ params }) {
  const id = params.singelNews;
  console.log(id);

  

  return (
    <div>
      <ArticalSingel id={id} />
    </div>
  );
}
