import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import ProjectPage from "./pages/project";

function App() {
  
  const ld_desc = "Welcome to LanternDie! This project began as a collaborative hackathon project, which I've now developed into a functioning site. \n \n In the New York area, the lantern fly invasive species has become an unavoidable presence every fall, indicative of both the pervasiveness of the fly's damage to the native ecosystem and our community's rally to eradicate it. After the New York City Government implemented a kill on site order for the fly, LanternDie seeks to concentrate New York's fight against the fly by creating a gamified social network featuring lantern fly \"kills\". Our initial presentation of the idea won first prize for the Flora and Fauna category at Columbia DivHacks 2023. \n \n The site is implemented with Django along with a PostgreSQL database, which I deployed for viewing purposes via Heroku with media file storage on AWS S3."
  const aa_desc = "This site was built from an original project for COMS 4111, Introduction to Databases, in collaboration with Alex Baril. The original project placed in the top 4 out of over 50 projects. All code currently used is written by Lucy King. \n \n AuctionAlchemy provides a platform for users to create accounts and interact with our database of over 400 artists and 500 works of art sold in fine art auctions around the world. Users can like and follows works of art, artists, and auction houses that they enjoy, and will receive other recommended works to explore based on their interests. The site is developed with Flask and HTML/CSS, integrated with a PostgreSQL database used to query for recommendations, search functionality, and more. The goal of the project is to highlight its implementation of relational database management."

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="lanternDie" element={<ProjectPage title="Lantern Die" desc = {ld_desc} skillList = "Django, HTML/CSS, PostgreSQL, AWS S3" photo1 = "./LD_1.png" photo2 = "./LD_2.png" photo3 = "./LD_3.png"/>} />
          <Route path="auctionAlchemy" element={<ProjectPage title="Auction Alchemy" desc = {aa_desc} skillList = "Flask, SQLAlchemy, HTML/CSS, PostgreSQL" photo1 = "./AA_1.png" photo2 = "./AA_2.png" photo3 = "./AA_3.png"/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
