import React, { Component } from 'react';
class MainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
     cardBody={
        marginTop:'3%',
        backgroundImage: `radial-gradient(ellipse closest-side, rgba(15, 14, 22, 0.75), #100e17),url(${require('../../Images/contentImages/maincard.png')})`,
    }
    
    render() { 
        return ( 
            <div className="ui container" style={this.cardBody}>
                <h3>Fresh Article <span style={{fontSize:'10px'}}>July 5, 2020 </span></h3>
                <h1 class="textHover" style={{fontWeight:'Bolder',fontSize:'40px'}}>An Eleventy Starter with Tailwind CSS and Alpine.js</h1>
                <div class="ui grid">
                    <div class="two wide computer only column" >
                        <img class="ui circular image" style={{display:'flex',marginLeft:'10px'}}  src={require('../../Images/contentImages/author1.jpeg')}/>
                        <svg height="100" width="100" style={{fill: 'none',stroke: 'url(#orange-to-pink)',strokeWidth: '8',strokeLinecap: 'round',display:'flex',marginTop:'-64px'}} id="half-circle" viewBox="0 0 106 57">
                            <defs>
                                <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
                                <stop offset="0%" stop-color="#DA1B60"></stop>
                                <stop offset="100%" stop-color="#ff8a00"></stop>
                                </linearGradient>
                            </defs>
                            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                            </svg>
                    </div>
                    <div style={{marginTop:'2%'}} class="three wide column" >
                        <legend ><span style={{color:'grey'}}>Author</span><h4 class="textHover" style={{display:'flex',marginTop:'3px'}}>Chris Coyer</h4></legend>
                    </div>
                    <div style={{marginTop:'2%',display:'flex',marginLeft:'-100px'}} class="three wide column" >
                        <legend ><span style={{color:'grey'}}>2 Comments</span><h4 class="commentHover" style={{display:'flex',marginTop:'3px'}}>Join Conversation
                        </h4>
                        </legend>
                        <div>
                        <p style={{visibility:'hidden'}}> hell</p>
                            <svg style={{display:'flex',marginTop:'-10px',marginLeft:'3px'}} viewBox="0 0 24 24" class="icon-arrow-right" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 12.5L23 12.5" stroke="url(#paint0_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M1 12.5H2" stroke="url(#paint1_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M17.5 7L23 12.5L17.5 18" stroke="url(#paint2_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <defs>
                            <linearGradient id="paint0_linear" x1="10.7498" y1="12.5" x2="11.3447" y2="9.73465" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF8A00"></stop>
                            <stop offset="1" stop-color="#DA1B60"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="1.23436" y1="12.5" x2="2.00945" y2="12.2748" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF8A00"></stop>
                            <stop offset="1" stop-color="#DA1B60"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="18.789" y1="17.9995" x2="23.3162" y2="17.3419" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF8A00"></stop>
                            <stop offset="1" stop-color="#DA1B60"></stop>
                            </linearGradient>
                            </defs>
                            </svg>
                            </div>
                    </div>
                </div>
                <div class="ui grid">
                    <div class="ten wide column">
                        <p style={{fontSize:'25px'}}>
                        Lots of fun with gradients from Bennett Feely: stars, stripes, banners, bursts… I love being able to use nice patterns with either no image requests at all, or very little SVG.
                        <br/>
                        <br/>
                        <br/>
                        Reminder: Bennett does all sorts of cool stuff. I’ve probably used Clippy about a million times. …
                        </p>
                        <a href="" class="UnderlineHover" style={{}}>Read article</a>
                        <br/>
                        <br/>
                        <br/>
                        <button class="groupButton">GRADIENTS</button>
                    </div>
                    <div class="five wide computer only column " >
                        <div class="animate__animated animate__fadeInRight animate__delay-1s" style={{marginLeft:'30%'}}>
                            <img src={require('../../Images/contentImages/mailcimp.jpg')} style={{borderRadius:'10px'}} height="250" width="250"/>
                            <br/>
                            <small class="ui transparent" style={{fontWeight:'bolder'}}>
                            Reach inboxes when it matters most. Instantly deliver transactional emails to your customers.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MainCard;