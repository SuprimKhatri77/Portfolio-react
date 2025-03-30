import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import './styles.css'

const wavingHand = '/images/waving-hand.png';
const heroImage = '/images/hero.png';
const djangoIcon = '/images/icon-1.svg';
const postgresqlIcon = '/images/icon-7.svg';
const pythonIcon = '/images/icon-2.svg';
const javascriptIcon = '/images/icon-3.svg';
const tailwindIcon = '/images/icon-4.svg';
const cssIcon = '/images/icon-5.svg';
const htmlIcon = '/images/icon-6.svg';
const aboutImg = '/images/about-img.webp';
const workingEmoji = '/images/working-emoji.png';
const textSvg = '/images/text.svg';
const project1 = '/images/project-1.png';
const project2 = '/images/project-2.png';


function App() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    // Handle fade-in animation
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      appearOnScroll.observe(element);
    });

    // Set initial theme
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <header className="shadow-lg fixed top-0 w-full z-10 h-[70px] bg-white">
        <nav className="flex justify-between items-center py-4 px-5 sm:p-5 max-w-[1200px] w-full mx-auto">
          <a href="#">
            <h1 className="text-2xl font-bold">Suprim.dev</h1>
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
              <ul className="flex gap-5 items-center">
                <li className="relative"><a href="#" className="font-medium text-lg  after:absolute after:content-[''] after:w-0 after:h-1 after:bg-indigo-700 after:left-1/2 after:-bottom-2 after:rounded-full hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-in-out">Home</a></li>
                <li className="relative"><a href="#about" className="font-medium text-lg  after:absolute after:content-[''] after:w-0 after:h-1 after:bg-indigo-700 after:left-1/2 after:-bottom-2 after:rounded-full hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-in-out">About</a></li>
                <li className="relative"><a href="#projects" className="font-medium text-lg  after:absolute after:content-[''] after:w-0 after:h-1 after:bg-indigo-700 after:left-1/2 after:-bottom-2 after:rounded-full hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-in-out">Projects</a></li>
                <li className="relative"><a href="#contacts" className="font-medium text-lg  after:absolute after:content-[''] after:w-0 after:h-1 after:bg-indigo-700 after:left-1/2 after:-bottom-2 after:rounded-full hover:after:w-full hover:after:left-0 after:transition-all after:duration-300 after:ease-in-out">Contacts</a></li>
                <li>
                  <div className="mode-toggle ml-2" id="modeToggle" onClick={toggleDarkMode}>
                    <div className="toggle-circle">
                      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-xs" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 sm:hidden">
              <div className="mode-toggle" id="modeToggleSmall" onClick={toggleDarkMode}>
                <div className="toggle-circle">
                  <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-xs" />
                </div>
              </div>
              <ul>
                <li><FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMobileNav} /></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className={`mob-nav z-20 fixed top-0 right-0 w-3/4 h-screen bg-gray-100 md:hidden 
      transition-transform duration-300 ease-in-out
      ${mobileNavVisible ? 'translate-x-0' : 'translate-x-[100%]'}
      `}>



        <div className="flex flex-col gap-5 px-2">
          <span className="cross-icon py-2 px-2 w-fit rounded-full mt-1 ml-2 cursor-pointer hover:bg-slate-300 transition-colors duration-500 ease-linear" onClick={toggleMobileNav}>
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </span>
          <ul className="flex flex-col gap-3 w-full ">
            <li className="cursor-pointer w-fit py-2 px-4 rounded-md hover:bg-slate-300 transition-all duration-500 ease-in-out nav-links" onClick={toggleMobileNav}><a href="/" className="font-medium text-lg">Home</a></li>
            <li className="cursor-pointer hover:bg-slate-300 transition-all duration-500 ease-in-out w-fit py-2 px-4 rounded-md nav-links" onClick={toggleMobileNav}><a href="#about" className="font-medium text-lg">About</a></li>
            <li className="cursor-pointer hover:bg-slate-300 transition-all duration-500 ease-in-out w-fit py-2 px-4 rounded-md nav-links" onClick={toggleMobileNav}><a href="#projects" className="font-medium text-lg">Projects</a></li>
            <li className="cursor-pointer hover:bg-slate-300 transition-all duration-500 ease-in-out w-fit py-2 px-4 rounded-md nav-links" onClick={toggleMobileNav}><a href="#contacts" className="font-medium text-lg">Contacts</a></li>
            <li className="hidden"><FontAwesomeIcon icon={faBars} /></li>
          </ul>
        </div>
      </section>

      {/* Hero section */}
      <section className="flex flex-col items-center gap-5 w-4/5 mt-[90px] mx-auto max-w-[1200px] lg:w-full z-[-10] lg:flex-row lg:justify-evenly lg:mt-[110px]">
        <div className="flex flex-col gap-4 fade-in">
          <span className="flex items-center justify-center relative lg:justify-start">
            <h2 className="text-4xl font-bold leading-8 text-center lg:text-left lg:text-[48px] lg:leading-tight nav-items-color">Django Web<br />
              <span className="flex items-center gap-5">
                Developer
                <img src={wavingHand} alt="waving-hand" height="60px" width="60px" className="" />
              </span>
            </h2>
          </span>
          <p className="text-color max-w-[410px] text-center lg:text-left">Hi, I'm Suprim Khatri. A passionate Django Web Developer with experience in HTML, CSS, and JavaScript, based in Butwal, Nepal. 📍</p>

          <span className="flex gap-5 items-center justify-center lg:justify-start hero-social">
            <a href="https://www.linkedin.com/in/suprim-khatri77/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin transition-all duration-[0.4s] ease-in-out hover:scale-125">
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
            <a href="https://github.com/SuprimKhatri77" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github transition-all duration-[0.4s] ease-in-out hover:scale-125">
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </span>
        </div>
        <span className="-order-1 lg:order-1 fade-in delay-100">
          <img src={heroImage} alt="profile-picture" className="object-cover object-center h-[280px] w-[280px] rounded-full border-solid border-black border-[3px] animate-[morph_8s_ease-in-out_infinite]" />
        </span>
      </section>

      {/* Tech stack */}
      <section className="flex flex-col mt-[70px] justify-center items-center gap-8 lg:flex-row lg:justify-start w-4/5 mx-auto max-w-[870px] lg:gap-12 fade-in">
        <span className="relative">
          <h2 className="after:absolute after:content-[''] after:h-[2px] after:w-full after:bg-slate-400 after:bottom-[-10px] after:left-0 text-lg font-semibold lg:after:hidden lg:before:absolute lg:before:w-[2px] lg:before:h-full lg:before:bg-slate-600 lg:before:right-[-20px] nav-items-color">Tech stack</h2>
        </span>
        <div>
          <ul className="flex gap-2 lg:gap-4">
            <li className="hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"><img src={djangoIcon} alt="Django" title="Django" className="h-[48px] w-[50px]" /></li>
            <li className="hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"><img src={postgresqlIcon} alt="Python" title="Postgresql" className="h-[48px] w-[50px]" /></li>
            <li className="hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"><img src={pythonIcon} alt="Python" title="Python" className="h-[48px] w-[50px]" /></li>
            <li className="hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"><img src={javascriptIcon} alt="Javascript" title="Javascript" className="h-[48px] w-[50px]" /></li>
            <li className="hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"><img src={tailwindIcon} alt="Tailwind" title="Tailwind" className="h-[48px] w-[50px]" /></li>
            <li className="hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"><img src={cssIcon} alt="CSS" title="CSS" className="h-[48px] w-[50px]" /></li>
            <li className="hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"><img src={htmlIcon} alt="HTML" title="HTML" className="h-[48px] w-[50px]" /></li>
          </ul>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-[1200px] mx-auto w-full" id="about">
        <div className="flex flex-col items-center mt-[80px] w-[95%] mx-auto lg:flex-row lg:items-start lg:w-3/4 lg:gap-[70px] fade-in">
          <span className="relative lg:w-[50%]">
            <img src={aboutImg} alt="" className="h-[200px] w-[300px] sm:h-[350px] sm:w-[410px] rounded-lg object-cover object-right-top" />
            <span className="hidden sm:absolute sm:bottom-[38px] sm:right-[32px] sm:z-10 lg:right[0] sm:block">
              <img src={workingEmoji} alt="" className="h-[60px] w-[60px] z-10" />
            </span>
            <span className="hidden sm:block sm:absolute sm:bg-white sm:w-fit sm:rounded-full sm:bottom-[-31px] sm:right-[-37px]">
              <img src={textSvg} alt="" className="h-[190px] w-[190px] animate-[rotate_9s_linear_infinite]" />
            </span>
          </span>

          <div className="flex flex-col mt-[50px] items-center gap-4 lg:mt-0 lg:w-[60%] lg:items-start">
            <p className="blue-color font-bold text-lg lg:text-left">About me</p>
            <h2 className="text-2xl font-bold nav-items-color text-center lg:text-left lg:w-[400px]">Web Developer <br /> based in Butwal, Nepal 📍</h2>
            <p className="text-justify about-text-color w-4/5 lg:text-left lg:w-full">Hi, I'm Suprim Khatri, an enthusiastic web developer with experience in Django, Python, JavaScript,Tailwind,HTML, and CSS.I am always eager to learn and committed to what I do.</p>
            <p className="text-justify about-text-color w-4/5 lg:text-left lg:w-full">I like to take on new challenges and adpat with the rapidly growing technologies that helps to get the best out of me.</p>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="max-w-[1200px] mx-auto w-full mt-[50px] lg:mt-[80px]" id="projects">
        <div className="w-3/4 mx-auto flex flex-col items-center gap-3 lg:items-start">
          <h2 className="font-bold blue-color text-lg">Projects</h2>
          <h3 className="nav-items-color font-bold text-center">Each project is a unique piece of development.</h3>
          <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-start fade-in">
            <img src={project1} alt="Project-1" className="h-[300px] w-[300px] object-contain object-center lg:h-[400px] lg:w-[400px]" />
            <div className="lg:flex lg:flex-col lg:mt-[50px] flex flex-col gap-5">
              <h2 className="text-center font-bold text-lg nav-items-color lg:text-xl">SwiftJob</h2>
              <p className="text-justify about-text-color">
                SwiftJob is a online job portal platform where users can find a suitable jobs for themselves and also those who are looking to hire a good candidate can also create a job and review the application of the applicants.The project is equipped with user authentication , search filter , CRUD operations for the job creator to create a job , edit it and delete it and can also see the number of applications to be reviewed , number of applicants hired , same for the user as well.
              </p>
              <span className="flex gap-5 justify-center">
                <p className="font-bold text-lg nav-items-color">Python</p>
                <p className="font-bold text-lg nav-items-color">Django</p>
                <p className="font-bold text-lg nav-items-color">JavaScript</p>
              </span>
              <a href="https://swiftjob.onrender.com/" className="text-center font-bold text-lg flex items-center gap-3 justify-center" target="_blank" rel="noreferrer">
                <p className="nav-items-color">Live Demo</p>
                <FontAwesomeIcon icon={faShareFromSquare} className="share-icon" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-start fade-in">
            <img src={project2} alt="Project-1" className="h-[300px] w-[300px] object-contain object-center lg:h-[400px] lg:w-[400px]" />
            <div className="lg:flex lg:flex-col lg:mt-[50px] flex flex-col gap-5">
              <h2 className="text-center font-bold text-lg nav-items-color lg:text-xl">Swiftcart</h2>
              <p className="text-justify about-text-color">SwiftCart is an e-commerce platform offering a diverse range of products, including air conditioners, kitchen appliances, PCs & laptops, gadgets, smart home devices, home appliances, audio & video equipment, and refrigerators. The website features sections for new arrivals, today's deals, and gift cards. Users can browse products by category, view detailed product information, and take advantage of sales and promotions.</p>
              <span className="flex gap-5 justify-center">
                <p className="font-bold text-lg nav-items-color">Python</p>
                <p className="font-bold text-lg nav-items-color">Django</p>
                <p className="font-bold text-lg nav-items-color">JavaScript</p>
              </span>
              <a href="https://swiftcart.pythonanywhere.com/" className="text-center font-bold text-lg flex items-center gap-3 justify-center" target="_blank" rel="noreferrer">
                <p className="nav-items-color">Live Demo</p>
                <FontAwesomeIcon icon={faShareFromSquare} className="share-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="max-w-[1200px] mx-auto w-full mt-[70px] lg:mt-[80px]" id="contacts">
        <div className="flex flex-col w-3/4 mx-auto items-center gap-7 sm:items-start fade-in">
          <span className="flex flex-col gap-2 items-center sm:items-start">
            <h2 className="blue-color font-bold text-xl">Contact</h2>
            <h3 className="font-bold nav-items-color text-lg">You can contact me at 👇</h3>
          </span>
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-12">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <span className="shadow-lg rounded-full bg-white p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#147efb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-search">
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <span className="flex items-center flex-col sm:items-start">
                <h2 className="font-bold nav-items-color lg:text-lg">Location</h2>
                <h3 className="about-text-color text-sm lg:text-[16px]">Butwal,Nepal</h3>
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <span className="shadow-lg rounded-full bg-white p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#147efb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail">
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <span className="flex items-center flex-col sm:items-start">
                <h2 className="font-bold nav-items-color lg:text-lg">Mail</h2>
                <a href="mailto:Suprim.khatri77x@gmail.com" className="about-text-color text-sm hover:text-blue-500 transition-all duration-500 ease-in-out lg:text-[16px]" target="_blank" rel="noreferrer">Suprim.khatri77x@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-2">
        <section className="footer-bg text-white w-[95%] mx-auto mt-[70px] max-w-[1200px] lg:mx-auto rounded-xl">
          <div className="w-full flex flex-col items-center gap-5 lg:flex-row lg:justify-between py-8 px-5">
            <h3 className="text-center">Made By <span className="italic font-bold">Suprim Khatri</span>, Copyright © 2024. All rights are reserved</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/suprim-khatri77/" target="_blank" rel="noreferrer" className="hover:scale-125 transition-all duration-500 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin">
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a href="https://github.com/SuprimKhatri77" target="_blank" rel="noreferrer" className="hover:scale-125 transition-all duration-500 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github">
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;