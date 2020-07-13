import React, { Component } from 'react';
import $ from 'jquery';
class SingleBigCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
            {
                title:'Building Serverless GraphQL API in Node with Express and Netlify',
                date:'July 5, 2020',
                avatar:'author1.jpeg',
                name:'Matthew Ström',
                content:`I’ve always wanted to build an API, but was scared away by just how complicated things looked. I’d read a lot of tutorials that start with “first, install this library and this library and this library” without explaining why that was important. I’m kind of a Luddite when it comes to these things.
                Well, I recently rolled up my sleeves and got my hands dirty.`,
                tags:['api','express','graphql','netlify','netlifyGrid'],
                bg:'bg1.jpeg',
            },
            {
                title:'Building Serverless GraphQL API in Node with Express and Netlify',
                date:'July 5, 2020',
                avatar:'author2.jpeg',
                name:'Geoff Graham',
                content:`Any time I chat with a fellow web person and CSS-Tricks comes up in conversation, there is a good chance they’ll say: oh yeah, that guide on CSS flexbox, I use that all the time!

                Indeed that page, and it’s cousin the CSS grid guide, are among our top trafficked pages. I try to take extra care with them making sure the information on them is current, useful, and the page loads speedily and properly. A while back`,
                tags:['api','express','graphql','netlify','netlifyGrid'],
                bg:'bg6.jpeg',
            },
            {
                title:'Building Serverless GraphQL API in Node with Express and Netlify',
                date:'July 5, 2020',
                avatar:'author3.jpeg',
                name:'Jhey Tompkins',
                content:`I’ve always wanted to build an API, but was scared away by just how complicated things looked. I’d read a lot of tutorials that start with “first, install this library and this library and this library” without explaining why that was important. I’m kind of a Luddite when it comes to these things.
                Well, I recently rolled up my sleeves and got my hands dirty.`,
                tags:['api','express','graphql','netlify','netlifyGrid'],
                bg:'bg8.jpeg',
            },
            {
                title:'Building Serverless GraphQL API in Node with Express and Netlify',
                date:'July 5, 2020',
                avatar:'author4.jpeg',
                name:'Sarah Drasner',
                content:`I’ve always wanted to build an API, but was scared away by just how complicated things looked. I’d read a lot of tutorials that start with “first, install this library and this library and this library” without explaining why that was important. I’m kind of a Luddite when it comes to these things.
                Well, I recently rolled up my sleeves and got my hands dirty.`,
                tags:['api','express','graphql','netlify','netlifyGrid'],
                bg:'bg4.jpeg',
            }
        ],
         }
    }

    componentDidMount(){
        var distance = $('#ad').offset().top;
        var fixing = $('#fixing').offset().top;
        var end = $('#end').offset().top;
        var $window = $(window);
        var fix=0
            $window.scroll(function() {
                if ( $window.scrollTop() >= fixing+50 && $window.scrollTop()<end-120) {
                    $('#fixing').addClass('animate__animated animate__fadeIn').css({'position':'fixed','top':25});
                    if($window.scrollTop()>=end-100){
                        //window.alert('end reached...')
                        $('#fixing').css({'position':'fixed','top':fix+end-100})
                    }
                }
                else{
                    $('#fixing').css({'position':'absolute','top':2800})
                }
            });
    }

    render() { 
        return ( 
            <>
            <div class="ui grid" style={{marginTop:'10%'}}>
                <div id="ad" class="four wide computer only column" style={{marginLeft:'4%',marginTop:'10%'}}>
                    <div>
                        <img src={'/backgrounds/ad1.jpeg'} style={{borderRadius:'10px'}} height="250" width="250"/>
                        <br/>
                        <small class="ui transparent" style={{fontWeight:'bolder'}}>
                        Reach inboxes when it matters most. Instantly deliver transactional emails to your customers.
                        </small>
                    </div>
                    <br/>
                    <div>
                        <img src={'/backgrounds/ad2.jpeg'} style={{borderRadius:'10px'}} height="250" width="250"/>
                        <br/>
                        <small class="ui transparent" style={{fontWeight:'bolder'}}>
                        Reach inboxes when it matters most. Instantly deliver transactional emails to your customers.
                        </small>
                    </div>
                    <br/>
                    <div id="fixing" class="" style={{WebkitAnimation:'fadein 2s'}}>
                        <img src={'/backgrounds/ad3.jpg'} style={{borderRadius:'10px'}} height="250" width="250"/>
                        <br/>
                        <small class="ui transparent" style={{fontWeight:'bolder'}}>
                        <p style={{width:'300px'}}>Reach inboxes when it matters most. Instantly deliver transactional emails to your customers.</p>
                        </small>
                    </div>
                </div>

                <div class="ten wide column container">
                {this.state.data.map((item)=>{
                        return (
                            <div className="ui container" style={{marginTop:'10%',padding:'5%',backgroundImage: `radial-gradient(ellipse closest-side, rgba(15, 14, 22, 0.75), #100e17),url(${window.location.origin+"/backgrounds/"+item.bg})`}}>
                            <h3>Fresh Article <span style={{fontSize:'10px'}}>{item.date}</span></h3>
                                <h1 class="textHover" style={{fontWeight:'Bolder',fontSize:'40px'}}>{item.title}</h1>
                            <div class="ui grid" style={{marginTop:'10px'}}>
                                <div class="two wide computer only column" >
                                    <img class="ui circular image" style={{display:'flex',marginLeft:'10px'}}  src={window.location.origin+"/avatars/"+item.avatar}/>
                                    <svg height="90" width="90" style={{fill: 'none',stroke: 'url(#orange-to-pink)',strokeWidth: '8',strokeLinecap: 'round',display:'flex',marginTop:'-60px'}} id="half-circle" viewBox="0 0 106 57">
                                        <defs>
                                            <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
                                            <stop offset="0%" stop-color="#DA1B60"></stop>
                                            <stop offset="100%" stop-color="#ff8a00"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                        </svg>
                                </div>
                                <div style={{marginTop:'3%',marginLeft:'10px'}} class="three wide column" >
                                    <legend ><span style={{color:'grey'}}>Author</span><h4 class="textHover" style={{display:'flex',marginTop:'3px'}}>Chris Coyer</h4></legend>
                                </div>
                                <div style={{marginTop:'3%',display:'flex',marginLeft:'-50px'}} class="four wide column" >
                                    <legend ><span style={{color:'grey'}}>2 Comments</span><h4 class="commentHover" style={{display:'flex',marginTop:'3px',cursor:'pointer'}}>Join Conversation
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
                                <div class="sixteen wide column">
                                    <p style={{fontSize:'20px'}}>
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
                                    {
                                        item.tags.map(data=><button class="groupButton" style={{marginLeft:'1%',marginTop:'1%'}}>{data}</button>)
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })}
                        
                </div>
            </div>
            <div id="end" style={{marginBottom:'5%'}} class="ui grid">
                <div class="five wide column"></div>
                <button id="bigButton" class="ui button ten wide column">Keep browsing in the archives</button>
            </div>
            </>
         );
    }
}
 
export default SingleBigCard;