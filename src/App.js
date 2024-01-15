import React, { useState, useRef, useEffect } from "react";
import Navbar from './components/Navbar/navbar';
import MainConatainer from './components/MainBody/MainContainer';
import * as Styles from "./components/MainBody/style";

function App() {
  const trackedDivRef = useRef();
    const [initialTop, setInitialTop] = useState(0);
    const [showNavDiv, setShowNavDiv] = useState(false);

    const handleScroll = () => {
        const rect = trackedDivRef.current.getBoundingClientRect();
        const traveledDistance = initialTop - rect.top;
        if(traveledDistance >= 0){
          setShowNavDiv(true);
        }
        else {
          setShowNavDiv(false);
        }
    };

    useEffect(() => {
        // Set initial top position when the component mounts
        setInitialTop(trackedDivRef.current.getBoundingClientRect().top);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <Styles.FullPage>
      <Navbar showNavDiv={showNavDiv}/>
      <MainConatainer trackRef={trackedDivRef} />
    </Styles.FullPage>
  );
}

export default App;
