import React, { useState, useRef, useEffect, useCallback } from "react";
import Navbar from './components/Navbar/navbar';
import MainConatainer from './components/MainBody/MainContainer';
import * as Styles from "./components/MainBody/style";

function App() {
  const trackedDivRef = useRef();
  const [initialTop, setInitialTop] = useState(0);
  const [showNavDiv, setShowNavDiv] = useState(false);
  const targetRef = useRef(null);

  const handleTargetRef = () => {
    console.log('first')
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScroll = useCallback(() => {
    const rect = trackedDivRef.current.getBoundingClientRect();
    const traveledDistance = initialTop - rect.top;
    // console.log('traveledDistance', traveledDistance);
    if (traveledDistance >= 80) {
      setShowNavDiv(true);
    }
    else {
      setShowNavDiv(false);
    }
  }, [initialTop]);

  useEffect(() => {
    // Set initial top position when the component mounts
    setInitialTop(trackedDivRef.current.getBoundingClientRect().top);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Styles.FullPage>
      <Navbar showNavDiv={showNavDiv} handleTargetRef={handleTargetRef} />
      <MainConatainer trackRef={trackedDivRef} targetRef={targetRef} />
    </Styles.FullPage>
  );
}

export default App;
