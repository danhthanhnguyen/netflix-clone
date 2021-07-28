import React, {useState, useEffect} from 'react';
import '../styles/nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', function() {// componentDidMount
      if(window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');// componentWillUnmount
    }
  }, []);
  return (
    <div className={`nav${show ? " nav--show" : ""}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;