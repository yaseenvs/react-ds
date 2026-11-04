import searchIcon from "../assets/magnifying-glass.svg"
import homeIcon from "../assets/house.svg"
import movieIcon from "../assets/film-slate.svg"
import tvIcon from "../assets/television-simple.svg"
import trendIcon from "../assets/trend-up.svg"
import addIcon from "../assets/plus.svg"
import titlecard from "../assets/title.png"
import logo from "../assets/logo.png"
import'./home.css';
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div className="netflix">
    
    <div className="sidebar">
      <div className="logo">
    <img src={logo} alt="" />
    </div>
      <img src={searchIcon} alt="searchicon" />
      <button><img src={homeIcon} alt="homeicon" /></button>
      <img src={movieIcon} alt="movieicon" />
      <img src={tvIcon} alt="tvicon" />
      <img src={trendIcon} alt="trendicon" />
      <img src={addIcon} alt="addicon" />
    </div>
    <div className="main">
      <div className="det">
        <img src={titlecard} alt="titlecard" />
        <p>Rating : 8/10</p>
        <p>2M Streams</p>
        <div className="hero-button">
          <button className="b1">Play</button>
          <button className="b2">Watch Trailer</button>
        </div>
      </div>
      <div className="scroll-sec">
        
        <MovieCard Mtitle="New Relases"/>
        <MovieCard Mtitle="Trending"/>
      </div>
    </div>
   </div> 
  )
}

export default Home