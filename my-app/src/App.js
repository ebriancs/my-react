import "./App.css";
//import './Test.css';
import {
  my_profile,
  my_logo,
  skills_character,
  achievements_character,
  my_html,
  my_css,
  my_js,
  my_python,
  my_sql,
  my_php,
  my_cpp,
  my_csharp,
  my_bootstrap,
  my_jquery,
  my_react,
  my_vue,
  my_django,
  my_flask,
  my_sqlite,
  my_mysql,
  my_postgresql,
  internship,
  the_great_hackathon,
  introduction_to_html,
  introduction_to_css,
  introduction_to_javascript,
  javascript_intermediate,
} from ".";
import React, { useState, useEffect, useMemo } from "react";

// FUNCTIONS
function HideContent() {
  return (
    <>
      <div className="hide-content">
        Currently not available on your device, use device with bigger screen
        dimension
      </div>
    </>
  );
}

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <a className="logo" href="/">
          <img src={my_logo} alt="myLogo" />
        </a>
        <ul>
          <li>
            <a href="#myContact">myContact</a>
          </li>
          <li>
            <a href="#myAchievements">myAchievements</a>
          </li>
          <li>
            <a href="#mySkills">mySkills</a>
          </li>
          <li>
            <a href="/">myHome</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Introduction({ onIntroductionComplete }) {
  const words = useMemo(
    () => ["Programmer!", "Developer!", "Data Scientist!"],
    []
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 20;
  const speed = 80;

  useEffect(() => {
    const wordFlick = setInterval(() => {
      if (forwards) {
        if (offset >= words[wordIndex].length) {
          setSkipCount((prevCount) => prevCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
    }, speed);

    return () => {
      clearInterval(wordFlick);
    };
  }, [wordIndex, offset, forwards, skipCount, words]);

  const handlePAnimationEnd = () => {
    onIntroductionComplete(true);
  };

  return (
    <>
      <section className="introduction">
        <div className="content">
          <h1>ebz</h1>
          <p onAnimationEnd={handlePAnimationEnd}>
            <span>I'm a </span>&nbsp;
            <span>{words[wordIndex].substring(0, offset)}</span>
            <span>|</span>
          </p>
        </div>
      </section>
    </>
  );
}

function Skills({ onSkillsComplete }) {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isCharacterAnimationStarted, setIsCharacterAnimationStarted] =
    useState(false);
  const [isCharacterAnimationFinished, setIsCharacterAnimationFinished] =
    useState(false);
  const [isContentAnimationFinished, setIsContentAnimationFinished] =
    useState(false);
  const [isTitleAnimationFinished, setIsTitleAnimationFinished] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skills = document.querySelector(".skills");
      const isSkillsVisible =
        skills.getBoundingClientRect().bottom <= window.innerHeight + 200;

      if (isSkillsVisible) {
        setIsSkillsVisible(isSkillsVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      isSkillsVisible &&
      isCharacterAnimationFinished &&
      isContentAnimationFinished &&
      isTitleAnimationFinished
    ) {
      onSkillsComplete(true);
    }
  }, [
    onSkillsComplete,
    isSkillsVisible,
    isCharacterAnimationFinished,
    isContentAnimationFinished,
    isTitleAnimationFinished,
  ]);

  const handleCharacterAnimationStart = () => {
    setIsCharacterAnimationStarted(true);
  };

  const handleCharacterAnimationEnd = () => {
    setIsCharacterAnimationFinished(true);
  };

  const handleContentAnimationEnd = () => {
    setIsContentAnimationFinished(true);
  };

  const handleTitleAnimationEnd = () => {
    setIsTitleAnimationFinished(true);
  };

  return (
    <>
      <section id="mySkills" className="skills">
        <div
          onAnimationEnd={handleContentAnimationEnd}
          className={`content ${
            isSkillsVisible && isCharacterAnimationFinished ? "animate" : ""
          }`}
        >
          <div
            className={`list ${isContentAnimationFinished ? "animate" : ""}`}
          >
            <div>
              <h3>MORE</h3>
              <ul>
                <li>Linux & Windows</li>
                <li>Git & Github</li>
                <li>AWS (IAM, EC2, S3, RDS), Heroku, Netlify</li>
                <li>Postman</li>
                <li>Networking</li>
                <li>Machine Learning & Algorithms</li>
                <li>Data Analysis</li>
              </ul>
            </div>
            <div>
              <h3>BASIC KNOWLEDGE</h3>
              <ul>
                <li>
                  PHP&nbsp;
                  <img src={my_php} alt="php" />
                </li>
                <li>
                  C++&nbsp;
                  <img src={my_cpp} alt="cpp" />
                </li>
                <li>
                  C#&nbsp;
                  <img src={my_csharp} alt="csharp" />
                </li>
                <li>
                  Bootstrap&nbsp;
                  <img src={my_bootstrap} alt="bootstrap" />
                </li>
                <li>
                  JQuery&nbsp;
                  <img src={my_jquery} alt="jquery" />
                </li>
                <li>
                  Flask&nbsp;
                  <img src={my_flask} alt="flask" />
                </li>
              </ul>
            </div>
            <div>
              <h3>ADVANCED KNOWLEDGE</h3>
              <ul>
                <li>
                  HTML&nbsp;
                  <img src={my_html} alt="html" />
                </li>
                <li>
                  CSS&nbsp;
                  <img src={my_css} alt="css" />
                </li>
                <li>
                  JavaScript&nbsp;
                  <img src={my_js} alt="javascript" />
                </li>
                <li>
                  Python&nbsp;
                  <img src={my_python} alt="python" />
                </li>
                <li>
                  SQL&nbsp;
                  <img src={my_sql} alt="sql" />
                </li>
                <li>
                  React&nbsp;
                  <img src={my_react} alt="react" />, Vue&nbsp;
                  <img src={my_vue} alt="vue" />
                </li>
                <li>
                  Django&nbsp;
                  <img src={my_django} alt="django" />
                </li>
                <li>
                  SQLite&nbsp;
                  <img src={my_sqlite} alt="sqlite" />, MySQL&nbsp;
                  <img src={my_mysql} alt="mysql" />, PostgreSQL&nbsp;
                  <img src={my_postgresql} alt="postgresql" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          onAnimationEnd={handleTitleAnimationEnd}
          className={`title ${
            isSkillsVisible && isCharacterAnimationFinished ? "animate" : ""
          }`}
        >
          <h2>SKILLS</h2>
        </div>
        <div
          onAnimationStart={handleCharacterAnimationStart}
          onAnimationEnd={handleCharacterAnimationEnd}
          className={`character ${isSkillsVisible ? "animate" : ""}`}
        >
          <img src={skills_character} alt="" />
          <div
            className={`${
              isSkillsVisible && isCharacterAnimationStarted ? "animate" : ""
            }`}
          ></div>
        </div>
      </section>
    </>
  );
}

function Achievements({ onAchievementsComplete }) {
  const [isAchievementsVisible, setIsAchievementsVisible] = useState(false);
  const [isCharacterAnimationStarted, setIsCharacterAnimationStarted] =
    useState(false);
  const [isCharacterAnimationFinished, setIsCharacterAnimationFinished] =
    useState(false);
  const [isContentAnimationFinished, setIsContentAnimationFinished] =
    useState(false);
  const [isTitleAnimationFinished, setIsTitleAnimationFinished] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const achievements = document.querySelector(".achievements");
      const isAchievementsVisible =
        achievements.getBoundingClientRect().bottom <= window.innerHeight + 200;
      console.log(isAchievementsVisible);

      if (isAchievementsVisible) {
        setIsAchievementsVisible(isAchievementsVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      isAchievementsVisible &&
      isCharacterAnimationFinished &&
      isContentAnimationFinished &&
      isTitleAnimationFinished
    ) {
      onAchievementsComplete(true);
    }
  }, [
    onAchievementsComplete,
    isAchievementsVisible,
    isCharacterAnimationFinished,
    isContentAnimationFinished,
    isTitleAnimationFinished,
  ]);

  const handleCharacterAnimationStart = () => {
    setIsCharacterAnimationStarted(true);
  };

  const handleCharacterAnimationEnd = () => {
    setIsCharacterAnimationFinished(true);
  };

  const handleContentAnimationEnd = () => {
    setIsContentAnimationFinished(true);
  };

  const handleTitleAnimationEnd = () => {
    setIsTitleAnimationFinished(true);
  };

  function Slider() {
    const sliderItems = [
      { img: introduction_to_html, name: "Introduction to HTML Certificate" },
      { img: introduction_to_css, name: "Introduction to CSS Certificate" },
      { img: internship, name: "On-the-job Training Certificate" },
      { img: the_great_hackathon, name: "The Great Hackathon Certificate" },
      {
        img: introduction_to_javascript,
        name: "Introduction to JavaScript Certificate",
      },
      {
        img: javascript_intermediate,
        name: "JavaScript Intermediate Certificate",
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(
      Math.floor(sliderItems.length / 2)
    );

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const handlePrev = () => {
      setCurrentIndex(
        (nextIndex) => (nextIndex - 1 + sliderItems.length) % sliderItems.length
      );
    };

    const itemStyles = (index) => {
      const distance = Math.abs(index - currentIndex);
      const translateX = (index - currentIndex) * 25;
      const scale = index === currentIndex ? 1 : 0.8 - distance * 0.05;
      const perspective = index === currentIndex ? "" : "perspective(200px)";
      const rotateY =
        index === currentIndex
          ? ""
          : index < currentIndex
          ? "rotateY(5deg)"
          : "rotateY(-5deg)";

      return {
        transform: `translatex(${translateX}%) scale(${scale}) ${perspective} ${rotateY}`,
        zIndex: sliderItems.length - distance,
        filter: index === currentIndex ? "none" : "blur(1px)",
        opacity: index === currentIndex ? "1" : "0.9",
        transition: "transform 0.3s ease-in-out, z-index 0.3s, filter 0.3s",
      };
    };

    return (
      <div className="slider">
        <div className="items">
          {sliderItems.map((item, index) => (
            <img
              key={item.name}
              src={item.img}
              alt={item.name}
              style={itemStyles(index)}
            />
          ))}
        </div>
        <div className="buttons">
          <button className="prev" onClick={handlePrev}>
            <i className="fa fa-angle-double-left"></i>
          </button>
          <button className="next" onClick={handleNext}>
            <i className="fa fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section id="myAchievements" className="achievements">
        <div
          onAnimationEnd={handleTitleAnimationEnd}
          className={`title ${
            isAchievementsVisible && isCharacterAnimationFinished
              ? "animate"
              : ""
          }`}
        >
          <h2>ACHIEVEMENTS</h2>
        </div>
        <div
          onAnimationEnd={handleContentAnimationEnd}
          className={`content ${
            isAchievementsVisible && isCharacterAnimationFinished
              ? "animate"
              : ""
          }`}
        >
          {isContentAnimationFinished && <Slider />}
        </div>
        <div
          onAnimationStart={handleCharacterAnimationStart}
          onAnimationEnd={handleCharacterAnimationEnd}
          className={`character ${isAchievementsVisible ? "animate" : ""}`}
        >
          <img src={achievements_character} alt="" />
          <div
            className={`${
              isAchievementsVisible && isCharacterAnimationStarted
                ? "animate"
                : ""
            }`}
          ></div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isCardAnimationFinished, setIsCardAnimationFinished] = useState(false);
  const [isDetailClicked, setIsDetailClicked] = useState(false);
  // const [isMessageClicked, setIsMessageClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contact = document.querySelector(".contact");
      const isContactVisible =
        contact.getBoundingClientRect().bottom <= window.innerHeight + 200;

      if (isContactVisible) {
        setIsContactVisible(isContactVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCardAnimationEnd = () => {
    setIsCardAnimationFinished(true);
  };

  const handleDetailClick = () => {
    if (!isDetailClicked) {
      setIsDetailClicked(!isDetailClicked);
      // setIsMessageClicked(false);
      setIsResumeClicked(false);
    }
  };

  /*
    const handleMessageClick = () => {
        if (!isMessageClicked) {
            setIsMessageClicked(!isMessageClicked);
            setIsDetailClicked(false);
            setIsResumeClicked(false);
        }
    };

    const handleMessageClose = () => {
        setIsMessageClicked(!isMessageClicked);
    };
    */

  const handleResumeClick = () => {
    if (!isResumeClicked) {
      setIsResumeClicked(!isResumeClicked);
      // setIsMessageClicked(false);
      setIsDetailClicked(false);
    }
  };

  function Details() {
    const detailsData = [
      { label: "Name", value: "John Ebrian S. Manalo" },
      { label: "Degree", value: "BS Computer Science" },
      { label: "Email", value: "ebrian.cs@gmail.com" },
      { label: "Phone", value: "+639267067396" },
      { label: "Gender", value: "M" },
      { label: "Birth", value: "January 10, 2001" },
      { label: "Height", value: "173 cm" },
      { label: "Weight", value: "60 kg" },
    ];

    return (
      <>
        <div className="details">
          <table>
            <tbody>
              {detailsData.map((data, index) => (
                <tr
                  key={index}
                  className={`${
                    isDetailClicked && isCardAnimationFinished ? "entrance" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <td>{data.label}</td>
                  <td>{data.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  /*
    function Message() {
        const [formData, setFormData] = useState([
            { name: 'Your name', email: '', subject: '', message: '' }
        ]);

        const formFields = [
            { label: 'Name', type: 'text', name: 'name', initial: 'Your name' },
            { label: 'Email', type: 'email', name: 'email', initial: 'Your email' },
            { label: 'Subject', type: 'text', name: 'subject', initial: 'Your subject' },
            { label: 'Message', type: 'textarea', name: 'message', initial: 'Your message' }
        ];

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('formData: ', formData[0].name, formData[0].email, formData[0].subject, formData[0].message);
        };

        return (
            <>
                <div className={`message ${isMessageClicked && isCardAnimationFinished ? 'entrance' : 'exit'}`}>
                    <button onClick={handleMessageClose} className='close'>&times;</button>
                    <h2>Hi! Let's Connect</h2>
                    <form action="" onSubmit={handleSubmit}>
                        {formFields.map((field) => (
                            <div key={field.name}>
                                {field.type === 'textarea' ? (
                                    <textarea name={field.name} id={field.name} placeholder={field.initial} onChange={handleChange} cols="30" rows="10" required></textarea>
                                ) : (
                                    <input name={field.name} id={field.name} type={field.type} placeholder={field.initial} onChange={handleChange} required />
                                )}
                            </div>
                        ))}
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </>
        );
    }
    */

  function Resume() {
    return (
      <>
        <div
          className={`resume ${
            isResumeClicked && isCardAnimationFinished ? "entrance" : ""
          }`}
        >
          <embed
            src={process.env.PUBLIC_URL + "/pdfs/johnebrian_manalo_resume.pdf"}
            type="application/pdf"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <section id="myContact" className="contact">
        <div className="contact-top">
          <div
            onAnimationEnd={handleCardAnimationEnd}
            className={`card ${isContactVisible ? "animate" : ""}`}
          >
            <div className="card-top">
              <p>
                Skilled and motivated computer programmer and developer,
                knowledgeable in software development and data science,
                prioritizing to develop high-quality programs and organized
                codes. A good communicator with excellent problem-solving skills
                and a passion for continuous learning.
              </p>
              <img src={my_profile} alt="" />
            </div>
            <div className="card-bottom">
              <h2>JOHN EBRIAN S. MANALO</h2>
              <h4>BS Computer Science</h4>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ebriancs/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="fa fa-linkedin-square"
                  ></a>
                  LINKEDIN
                </li>
                <li>
                  <a
                    href="https://github.com/ebriancs"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="fa fa-github"
                  ></a>
                  GITHUB
                </li>
                {/*<li><i onClick={handleMessageClick} className='fa fa-comments-o'></i>MESSAGE</li>*/}
                <li>
                  <i
                    onClick={handleResumeClick}
                    className="fa fa-file-text"
                    aria-label="Resume"
                  ></i>
                  RESUME
                </li>
                <li>
                  <i
                    onClick={handleDetailClick}
                    className="fa fa-address-card"
                    aria-label="Details"
                  ></i>
                  DETAILS
                </li>
              </ul>
            </div>
          </div>

          <Details />
          {/*<Message />*/}
          <Resume />
        </div>
        <div className="contact-bottom">
          <div className="referrence">
            <div className="left">
              <h4>REFERRENCE</h4>
              <ul>
                <li>
                  <a
                    href="https://www.vecteezy.com/free-png/cartoon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cartoon PNGs by Vecteezy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pngwing.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Programming Icons by PNGWing
                  </a>
                </li>
              </ul>
            </div>
            <div className="middle">
              <h4>CONTACT</h4>
              <ul>
                <li>Email: ebrian.cs@gmail.com</li>
                <li>Phone: +639267067396</li>
              </ul>
            </div>
            <div className="right">
              <h4>DEVELOPMENT TOOLS</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>JSX</li>
              </ul>
              <ul>
                <li>Linux</li>
                <li>Git</li>
                <li>Github</li>
                <li>Vscode</li>
              </ul>
            </div>
            <div className="end">
              <p>
                Developed by John Ebrian S. Manalo, a web portfolio to showcase
                my skills, knowledge and passion in this field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === "...") {
          return ".";
        } else {
          return prevDots + ".";
        }
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="loading">
          LOADING <span>{dots}</span>
        </div>
      </>
    );
  }
}

function App() {
  const [showContent, setShowContent] = useState(true);
  const [isIntroductionCompleted, setIsIntroductionCompleted] = useState(false);
  const [isSkillsCompleted, setIsSkillsCompleted] = useState(false);
  const [isAchievementsCompleted, setIsAchievementsCompleted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const minWidth = 1200;
      const minHeight = 600;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (screenWidth < minWidth || screenHeight < minHeight) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleIntroductionComplete = (completed) => {
    setIsIntroductionCompleted(completed);
  };

  const handleSkillsComplete = (completed) => {
    setIsSkillsCompleted(completed);
  };

  const handleAchievementsComplete = (completed) => {
    setIsAchievementsCompleted(completed);
  };

  return (
    <div className="app">
      {showContent ? (
        <>
          <header>
            <Navigation />
          </header>

          <main>
            <Introduction onIntroductionComplete={handleIntroductionComplete} />
            {isIntroductionCompleted && (
              <Skills onSkillsComplete={handleSkillsComplete} />
            )}
            {isSkillsCompleted && (
              <Achievements
                onAchievementsComplete={handleAchievementsComplete}
              />
            )}
          </main>

          <footer>{isAchievementsCompleted && <Contact />}</footer>
        </>
      ) : (
        <HideContent />
      )}
    </div>
  );
}

export default App;
