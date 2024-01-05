import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Link
  } from "react-router-dom";
import { animated, useSpring } from '@react-spring/web';
import "./profilePic.jpg";
import { HashLink } from 'react-router-hash-link';

/*
<a href=""> Contact Me </a>
<a href=""> About </a>
<a href=""> Projects </a>
<a href=""> Home </a>
*/

//Used to show skills on projects when hovering
 
const Home = () => {
    
    return (

    <div>

        <div className="navbar">
          <a> <HashLink smooth to="/#about"> About Me </HashLink> </a>
          <a> <HashLink smooth to="/#projects"> Projects </HashLink> </a>
          <a> <HashLink smooth to="/#contact"> Contact Me </HashLink> </a>
        </div>

        <br />
        <br />
        <br />

        <div className = "content">
            <div class = "title-box" id="title">
                <title> Hello, <br /> I'm Lucy </title>
                <img src="./profilePic.jpg" />
            </div>
            
            <p> I’m a Computer Science and Math major at Columbia University interested in a career in software engineering, data science, and machine learning. I'm especially interested in the intersections of computer science and economics, and I have a passion for applying my technical skills to public policy. <br /> <br /> I’ve created this page to compile my personal projects. Thank you for checking it out! </p>

            <h3> Primary Technical Skills </h3>
            
            <div style={{ padding: '0px 0px', }}>
                <div class = "skill-list">
                    <skill> Web Development </skill>
                    <skill> Relational Database Management </skill>
                    <skill> Machine learning </skill>
                </div>
                <br />
                <div class = "skill-list">
                    <skill> Python (Django, Flask) </skill>
                    <skill> Java </skill>
                    <skill> SQL (PostgreSQL, MySQL) </skill>
                    <skill> React </skill>
                    <skill> JavaScript </skill>
                    <skill> HTML/CSS </skill>
                </div>
            </div>

            <h3 id="contact"> Contact Me </h3>
            <div style={{ display: 'flex', gap: '20px' }} >
                <button> <a href="https://github.com/lucyking140" target="_blank" >GitHub</a> </button>
                <button> <a href="https://www.linkedin.com/in/lucyking140/" target="_blank" >Linkedin</a></button>
                <button> <a href="mailto:lk2936@columbia.edu" > Email Me </a> </button>
            </div>
            
            <h3 id="projects"> Projects </h3>
            <div className = "projects">
                <Link to="/lanternDie"> <Project title="Lantern Die" > </Project> </Link>
                <br />
                <Link to="/auctionAlchemy"> <Project title="AuctionAlchemy"> </Project> </Link>
            </div> 
            <Outlet />

            <div className="content" id="about">
                <h3> More About Me </h3>
                <strong> Relevant Coursework: </strong>
                <ul>
                    <li>Data Structures (Teaching Assistant) </li>
                    <li> Artificial Intelligence </li>
                    <li> Introduction to Databases </li>
                    <li> Machine Learning for Genomics </li>
                    <li> Advanced Programming (Systems Programming, C, Bash) </li>
                </ul>
                
                <strong> Community Involvement: </strong>
                <ul>
                    <li> Columbia Women in Computer Science (DivHacks Hackathon 2023 Organizing Team)</li>
                    <li> Columbia Data Science Society (Executive Board) </li>
                    <li> Columbia EcoReps (volunteer) and Greenborough (sustainable community member) </li>
                    <li> Columbia Economics Society (Economics Department Representative 2022 - 2023) </li>
                    <li> Washington State Representative Tarra Simmons (campaign intern) </li>
                    <li> Washington State Representative Emily Randall (youth councilmember) </li>
                    <li> Chicago Justice Project (volunteer data collector and analyst; 2022 Transparency Trailblazer Award for committing >150 hours) </li>
                </ul>

                <strong> Interests and Hobbies: </strong>
                <ul>
                    <li> Public policy and government </li>
                    <li> Tech for social good </li>
                    <li> Computational Biology and Biotech </li>
                    <li> Women/LGBTQ voices in tech </li>
                    <li> Hobbies: running and biking, sewing, pacific northwest hiking </li>
                </ul>
            </div>
        </div>

    </div>
    );
};

function Project({ title }) {
    const [showText, setShowText] = React.useState(false);
  
    const [springProps, api] = useSpring(() => ({
      opacity: 1,
      y: 0,
    }));
  
    const handleMouseOver = () => {
      setShowText(true);
      api.start({
        opacity: 0.8,
        //y: -10,
        scale: 1.005,
      });
    };
  
    const handleMouseLeave = () => {
      setShowText(false);
      api.start({
        opacity: 1,
        //y: 0,
        scale: 1,
      });
    };
  
    //          <title> {showText && <p className="message">Now you can see me!</p>} </title>
    return (
      <div className="project" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <animated.div style={{ ...springProps, cursor: 'pointer' }}>
          <img src={`./${title.toLowerCase()}_cover.png`} alt={title} />
          <title>{title} </title> 

        </animated.div>
      </div>
    );
  }
  
function showskills({skills}) {

}

/*
const [showText, setShowText] = useState(false)
const handleMouseEnter = e => {
    e.target.style.background = "grey"
    setShowText(true)
    }
const handleMouseLeave = e => {
    e.target.style.background = "maroon"
    setShowText(false)
}

return (
    <div className="App">
        <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="button"
        >
        Hover over me
        </button>
        {showText && <p className="message">Now you can see me!</p>}
    </div>
)

*/
 
export default Home;