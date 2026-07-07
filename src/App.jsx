import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Subjects from './components/Subjects.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyChooseAdeep from './components/WhyChooseAdeep.jsx'
import Credentials from './components/Credentials.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Subjects />
        <HowItWorks />
        <WhyChooseAdeep />
        <Credentials />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
