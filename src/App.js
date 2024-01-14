import React, { useState, useRef, useEffect } from "react";
import Navbar from './components/Navbar/navbar';
import MainConatainer from './components/MainBody/MainContainer';
import * as Styles from "./components/MainBody/style";

function App() {
  const trackedDivRef = useRef();
    const [initialTop, setInitialTop] = useState(0);
    const [showNavDiv, setshowNavDiv] = useState(false);
    const [showMainDiv, setShowMainDiv] = useState(true);

    const handleScroll = () => {
        const rect = trackedDivRef.current.getBoundingClientRect();
        const traveledDistance = initialTop - rect.top;
        if(traveledDistance > -188){
          setShowMainDiv(false);
          setshowNavDiv(true);
        }
        else {
          setShowMainDiv(true);
          setshowNavDiv(false);
        }
        if(traveledDistance > -7){
          setShowMainDiv(false);
          setshowNavDiv(true);
        }
        else {
          setShowMainDiv(true);
          setshowNavDiv(false);
        }
        console.log('Traveled distance:', traveledDistance);
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
      <Navbar isScroll={showNavDiv}/>
      <MainConatainer trackRef={trackedDivRef} isScroll={showMainDiv}/>
    </Styles.FullPage>
  );
}

export default App;
