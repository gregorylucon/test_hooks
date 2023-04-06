import { ContatoreContextProvider } from "./context";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <ContatoreContextProvider>
        <Main />
      </ContatoreContextProvider>
    </div>
  );
}

export default App;
