import React, { useEffect, useState } from 'react';
import '../styles/Loader.css';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;