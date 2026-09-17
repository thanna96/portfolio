import "./App.css";
import { MainLayout } from "./components/layout/MainLayout";
import { Desktop } from "./pages/Desktop";

export function App() {
  return (
    <MainLayout>
      <Desktop />
    </MainLayout>
  );
}

export default App;
