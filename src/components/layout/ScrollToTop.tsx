import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object, which includes pathname, search, hash, etc.
  const location = useLocation();

  // Run the scroll effect whenever the location changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  }, [location]); // Dependency on the entire location object ensures it triggers on any change

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;