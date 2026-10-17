import { ContactSection } from "@solosseum/contactsection";
import { ServicesSection } from "@solosseum/servicessection";
import { StartSection } from "@solosseum/startsection";
import { CustomersSection } from "@solosseum/customerssection";
import { SocialSection } from "@solosseum/socialsection";
import { PartnersSection } from "@solosseum/partnerssection";
import { Header } from "@solosseum/header";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app">
        <StartSection />
        <ServicesSection />
        <ContactSection />
        <CustomersSection />
        <SocialSection />
        <PartnersSection />
      </main>
    </div>
  );
}

export default App;
