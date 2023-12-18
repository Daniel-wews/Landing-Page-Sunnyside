import Header from "./components/header";
import Main from "./components/main";
import Services from "./components/service";

export default function App() {
  return (
    <main className="max-w-[1440px] mx-auto relative">
    <Header/>
    <Main/>
    <Services/>
    </main>
  )
}