import Image from "next/image";
import Head from "./component/componentHome/head";
import Wellcom from "./component/componentHome/Wellcom";
import Services from "./component/componentHome/Our-Services";
import Specialties from "./component/componentHome/Specialties";
import Book from "./component/componentHome/Book";
import Doctors from "./component/componentHome/Doctors";
import Info from "./component/componentHome/Info";
import Contact from "./component/componentHome/Contact";

export default function Home() {
  return (
    <div>
      <Head />
      <Wellcom />
      <Services />
      <Specialties />
      <Book />
      <Doctors />
      <Info />
      <Contact />
    </div>
  );
}
