import Navbar from "./_components/navbar/page";
import Hero from "./_components/hero/page";
import About from "./_components/about/page";
import Skills from "./_components/skills/page";
import Tools from "./_components/tools/page";
import Projects from "./_components/projects/page";
import Contacts from "./_components/contacts/page";
import Footer from "./_components/footer/page";
import MotionController from "./_components/motion-controller";

export default function Profile() {
  return (
    <>
      <MotionController />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
