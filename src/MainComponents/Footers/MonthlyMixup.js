import React, { Component } from 'react';
import SingleCard from '../Cards/SingleCard';
import './MonthlyMixup.css'
class MonthlyMixup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
                {
                    avatar:'author1.jpeg',
                    date:'Jun 26, 2020',
                    title:'In Defense of a Fussy Website',
                    author:'Matthew Ström',
                    tags:['care','intention','portfolio','ux']
                },
                {
                    avatar:'author2.jpeg',
                    date:'Jun 12, 2020',
                    title:'Striking a Balance Between Native',
                    author:'Sandrina Pereira',
                    tags:['care','intention','portfolio','ux']
                },
                {
                    avatar:'author3.jpeg',
                    date:'Jun 26, 2020',
                    title:'Cool Little CSS Grid Tricks',
                    author:'Matthew Ström',
                    tags:['care','intention','portfolio','ux']
                },
                {
                    avatar:'author4.jpeg',
                    date:'Jun 26, 2020',
                    title:'The Analytics That Matter',
                    author:'Jhey Tompkins',
                    tags:['care','intention','portfolio','ux']
                },
                {
                    avatar:'author5.jpeg',
                    date:'Jun 26, 2020',
                    title:'How to Reverse CSS Custom Counters',
                    author:'Geoff Graham',
                    tags:['care','intention','portfolio','ux']
                },
            ]
         }
    }
    render() { 
        return ( 
            <>
            <div class="ui computer only grid" style={{marginTop:'10%'}}>
                <div class="row column">
                    <div class="bgstar">
                    <svg id="icon-logo-star" viewBox="0 0 362.62 388.52">
                        <defs>
                            <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
                            <stop offset="0%" stop-color="#DA1B60"></stop>
                            <stop offset="100%" stop-color="#ff8a00"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M156.58 239l-88.3 64.75c-10.59 7.06-18.84 11.77-29.43 11.77-21.19 0-38.85-18.84-38.85-40 0-17.69 14.13-30.64 27.08-36.52l103.6-44.74-103.6-45.92C13 142.46 0 129.51 0 111.85 0 90.66 18.84 73 40 73c10.6 0 17.66 3.53 28.25 11.77l88.3 64.75-11.74-104.78C141.28 20 157.76 0 181.31 0s40 18.84 36.5 43.56L206 149.52l88.3-64.75C304.93 76.53 313.17 73 323.77 73a39.2 39.2 0 0138.85 38.85c0 18.84-12.95 30.61-27.08 36.5l-103.61 45.91L335.54 239c14.13 5.88 27.08 18.83 27.08 37.67 0 21.19-18.84 38.85-40 38.85-9.42 0-17.66-4.71-28.26-11.77L206 239l11.77 104.78c3.53 24.72-12.95 44.74-36.5 44.74s-40-18.84-36.5-43.56z"></path></svg>
                    </div>
                </div>
                <div class="row">
                    <div class="one wide column "></div>
                    <div class="nine wide column">
                        <h1 style={{margin:'10%'}}>Monthly Mixup</h1>
                    </div>
                    <div class="three wide column" >
                        <div >
                            <div class="ui card " id="mixupCard1" style={{display:'flex',marginLeft:'61px'}} >
                                <div class="content" style={{marginBottom:'10%',border:'0'}}>
                                    <h1>Article <small style={{fontSize:'12px'}} class="transparent">{this.state.data[0].date}</small></h1> 
                                    <h4 class="textHover">{this.state.data[0].title}</h4>
                                </div>
                                <div class="ui grid content" style={{borderTop:'0'}}>
                                    <div class="six wide column" >
                                    <img class="ui circular image" style={{display:'flex',marginLeft:'8px'}}  src={window.location.origin+"/avatars/"+this.state.data[0].avatar}/>
                                                <svg height="60" width="60" style={{fill: 'none',stroke: 'url(#orange-to-pink)',strokeWidth: '8',strokeLinecap: 'round',display:'flex',marginTop:'-40px'}} id="half-circle" viewBox="0 0 106 57">
                                                    <defs>
                                                        <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
                                                        <stop offset="0%" stop-color="#DA1B60"></stop>
                                                        <stop offset="100%" stop-color="#ff8a00"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                                    </svg>
                                    </div>
                                    <div style={{marginTop:'1%'}} class="eight wide column" >
                                        <legend style={{marginLeft:'1%'}} >Author<h4 class="textHover">{this.state.data[0].author}</h4></legend>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="three wide column" style={{borderTop:'4px solid #e52e71'}}>

                    </div>
                </div>
                <div class="row" style={{display:'flex',marginTop:'-30px'}}>
                    <div class="three wide column colorCard "></div>
                    <div class="three wide column" >
                        <div >
                            <div class="ui card " id="mixupCard2" style={{display:'flex',marginLeft:'-14px'}} >
                                <div class="content">
                                    <h1>Video <small style={{fontSize:'12px'}} class="transparent">Apr 21,2020</small></h1> 
                                    <h4 class="totalHover" id="color1">Art Directing Images, the Picture Element, and Image CDNs</h4>
                                </div>
                                <div class="ui grid content" style={{borderTop:'0'}}>
                                    <div class="six wide column" >
                                    <svg style={{fill:'white'}} id="icon-play" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.25 16c0 6.213-5.037 11.25-11.25 11.25S4.75 22.213 4.75 16 9.787 4.75 16 4.75 27.25 9.787 27.25 16zM16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15zm-1.657-19.744c-1.002-.668-2.343.05-2.343 1.253v7.63c0 1.204 1.341 1.922 2.343 1.254l5.722-3.815a1.507 1.507 0 000-2.508l-5.722-3.814z"></path></svg>
                                    </div>
                                    <div style={{marginTop:'1%'}} class="ten wide column" >
                                        <legend style={{marginLeft:'1%'}} ><h4 class="totalHover" id="color2">Running Time:<br/> 27:17</h4></legend>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="one wide column">

                    </div>
                    <div class="three wide column">
                    <div >
                            <div class="ui card " id="mixupCard3" >
                                <div class="content codeHover" style={{marginTop:'40%',fontSize:'16px'}} >
                                    <code>
                                        <div class="line1">
                                            <span class="lightYellow">input:out-of-range</span><span class="lightBlue">{"{"}</span><br/>
                                        </div>
                                        <div class="line2">
                                            <span class="lightBlue">border :</span> <span class="number">5</span><span class="lightYellow">px solid</span>
                                        </div>
                                        <div class="line3">
                                            <span class="lightYellow">red</span><span class="lightBlue">; {"}"}</span>
                                        </div>
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row" style={{display:'flex',marginTop:'-32px'}}>
                    <div class="three wide column "></div>
                    <div class="three wide column" >
                        <div >
                            <div class="ui card " id="mixupCard4" style={{display:'flex',marginLeft:'-18px'}} >
                                <div class="content" style={{marginBottom:'10%'}}>
                                    <h1>Article <small style={{fontSize:'12px'}} class="transparent">{this.state.data[0].date}</small></h1> 
                                    <h4 class="textHover">{this.state.data[0].title}</h4>
                                </div>
                                <div class="ui grid content" style={{borderTop:'0'}}>
                                    <div class="six wide column" >
                                    <img class="ui circular image" style={{display:'flex',marginLeft:'8px'}}  src={window.location.origin+"/avatars/"+this.state.data[0].avatar}/>
                                                <svg height="60" width="60" style={{fill: 'none',stroke: 'url(#orange-to-pink)',strokeWidth: '8',strokeLinecap: 'round',display:'flex',marginTop:'-40px'}} id="half-circle" viewBox="0 0 106 57">
                                                    <defs>
                                                        <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
                                                        <stop offset="0%" stop-color="#DA1B60"></stop>
                                                        <stop offset="100%" stop-color="#ff8a00"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                                    </svg>
                                    </div>
                                    <div style={{marginTop:'1%'}} class="eight wide column" >
                                        <legend style={{marginLeft:'1%'}} >Author<h4 class="textHover">{this.state.data[2].author}</h4></legend>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="three wide column">
                    <div class="ui card " id="mixupCard5" >
                        <div class="content codeHover" style={{marginTop:'40%',fontSize:'16px'}} >
                                 <code>
                                        <div class="line1">
                                            <span class="lightYellow">.fraction</span><span class="lightBlue">{"{"} font -</span><br/>
                                        </div>
                                        <div class="line2">
                                            <span class="lightBlue">variant-numeric:</span>
                                        </div>
                                        <div class="line3">
                                            <span class="lightYellow">diagonal-fractions;</span>
                                        </div>
                                        <div class="line4">
                                        <span class="lightBlue">{"}"}</span>
                                        </div>
                                </code>
                            </div>
                        </div>
                    </div>
                    <div class="three wide column">
                    <div >
                            <div class="ui card " id="mixupCard6" >
                                <div class="content" style={{marginBottom:'10%'}}>
                                    <h1>Article <small style={{fontSize:'12px'}} class="transparent">{this.state.data[4].date}</small></h1> 
                                    <h4 class="textHover">{this.state.data[4].title}</h4>
                                </div>
                                <div class="ui grid content" style={{borderTop:'0'}}>
                                    <div class="six wide column" >
                                    <img class="ui circular image" style={{display:'flex',marginLeft:'7px'}}  src={window.location.origin+"/avatars/"+this.state.data[4].avatar}/>
                                                <svg height="60" width="60" style={{fill: 'none',stroke: 'url(#orange-to-pink)',strokeWidth: '8',strokeLinecap: 'round',display:'flex',marginTop:'-40px'}} id="half-circle" viewBox="0 0 106 57">
                                                    <defs>
                                                        <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
                                                        <stop offset="0%" stop-color="#DA1B60"></stop>
                                                        <stop offset="100%" stop-color="#ff8a00"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                                    </svg>
                                    </div>
                                    <div style={{marginTop:'1%'}} class="eight wide column" >
                                        <legend style={{marginLeft:'1%'}} >Author<h4 class="textHover">{this.state.data[4].author}</h4></legend>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="three wide column " >
                         <div class="colorCard2">
                         </div>
                    </div>
                </div>

                <div class="row" style={{display:'flex',marginTop:'-29px'}}>
                    <div class="three wide column"></div>
                    <div class="three wide column">
                    <div class="ui card " id="mixupCard7" >
                                <div class="content" style={{marginBottom:'10%'}}>
                                    <h1>Article <small style={{fontSize:'12px'}} class="transparent">{this.state.data[3].date}</small></h1> 
                                    <h4 class="textHover">{this.state.data[3].title}</h4>
                                </div>
                                <div class="ui grid content" style={{borderTop:'0'}}>
                                    <div class="six wide column" >
                                    <img class="ui circular image" style={{display:'flex',marginLeft:'8px'}}  src={window.location.origin+"/avatars/"+this.state.data[3].avatar}/>
                                                <svg height="60" width="60" style={{fill: 'none',stroke: 'url(#orange-to-pink)',strokeWidth: '8',strokeLinecap: 'round',display:'flex',marginTop:'-40px'}} id="half-circle" viewBox="0 0 106 57">
                                                    <defs>
                                                        <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
                                                        <stop offset="0%" stop-color="#DA1B60"></stop>
                                                        <stop offset="100%" stop-color="#ff8a00"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                                    </svg>
                                    </div>
                                    <div style={{marginTop:'2%'}} class="eight wide column" >
                                        <legend style={{marginLeft:'1%'}} >Author<h4 class="textHover">{this.state.data[3].author}</h4></legend>
                                    </div>
                                </div>
                            </div>

                    </div>
                    <div class="three wide column"></div>
                    <div class="three wide column">

                    <div class="ui card " id="mixupCard8" >
                                <div class="content" style={{marginBottom:'10%'}}>
                                    <h1>Article <small style={{fontSize:'12px'}} class="transparent">{this.state.data[2].date}</small></h1> 
                                    <h4 class="textHover">{this.state.data[2].title}</h4>
                                </div>
                                <div class="ui grid content" style={{borderTop:'0'}}>
                                    <div class="six wide column" >
                                    <img class="ui circular image" style={{display:'flex',marginLeft:'7px'}}  src={window.location.origin+"/avatars/"+this.state.data[2].avatar}/>
                                                <svg height="60" width="60" style={{fill: 'none',stroke: 'url(#orange-to-pink)',strokeWidth: '8',strokeLinecap: 'round',display:'flex',marginTop:'-40px'}} id="half-circle" viewBox="0 0 106 57">
                                                    <defs>
                                                        <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
                                                        <stop offset="0%" stop-color="#DA1B60"></stop>
                                                        <stop offset="100%" stop-color="#ff8a00"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                                    </svg>
                                    </div>
                                    <div style={{marginTop:'1%'}} class="eight wide column" >
                                        <legend style={{marginLeft:'1%'}} >Author<h4 class="textHover">{this.state.data[2].author}</h4></legend>
                                    </div>
                                </div>
                            </div>

                    </div>
                    <div class="three wide column"></div>
                </div>
                
            </div>
            <div clas="ui container" style={{marginTop:'18%'}}>
                <hr class="hrColor"/> 
            </div>
            </>
        );
    }
}
 
export default MonthlyMixup;