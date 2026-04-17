import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Details from "@/components/Deatails.js";

export default function Home() {
  return (
    <div className="layout">
      <Navbar />
      <Main /> <Details />
      <Footer />
    </div>
  );
}
