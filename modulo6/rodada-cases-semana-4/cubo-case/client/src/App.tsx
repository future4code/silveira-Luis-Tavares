import { ParticipationContextProvider } from "./context/ParticipationContext";
import { Router } from "./routes/Router";

const App: React.FC = () => {
  return (
    <ParticipationContextProvider>
      
      <Router />
      
    </ParticipationContextProvider>
  )
};

export default App;