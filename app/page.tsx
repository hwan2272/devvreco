import Image from "next/image";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Contents from "./layout/contents";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </>
  );
}
