import { AboutMe, Contact, FixedContact, Header, Navbar, Projects, TechStack, Workxp } from "./components/imports";
import './app.css';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <TechStack />
      <Workxp />
      <Projects />
      <Contact />
      <FixedContact />
    </main>
  );
}

export default App;
