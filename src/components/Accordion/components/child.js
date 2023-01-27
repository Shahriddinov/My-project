import { React, useState } from "react";
import { useSpring, animated } from "react-spring";

function Child(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? "#6F737C" : "#2B2B2B"
    }
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "55px" },
    to: { opacity: "1", maxHeight: open ? "200px" : "55px",  maxWidth: open ? "884px": "884px", margin: open ? "auto": "auto"},
    config: { duration: "300" }
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",  marginTop: "1%", fontSize: "16px",
      color: "#ffff"
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)", 
      color: open ? "#6F737C" : "#2B2B2B", marginTop: open ? "1%" : "1%"
    },
    config: { duration: "120" }
  });

  return (
    <animated.div className="accordion__item" style={openAnimation}>
      <div className="accordion__header" onClick={toggleHandler}>
        <h4 style={styles.accordionTitle}>{props.title}</h4>
        {open ?  <animated.i style={iconAnimation}>
         -
        </animated.i> :  <animated.i style={iconAnimation}>
         +
        </animated.i>}
       
      </div>
      <p className="accordion__content">{props.text}</p>
    </animated.div>
  );
}

export default Child;