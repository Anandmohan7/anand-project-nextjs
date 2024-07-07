import Clients from "@/components/Clients";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HomeSlider } from "@/components/HomeSlider";
import LandingPage from "@/components/LandingPage";
import LearnMore from "@/components/LearnMore";
import LearnMoreFooter from "@/components/LearnMoreFooter";
import Marketing from "@/components/Marketing";
import Member from "@/components/Member";
import Reinvent from "@/components/Reinvent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HomeSlider />
      <Clients />
      <Member />
      <LearnMore />
      <Reinvent />
      <LearnMoreFooter />
      <LandingPage />
      <Marketing />
      <Demo />
      <Footer />
    </main>
  );
}
