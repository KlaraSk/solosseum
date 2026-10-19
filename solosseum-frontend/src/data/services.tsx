import { PiChartPieSlice } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { PiSquaresFour, PiSparkle, PiGavel } from "react-icons/pi";

export const services = [
  {
    title: "Projektledning och förändringsledning",
    text: `Projekt- eller programledning vid förändringsprojekt och IT-implementationer med fokus på projektmål samt effektmål. Vi hittar en god projektanda tillsammans med vår kunds organisation där era resurser arbetar på hel- eller deltid i projektet`,
    icon: <PiChartPieSlice />,
    iconBg: "primary",
  },
  {
    title: "Köp och införande av ERP",
    text: "Att handla upp och byta affärssystem är ofta komplext och tar kraft av organisationen. Jag hjälper er att driva det ni behöver ha koll på, arbetar med era egna resurser inom olika processer samt kan agera stöd eller huvudkontakt med vald leverantör samt stöd i projektutformning och styrgrupp.",
    icon: <PiClock />,
    iconBg: "primary-soft",
  },
  {
    title: "AI för ledning/styrelse",
    text: "I ett framtaget workshop-koncept hjälper jag tillsammans med en kollega till att skapa en struktur för att hantera AI på ledningsnivå, hitta förbättringspotential inom era kärnprocesser samt identifiera behov inom governance, policies och långsiktig hantering. Genom två-tre workshops med ledningsgrupp, styrelse eller avdelning skapar vi en plattform för vidare hantering av AI.",
    icon: <PiSparkle />,
    iconBg: "primary",
  },
  {
    title: "IT-stöd",
    text: "Löpande stöd/hjälp till dig som har IT-chefs-ansvaret som en del i din roll, till exempel CFO för att kunna göra leverantörsuppföljning, löpande stöd/IT-board eller specifik hjälp i vissa situationer.",
    icon: <PiSquaresFour />,
    iconBg: "primary-muted",
  },
  {
    title: "Interimsuppdrag",
    text: "IT-chef under en viss period med ett specifikt uppdrag på hel- eller deltid. Stöd och hjälp av rekrytering, organisationsfrågor, befattningsbeskrivning samt överlämnande/introduktion till den som senare tar över rollen.",
    icon: <PiSquaresFour />,
    iconBg: "primary-muted",
  },

  {
    title: "Styrelseuppdrag",
    text: "När ni önskar förstärka er styrelse med en generalist i allmänhet som arbetat med utveckling av interna processer, IT-manangement med risk, säkerhet och verksamhetsutveckling som fokus.",
    icon: <PiGavel />,
    iconBg: "primary-muted",
  },
];
