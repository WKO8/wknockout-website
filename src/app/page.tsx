"use client";
import Navbar from "./components/NavBar"
import HeroSection from "./components/HeroSection"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </div>
  )
}

export default App;