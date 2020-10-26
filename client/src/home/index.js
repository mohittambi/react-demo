import React from "react";
import Header from "../components/Header";
import MediaCard from "../components/MediaCard/MediaCard";
import './home.css';

const Home = () => {
  const cards = [1,2,3,4,5,6,7,8]
  return (
    <div>
      <Header />
      <div className='bottom'>
        <h1>Upcoming Events near you</h1>
        <p>Meet the sports enthusiast near you to play around</p>
        <div className='bottom__cards'>
          {cards.map( card => {
            return <MediaCard key={card} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;
