import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Router } from "./routes/Router";

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <Router />

      <Footer />
    </div>
  )
};

export default App;
