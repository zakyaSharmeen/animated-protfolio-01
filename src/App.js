import "./App.css";
import { useEffect } from "react";

import Page from "./components/pages/Page";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  // start the aos
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Page />
    </>
  );
}

export default App;
