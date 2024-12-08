import React, { useEffect, useState } from "react";
import "./Home.scss";
import IdeaForm from "../../components/IdeaForm";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isFlipping) return;

      if (window.scrollY > 1) {
        setScrollCount(prevCount => {
          const newCount = prevCount + 1;
          console.log(`Scroll count: ${newCount}`);
          return newCount;
        });
        window.scrollTo(0, 0);
      }
    };

    const handleWheel = (event) => {
      if (isFlipping) return;

      if (event.deltaY > 2) {
        setScrollCount(prevCount => {
          const newCount = prevCount + 1;
          console.log(`Scroll count: ${newCount}`);
          return newCount;
        });
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isFlipping]);

  useEffect(() => {
    console.log(`Scroll count effect: ${scrollCount}`);
    if (scrollCount >= 5) {
      const blocks = document.querySelectorAll('.welcome__block');
      setIsFlipping(true);
      blocks.forEach((block) => {
        const randomDelay = Math.floor(Math.random() * 1000);
        setTimeout(() => {
          block.classList.add('flip');
        }, randomDelay);
      });
      setTimeout(() => {
        setIsFlipping(false);
        document.querySelector('.idea-form-section').classList.add('show');
        document.querySelector('.idea-form').classList.add('show');
      }, 1600);
    }
  }, [scrollCount]);

  return (
    <main className="wrapper">
      <section className="welcome">
        <div className="welcome__grid">

          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>

          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content front" style={{justifyContent: 'flex-end'}}>
              <span style={{ '--char-index': 0 }}>H</span>
              <span style={{ '--char-index': 1 }}>e</span>
              <span style={{ '--char-index': 2 }}>l</span>
              <span style={{ '--char-index': 3 }}>l</span>
              <span style={{ '--char-index': 4, marginRight: '10px'}}>o</span>
            </div>
            <div className="welcome__content back"></div>
          </div>

          <div className="welcome__block">
            <div className="welcome__content front" style={{justifyContent: 'flex-start'}}>
              <span style={{ '--char-index': 5, marginLeft: '10px'}}>f</span>
              <span style={{ '--char-index': 6 }}>r</span>
              <span style={{ '--char-index': 7 }}>i</span>
              <span style={{ '--char-index': 8 }}>e</span>
              <span style={{ '--char-index': 9 }}>n</span>
              <span style={{ '--char-index': 10 }}>d</span>
              <span className="blinking-cursor-home" style={{ '--char-index': 11 }}>_</span>
            </div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content front"></div>
            <div className="welcome__content back"></div>
          </div>
          <div className="welcome__block">
            <div className="welcome__content scroll-content front">
              <p>Scroll down</p>
              <FaArrowDown className="scroll-icon" />
            </div>
            <div className="welcome__content back"></div>
          </div>

        </div>
      </section>
      <section className="idea-form-section">
        <div className="idea-form-container">
          <h2>Share your idea with us!</h2>
          <IdeaForm />
          <footer className="footer">
            <p>&copy; 2024 ffcoders</p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Home;