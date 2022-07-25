import { Header } from "./components/Header";
import { Router } from "./routes/Router";

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <Router />
    </div>
  )
};

export default App;
