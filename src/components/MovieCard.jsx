import React from 'react'
import trending from "../assets/poster-cover.jpg"
import poster1 from "../assets/poster-cover-2.jpeg"
import poster2 from "../assets/poster-cover-3.jpeg"
import poster3 from "../assets/poster-cover-4.jpeg"
import poster4 from "../assets/poster-cover-5.jpeg"
import poster5 from "../assets/poster-cover-6.jpeg"
import poster6 from "../assets/poster-cover-7.jpeg"
import './moviecard.css'
function MovieCard({Mtitle}) {
  return (
    <>
    <h1 className="new">{Mtitle}</h1>
      <div className="list">
          <img src={trending} alt="" />
          <img src={poster1} alt="" />
          <img src={poster2} alt="" />
          <img src={poster3} alt="" />
          <img src={poster4} alt="" />
          <img src={poster5} alt="" />
          <img src={poster6} alt="" />
          <img src={trending} alt="" />
          <img src={poster1} alt="" />
          <img src={poster2} alt="" />
          <img src={poster3} alt="" />
          <img src={poster4} alt="" />
          <img src={poster5} alt="" />
          <img src={poster6} alt="" />
       </div>
    </>
  )
}

export default MovieCard