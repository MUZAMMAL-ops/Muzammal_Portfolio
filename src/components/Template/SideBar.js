import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
// 
const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/shirtcolor.png`} alt="" />
      </Link>
      <header>
        <h2>Muzammal Riaz</h2>
        <p>
          <a href="mailto:riazmuzammal350@gmail.com">riazmuzammal350@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
    Hi, I am Muzammal , a dedicated MERN developer with a strong passion for creating innovative and efficient web applications. With experience in building robust solutions and a keen eye for detail, I excel in both front-end and back-end development. My problem-solving skills and commitment to delivering high-quality results make me a valuable asset to any development team.


      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Muzammal Riaz<Link to="/"></Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
