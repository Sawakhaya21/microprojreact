
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomePages";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="mx-auto">
      <Navbar />
      <HomeSection />
      {/* other pages */}
      <Footer />
    </div>
  );
}
