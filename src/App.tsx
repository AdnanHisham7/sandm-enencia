import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import ModernHeader from "./components/layout/ModernHeader"; // ModernHeader for all other pages
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/layout/ScrollToTop";
import AboutModal from "./components/layout/AboutModal";
import Loaders from "./components/layout/Loaders";

function LayoutWrapper() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Conditionally render the header */}
      {isHomePage ? <Header /> : <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Loader
  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(loadTimer);
  }, []);

  // About Modal
  // useEffect(() => {
  //   const initialTimer = setTimeout(() => setIsAboutModalOpen(true), 5000);
  //   const interval = setInterval(() => setIsAboutModalOpen(true), 240000);
  //   return () => {
  //     clearTimeout(initialTimer);
  //     clearInterval(interval);
  //   };
  // }, []);

  if (isLoading) return <Loaders />;

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <LayoutWrapper />
      </div>
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </Router>
  );
}

export default App;
