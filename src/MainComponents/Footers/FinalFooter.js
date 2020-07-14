import React, { Component } from 'react';
import './FinalFooter.css';
import $ from 'jquery';
class FinalFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <>
            <div>
                <h1 style={{textAlign:'center',fontWeight:'bolder'}}><img className="ui avatar image" src="/icons/mailbox.png"/><span style={{paddingBottom:'5%'}}>The Newsletter</span></h1>
            </div>
            <div style={{marginLeft:'35%',marginTop:'3%'}} class="ui massive input">
                <input type="text" style={{borderRadius:'8px'}} placeholder="lovetricks@internet.cool"/>
                <button style={{color:'white',background:'linear-gradient(to top left,#ff8a00,#e52e71)',width:'180px',borderRadius:'8px',marginLeft:'4%',fontWeight:'bolder',fontSize:'20px'}} class="ui button">Search</button>
            </div>
            <div class="ui grid" style={{marginTop:'4%',marginLeft:'3%',marginRight:'3%'}}>
                <div class="row">
                <div class="two wide column"></div>
                <div class="one wide column"></div>
                <div id="social1" data="Subscribe" class="ui two wide column socialText" tabindex="0">
                    <h2 class="socialInnerText">Youtube</h2>
                    <span class="sponserHover" >@realcsstricks</span>
                </div>
                <div id="social2" data="Follow" class="ui two wide column socialText" tabindex="0">
                    <h2 class="socialInnerText">Instagram</h2>
                    <span class="sponserHover">@real_css_tricks</span>
                </div>
                <div id="social3" data="Follow" class="ui two wide column socialText" tabindex="0">
                    <h2 class="socialInnerText">Twitter</h2>
                    <span class="sponserHover">@CSS</span>
                </div>
                <div id="social4" data="Like" class="ui two wide column socialText" tabindex="0">
                    <h2 class="socialInnerText">Facebook</h2>
                    <span class="sponserHover">@CSSTricks</span>
                </div>
                <div id="social5" data="Get URL" class="ui two wide column socialText" tabindex="0">
                    <h2 class="socialInnerText">Rss</h2>
                    <span class="sponserHover">Feed</span>
                </div>
                </div>
                <div class="two wide column"></div>
                <div class="one wide column"></div>
                <div class="row" style={{marginTop:'5%',color: '#b1b1b1'}}>
                        <div class="ui ten wide column" style={{lineHeight: '1.7'}}>
                            <h2>
                            CSS-Tricks<span style={{color:'orange'}}>*</span> is created, written by, and maintained by <span class="textHover" style={{color:'white'}}>Chris Coyier</span> and <span class="textHover" style={{color:'white'}}>a team</span> of swell people. The tech stack for this site is fairly <span class="textHover" style={{color:'white'}}>boring</span>. That's a good thing! I've used <span class="textHover" style={{color:'white'}}>WordPress</span> since day one all the way up to <span class="textHover" style={{color:'white'}}>v17</span>, a decision I'm very <span class="textHover" style={{color:'white'}}>Jetpack</span>. I also leverage Jetpack for extra functionality and <span class="textHover" style={{color:'white'}}>Local</span> for local development.
                            </h2>
                            <small><span style={{color:'orange'}}>*</span>May or may not contain any actual "CSS" or "Tricks".</small>
                        </div>
                        <div class="ui two wide column"></div>
                        <div class="ui four wide column">
                            <h1 style={{color:'white'}}>Other Navs</h1>
                            <table style={{background:'#100e17',color:'white',border:'0',fontSize:'1.2rem',fontWeight: '400',color: '#b1b1b1'}}>
                                <tr>
                                    <td >Contact</td>
                                    <td>   </td>
                                    <td>About</td>
                                </tr>
                                <tr>
                                    <td>Guest Wrtiting</td>
                                    <td>   </td>
                                    <td>Jobs</td>
                                </tr>
                                <tr>
                                    <td>Advertise</td>
                                    <td>   </td>
                                    <td>License</td>
                                </tr>
                                <tr>
                                    <td>Subscribe</td>
                                    <td>   </td>
                                    <td>All Author</td>
                                </tr>
                            </table>
                        </div>
                </div>
                <div class="row" style={{marginTop:'5%'}}>
                    <div class="five wide column" >
                        <div class=" ui card " id="codepen">
                        <svg class="codepen-logo" viewBox="0 0 138 26" width="80%" height="80%"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0l11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
                            <div class="content">
                                <h5>
                                    <a id="sponserTextHover">CodePen</a> is a place to experiment, debug, and show off your HTML, CSS, and JavaScript creations.
                                </h5>
                            </div>
                        </div> 
                    </div>
                    <div class="five wide column" style={{display:'flex',marginLeft:'25px'}} >
                        <div class=" ui card" id="codepen">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{fill:'#50c6db'}} viewBox="0 0 589.02 164.24"><title>Flywheel logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M82.7,18.32a63.8,63.8,0,1,0,63.8,63.79A63.79,63.79,0,0,0,82.7,18.32Zm-17.1,9a57.29,57.29,0,0,1,34.88.22,19.81,19.81,0,0,0-7.69,10.18c-2.41,7.3.13,14,2.38,19.84l.25.64c1.31,3.47,1.94,7.92-1.44,11.05a17,17,0,0,0-4.66-3c.53-7.19-3.68-13.54-11.72-17.18L77,48.83C71.67,46.44,67.1,44.38,64.82,40c-2.48-4.75-1.07-9.35.55-12.37ZM91.73,82a9,9,0,1,1-9-9A9,9,0,0,1,91.73,82Zm-36-50.5a19.63,19.63,0,0,0,2,12.24c3.56,6.82,10.13,9.79,15.93,12.41l.64.29c3.4,1.54,7,4.22,7.07,8.63A16.93,16.93,0,0,0,76,66.36c-4.78-5.52-12.32-7.15-20.61-4.18l-.66.24c-5.45,2-10.15,3.65-14.95,2.11a13.3,13.3,0,0,1-8.3-8.27A57.8,57.8,0,0,1,55.71,31.47ZM27.84,99a57.43,57.43,0,0,1-.11-33.42,20.39,20.39,0,0,0,9.6,6.55c7.39,2.38,14.15,0,20.11-2.19l.65-.24c3.6-1.29,8.23-1.88,11.5,1.48A16.78,16.78,0,0,0,67,75.59c-7.47-.75-14.08,3.34-17.82,11.34l-.29.63c-2.39,5.13-4.46,9.56-8.9,11.76a13.77,13.77,0,0,1-11.9-.17ZM55.2,132.47a57.75,57.75,0,0,1-23.49-24,22.72,22.72,0,0,0,2.72.18,20.31,20.31,0,0,0,9.08-2.11c7-3.44,10-9.88,12.61-15.55l.29-.62c1.61-3.45,4.5-7.11,9.4-6.81A16.81,16.81,0,0,0,67,88.42c-5.81,4.67-7.51,12.19-4.34,20.5l.25.65c2,5.31,3.77,9.89,2.25,14.48-1.67,5.07-6,7.34-9.4,8.34ZM100,136.83a57.27,57.27,0,0,1-34.94-.1,19.79,19.79,0,0,0,7.69-10.17c2.41-7.3-.13-14-2.38-19.84l-.24-.64c-1.34-3.52-2-8,1.57-11.18a16.83,16.83,0,0,0,4.55,2.79C75.59,105,79.8,111.48,88,115.17l.65.29c5.28,2.39,9.85,4.45,12.13,8.82,2.48,4.75,1.07,9.35-.55,12.37C100.18,136.65,100.12,136.8,100,136.83Zm9.85-4.16a19.61,19.61,0,0,0-2-12.09c-3.56-6.82-10.13-9.79-15.93-12.41l-.64-.29c-3.49-1.58-7.21-4.36-7.06-9a16.86,16.86,0,0,0,5.12-1.25c4.77,5.74,12.43,7.48,20.85,4.46l.67-.24c5.44-2,10.14-3.66,14.94-2.11a13.24,13.24,0,0,1,8.22,8.06A57.77,57.77,0,0,1,109.86,132.67ZM140.1,82.11a57.12,57.12,0,0,1-2.41,16.43,20.34,20.34,0,0,0-9.47-6.39c-7.39-2.38-14.14,0-20.1,2.19l-.66.24c-3.67,1.31-8.43,1.91-11.71-1.69a17,17,0,0,0,2.6-4.2,18.2,18.2,0,0,0,1.94.12c6.75,0,12.65-4.07,16.1-11.45l.29-.63c2.4-5.13,4.46-9.56,8.91-11.76a13.71,13.71,0,0,1,11.95.2A57.18,57.18,0,0,1,140.1,82.11ZM122,57.8c-7,3.44-10,9.87-12.61,15.55l-.29.62c-1.62,3.46-4.53,7.16-9.47,6.81a16.85,16.85,0,0,0-1.1-4.93c5.8-4.67,7.48-12.18,4.32-20.48l-.25-.66c-2-5.3-3.77-9.88-2.25-14.48,1.67-5.06,6-7.33,9.4-8.34l.44-.12a57.79,57.79,0,0,1,23.48,24.08A20.55,20.55,0,0,0,122,57.8Z"></path><path class="cls-1" d="M82.7.86A81.26,81.26,0,1,0,164,82.11,81.26,81.26,0,0,0,82.7.86Zm0,152.31a71.06,71.06,0,1,1,71.05-71.06A71.14,71.14,0,0,1,82.7,153.17Z"></path><path class="cls-1" d="M150.27,15.1C142.66,7.42,132.85,1.78,124,0a1.1,1.1,0,0,0-.67,2.08,82.79,82.79,0,0,1,39.69,40.17,1.11,1.11,0,0,0,1,.65,1.26,1.26,0,0,0,.33-.05,1.11,1.11,0,0,0,.74-1.27C163.26,32.3,158,22.89,150.27,15.1Z"></path><path class="cls-1" d="M41.8,162.14A82.79,82.79,0,0,1,2.11,122a1.1,1.1,0,0,0-2.09.67c1.87,9.3,7.15,18.71,14.87,26.5s17.42,13.32,26.23,15.08l.22,0a1.1,1.1,0,0,0,.46-2.1Z"></path><path class="cls-1" d="M229.51,49.8h-30a1.76,1.76,0,0,0-1.75,1.75V113.2a1.75,1.75,0,0,0,1.75,1.75h6a1.75,1.75,0,0,0,1.75-1.75V87h19.4a1.75,1.75,0,0,0,1.75-1.75v-6a1.75,1.75,0,0,0-1.75-1.75H207.3V59.3h22.21a1.75,1.75,0,0,0,1.75-1.75v-6A1.75,1.75,0,0,0,229.51,49.8Z"></path><path class="cls-1" d="M275.74,105.45H253.53V51.55a1.75,1.75,0,0,0-1.75-1.75h-6A1.76,1.76,0,0,0,244,51.55V113.2a1.75,1.75,0,0,0,1.75,1.75h30a1.75,1.75,0,0,0,1.75-1.75v-6A1.75,1.75,0,0,0,275.74,105.45Z"></path><path class="cls-1" d="M317.67,49.57H311a1.74,1.74,0,0,0-1.54.92L295.92,75.56,282.07,50.47a1.75,1.75,0,0,0-1.53-.9h-6.68a1.75,1.75,0,0,0-1.54,2.59L291,86.58V113.2a1.75,1.75,0,0,0,1.75,1.75h6a1.75,1.75,0,0,0,1.75-1.75v-26l18.68-35.06a1.75,1.75,0,0,0-1.55-2.57Z"></path><path class="cls-1" d="M587.27,105.45H565.06V51.55a1.75,1.75,0,0,0-1.75-1.75h-6a1.76,1.76,0,0,0-1.75,1.75V113.2a1.75,1.75,0,0,0,1.75,1.75h30A1.75,1.75,0,0,0,589,113.2v-6A1.75,1.75,0,0,0,587.27,105.45Z"></path><path class="cls-1" d="M443.73,49.8h-6A1.76,1.76,0,0,0,436,51.55V77.49H414.5V51.55a1.75,1.75,0,0,0-1.75-1.75h-6A1.75,1.75,0,0,0,405,51.55V113.2a1.75,1.75,0,0,0,1.75,1.75h6a1.75,1.75,0,0,0,1.75-1.75V87H436V113.2a1.75,1.75,0,0,0,1.75,1.75h6a1.75,1.75,0,0,0,1.75-1.75V51.55A1.75,1.75,0,0,0,443.73,49.8Z"></path><path class="cls-1" d="M492.1,49.8H461.71A1.76,1.76,0,0,0,460,51.55V113.2a1.75,1.75,0,0,0,1.75,1.75H492.1a1.75,1.75,0,0,0,1.75-1.75v-6a1.75,1.75,0,0,0-1.75-1.75H469.46V87h19.7a1.75,1.75,0,0,0,1.75-1.75v-6a1.75,1.75,0,0,0-1.75-1.75h-19.7V59.3H492.1a1.75,1.75,0,0,0,1.75-1.75v-6A1.75,1.75,0,0,0,492.1,49.8Z"></path><path class="cls-1" d="M540,49.8H509.62a1.75,1.75,0,0,0-1.75,1.75V113.2a1.75,1.75,0,0,0,1.75,1.75H540a1.75,1.75,0,0,0,1.75-1.75v-6a1.75,1.75,0,0,0-1.75-1.75H517.37V87h19.76a1.75,1.75,0,0,0,1.75-1.75v-6a1.75,1.75,0,0,0-1.75-1.75H517.37V59.3H540a1.75,1.75,0,0,0,1.75-1.75v-6A1.75,1.75,0,0,0,540,49.8Z"></path><path class="cls-1" d="M392.73,49.78h-6.57a1.25,1.25,0,0,0-1.22,1L374.81,94.4,364.5,50.75a1.25,1.25,0,0,0-1.22-1h-6.6a1.26,1.26,0,0,0-1.22,1l-10.32,43.6L335,50.75a1.25,1.25,0,0,0-1.22-1h-6.57a1.26,1.26,0,0,0-1,.48,1.25,1.25,0,0,0-.24,1.06L340.58,114a1.27,1.27,0,0,0,.26.58,1.25,1.25,0,0,0,1,.47h6.57a1.25,1.25,0,0,0,1.22-1L360,70.31l10.34,43.8a1.26,1.26,0,0,0,1.22,1h6.62a1.24,1.24,0,0,0,1.21-1L394,51.32a1.28,1.28,0,0,0-.24-1.06A1.26,1.26,0,0,0,392.73,49.78Z"></path></g></g></svg>
                            <div class="content">
                                <h5>
                                CSS-Tricks is hosted by <a id="sponserTextHover2">Flywheel</a> , the best WordPress hosting in the business, with a local development tool to match.
                                </h5>
                            </div>
                        </div> 
                    </div>
                    <div class="five wide column" style={{display:'flex',marginLeft:'25px'}}>
                        <div class=" ui card" id="codepen">
                            <img style={{height:'90px',width:'100px'}} src="/icons/shoptalk.png"/>
                            <div class="content">
                                <h5>
                                <a id="sponserTextHover3">Shoptalk</a>  is a podcast all about front-end web design and development.
                                </h5>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default FinalFooter;