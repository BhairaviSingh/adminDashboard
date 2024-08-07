import logo from "./logo.svg";
import "./App.css";
import { SidebarProvider } from "./context/SidebarContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <SidebarProvider>
      <Sidebar />
      <Header />
      <DashboardPage/>
    </SidebarProvider>
  );
}

export default App;
