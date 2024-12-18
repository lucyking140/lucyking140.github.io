import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import ProjectPage from "./pages/project";
import { useScroll, animated } from '@react-spring/web';

function App() {
  
  const ld_desc = "In the New York area, the lantern fly invasive species has become an unavoidable presence every fall, indicative of both the pervasiveness of the fly's damage to the native ecosystem and our community's rally to eradicate it. After the New York City Government implemented a kill on site order for the fly, LanternDie seeks to concentrate New York's fight against the fly by creating a gamified social network featuring lantern fly \"kills\". Our initial presentation of the idea won first prize for the Flora and Fauna category at Columbia DivHacks 2023. \n \n The site is implemented with Django along with a PostgreSQL database, which I deployed for viewing purposes via Heroku with media file storage on AWS S3."
  const aa_desc = "This site was built from an original project for COMS 4111, Introduction to Databases, in collaboration with Alex Baril. The original project placed in the top 4 out of over 50 projects. All code currently used is written by Lucy King. \n \n AuctionAlchemy provides a platform for users to create accounts and interact with our database of over 400 artists and 500 works of art sold in fine art auctions around the world. Users can like and follows works of art, artists, and auction houses that they enjoy, and will receive other recommended works to explore based on their interests. The site is developed with Flask and HTML/CSS, integrated with a PostgreSQL database used to query for recommendations, search functionality, and more. The goal of the project is to highlight its implementation of relational database management."
  const census_desc = "The US Census Bureau's International Trade API is a key resource compiling US import and export data for hundreds of countries and thousands of commodities, but much of this information is hidden from agencies, researchers, and members of the public who are familiar with the terminology of international trade but lack the technical skills to understand the API’s jargon. This new query builder bridges the gap for new users by providing an intuitive process of selecting parameters and viewing datasets, teaching users the fundamentals of the API querying process while also providing easy access to data. \n\n This platform was developed with an Angular frontend and a Flask API for data processing, and will be integrated directly into the Census Bureau website after passing regulatory approval in 2025. For a more detailed breakdown of the technical components of the page, see the GitHub repo linked above.";
  const unicc_desc = "As a Break Through Tech AI Fellow, I completed a three-month ML course, followed by a three-month fellowship at the UN International Computing Centre in Fall 2024. Working with three other BTAI fellows, I developed an open-source chatbot to answer user questions based on a database of 80+ climate change-related policies and resolutions published by the UN Economic Council for Europe. Our final product correctly identifies key themes and specific information from the dataset and links users to relevant documents determined by our RAG model. We plan to continue to improve fact-based recall of information like dates and statistics.  \n\nWe built our model on top of Meta’s open-source LLaMA 3.1, fine-tuned with Low-Rank Adaptation (LoRA) and a receiver augmented generation pipeline that involves parsing our dataset into content-based chunks, embedding each chunk into a vector space document index, and retrieving the most relevant chunks using cosine similarity based on an inputted question. \n\nDuring the project, I was responsible for model training, fine-tuning, and developing the front end demo using Flask and HTML/CSS. My team members worked on data processing, model evaluation, and business evaluation. In December, we will present our findings to a panel of UNECE and UNICC representatives who will use our model as a prototype for a final implementation of the bot. "

  // const { scrollYProgress } = useScroll()

  return (
   
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />  
              <Route path="lanternDie" element={<ProjectPage title="Lantern Die" desc = {ld_desc} url = "https://lantern-di3-0504b6bd8222.herokuapp.com/" github = "https://github.com/lucyking140/lantern-di3" skillList = {["Django", "HTML/CSS", "PostgreSQL", "AWS S3", "Git"]} photo1 = "./LD_1.png" photo2 = "./LD_2.png" photo3 = "./LD_3.png"/>} />
              <Route path="auctionAlchemy" element={<ProjectPage title="Auction Alchemy" desc = {aa_desc} url="http://35.237.83.178:8111/" github = "https://github.com/lucyking140/AuctionAlchemy" skillList = {["Flask", "SQLAlchemy", "HTML/CSS", "PostgreSQL", "RDBM", "Git"]} photo1 = "./AA_1.png" photo2 = "./AA_2.png" photo3 = "./AA_3.png"/>} />
              <Route path="census" element={<ProjectPage title="Coding It Forward: International Trade API Query Builder" desc = {census_desc} url="" github = "https://github.com/lucyking140/census-querytool" skillList = {["Angular", "Flask", "HTML/CSS", "Git"]} photo1 = "./AA_1.png" photo2 = "./AA_2.png" photo3 = "./AA_3.png"/>} />
              <Route path="unicc" element={<ProjectPage title="Break Through Tech: Chatbot for the UN Economic Council for Europe's Climate Change Database" desc = {unicc_desc} url="" github = "https://github.com/lucyking140/btai-unicc/blob/main/UNICC_LLaMA.ipynb" skillList = {["Machine Learning", "LLMs", "Information Retrieval", "Python", "Flask", "Git"]} photo1 = "./AA_1.png" photo2 = "./AA_2.png" photo3 = "./AA_3.png"/>} />
            </Routes>
          </Router>
        </div>
    
  )
}

export default App;
