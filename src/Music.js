import React from 'react'
import ReactPlayer from 'react-player'
import solitude from './assets/Solitude.mp4'

export const Music = () => (
  <div>
    <h1> In my free time I like to make music and music videos!</h1>

    <div className = "padding20"></div>
    <p> In March 2023, I dropped my first album called Apathy. Give it a listen on <a href = "https://open.spotify.com/album/5v5EsQF8LCHRUeuhljX2yb" target="_blank" rel="noopener noreferrer">Spotify</a> or <a href = "https://music.apple.com/us/album/apathy/1676713659" target="_blank" rel="noopener noreferrer">Apple Music </a>! </p>
"
    <div align = "center">
    <iframe src="https://open.spotify.com/embed/album/5v5EsQF8LCHRUeuhljX2yb?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

    <div className = "padding20"></div>
    <p> If you'd like to listen to something less lyrical, here is a piece I composed in my junior year of high school called Solitude. </p>

    <div align = "center">
    <ReactPlayer url = {solitude} controls = {true} width = "100%" height = "auto"/ >
    </div>

    <div className = "padding20"></div>
    <p> This quarantine I've been mixing and producing parodies and originals. Here's my first parody, Brown and Boujee! Be sure to check out my youtube channel to see the rest.</p>

    <div className = "padding20"></div>


    <div className='wrapper'>
    <ReactPlayer
    className='player'
    
    url= "https://www.youtube.com/watch?v=dEaNcLlFuB0"
    width='100%'
    height='100%'
  />
  </div>

    <div className = "padding20"></div>
    <p> I post a lot of covers on my instagram:<a href = "https://www.instagram.com/anjali_bunjali/" target="_blank" rel="noopener noreferrer">@anjali_bunjali</a> </p>
  </div>
)
