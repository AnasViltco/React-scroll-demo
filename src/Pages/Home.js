import React from 'react'
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Animator } from "react-scroll-motion";

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(),  ZoomOut());
    const FadeUp = batch(Fade(), Move(), Sticky());
      
  return (
    <div>
       <ScrollContainer>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(10, -1))}>
      <span style={{ fontSize: "0px" }}></span>
    </Animator>
  </ScrollPage>
  <ScrollPage style={{backgroundColor:"black"}}>
    <Animator animation={ZoomInScrollOut}>
      <div className='col-sm-12'>
    <img src='img/logo.png' className='img-fluid' />
    </div>
    </Animator>
  </ScrollPage>
  
  
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
    <div className='col-sm-12 p-0' style={{height:"100vh", width:"100vw"}}>
    <img src='img/demo.png' className='img-fluid' />
    </div>
    </Animator>
  </ScrollPage>
</ScrollContainer>

    </div>
  )
}

export default Home