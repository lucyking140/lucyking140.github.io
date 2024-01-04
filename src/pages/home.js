import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Link
  } from "react-router-dom";

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
          <title> Lucy King </title>
          <a> </a>
        </div>

        <br />
        <br />
        <br />

        <div className = "content">
            <h3> Hello! Welcome to my portfolio. </h3>
            <p> Hi, I’m Lucy — I’m a Computer Science and Math major at Columbia University interested in a career in tech. I’ve created this page to compile my personal projects. Thank you for checking it out! </p>

            <h3> Projects </h3>
            <div className = "projects">
                <Link to="/lanternDie"> <Project title="Lantern Die" wid = "big"> </Project> </Link>
                <br />
                <Link to="/auctionAlchemy"> <Project title="AuctionAlchemy" wid = "small"> </Project> </Link>
            </div> 
            <Outlet />
        </div>

    </div>
    );

    /*
    <div className="content">
            <h3> About Me </h3>
            <p> Technical Experience: </p>
            <p> Academics:  </p>
            <p> Interests and Hobbies: </p>
            <h3> Contact Me </h3>
            <p> lk2936@columbia.edu <br /> (206) 866 - 8939 <br /> https://www.linkedin.com/in/lucyking140/ </p>
        </div>
    */
};

function Project({title, wid}) {
    // image that takes up the full width of the screen, with a left-bottom oriented title
    const [showText, setShowText] = React.useState(false)
    const showSkills = () => {
        setShowText(true)
    }
    const unShowSkills = () => {
        setShowText(false)
    }
    
    return (
        <div className="project" wid = {wid} onMouseOver={showSkills} onMouseLeave={unShowSkills}>
            <img src={`./${title.toLowerCase()}_cover.png`} alt={title} />
            <title> {title} </title>
            
        </div>      
        // <title> {showText && <p>Now you can see me!</p>} </title>
    )
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