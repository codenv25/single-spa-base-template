import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    // Importance : Keep UI sync with browser URLs
    <BrowserRouter>
      <LoginScreen />
    </BrowserRouter>
  );
}
