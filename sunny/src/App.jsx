import Footer from "./components/footer";
import Gallery from "./components/gellery";
import Header from "./components/header";
import Main from "./components/main";
import Services from "./components/service";
import TestimonialContainer from "./testimonialContainer";

export default function App() {
  return (
    <main className="max-w-[1440px] mx-auto relative">
    <Header/>
    <Main/>
    <Services/>
    <TestimonialContainer/>
    <Gallery/>
    <Footer/>
    </main>
  )
}