import "./scss/style.scss";

import LayoutProvider from "./components/Layout/LayoutProvider";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <LayoutProvider>
      <Routes />
    </LayoutProvider>
  );
};

export default App;
