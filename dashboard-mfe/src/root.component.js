import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter basename="dashboard">
      <App />;
    </BrowserRouter>
  );
}
