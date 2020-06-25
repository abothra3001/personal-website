import React from 'react'
import ReactPlayer from 'react-player'
import solitude from './assets/Solitude.mp4'

export const Music = () => (
  <div>
    <h1> In my free time I like to make music!</h1>
    <div className = "padding20"></div>
    <p> This quarantine I've been mixing and producing parodies and originals. Here's my first parody, Brown and Boujee! Be sure to check out my youtube channel to see the rest.</p>

    <div className = "padding20"></div>
    <div align = "center">
    <ReactPlayer url = "https://www.youtube.com/watch?v=dEaNcLlFuB0" width = {1000} height = {600}/>
    </div>

    <div className = "padding20"></div>
    <p> If you'd like to listen to something more serious. Here is a piece I composed in my junior year of high school called Solitude. </p>

    <div align = "center">
    <ReactPlayer url = {solitude} controls = {true} width = {1000} height = {600}/>
    </div>

    <div className = "padding20"></div>
    <p> I post a lot of covers on my instagram: @jellibelli_sings. </p>
  </div>
)
