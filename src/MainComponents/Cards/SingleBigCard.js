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
                tags:['api','express','graphql','netlify','netlifyfunction'],
                bg:'bg1.jpeg',
            },
            {
                title:'Building Serverless GraphQL API in Node with Express and Netlify',
                date:'July 5, 2020',
                avatar:'author2.jpeg',
                name:'Geoff Graham',
                content:`Any time I chat with a fellow web person and CSS-Tricks comes up in conversation, there is a good chance they’ll say: oh yeah, that guide on CSS flexbox, I use that all the time!

                Indeed that page, and it’s cousin the CSS grid guide, are among our top trafficked pages. I try to take extra care with them making sure the information on them is current, useful, and the page loads speedily and properly. A while back`,
                tags:['api','express','graphql','netlify','netlifyfunction'],
                bg:'bg6.jpeg',
            },
            {
                title:'Building Serverless GraphQL API in Node with Express and Netlify',
                date:'July 5, 2020',
                avatar:'author3.jpeg',
                name:'Jhey Tompkins',
                content:`I’ve always wanted to build an API, but was scared away by just how complicated things looked. I’d read a lot of tutorials that start with “first, install this library and this library and this library” without explaining why that was important. I’m kind of a Luddite when it comes to these things.
                Well, I recently rolled up my sleeves and got my hands dirty.`,
                tags:['api','express','graphql','netlify','netlifyfunction'],
                bg:'bg8.jpeg',
            },
            {
                title:'Building Serverless GraphQL API in Node with Express and Netlify',
                date:'July 5, 2020',
                avatar:'author4.jpeg',
                name:'Sarah Drasner',
                content:`I’ve always wanted to build an API, but was scared away by just how complicated things looked. I’d read a lot of tutorials that start with “first, install this library and this library and this library” without explaining why that was important. I’m kind of a Luddite when it comes to these things.
                Well, I recently rolled up my sleeves and got my hands dirty.`,
                tags:['api','express','graphql','netlify','netlifyfunction'],
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

            $window.scroll(function() {
                if ( $window.scrollTop() >= distance ) {
                    $('#ad').addClass('animate__animated animate__fadeInLeft');
                }
                if ( $window.scrollTop() >= fixing ) {
                    $('#fixing').css({'position':'fixed','top':$window.scrollTop()-1450})
                    if($window.scrollTop()>=end-500){
                        //window.alert('end reached...')
                        $('#fixing').addClass('animate__animated animate__fadeOutLeft');
                    }
                }
            });
    }

    render() { 
        return ( 
            <>
            <div class="ui grid" style={{marginTop:'10%'}}>
                <div id="ad" class="four wide computer only column" style={{marginLeft:'5%'}}>
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
                    <div id="fixing" class="">
                        <img src={'/backgrounds/ad3.jpg'} style={{borderRadius:'10px'}} height="250" width="250"/>
                        <br/>
                        <small class="ui transparent" style={{fontWeight:'bolder'}}>
                        Reach inboxes when it matters most. Instantly deliver transactional emails to your customers.
                        </small>
                    </div>
                </div>

                <div class="ten wide column container">
                {this.state.data.map((item)=>{
                        return (<div className="ui container" style={{
                            marginTop:'5%',
                            backgroundImage: `linear-gradient(30deg, black, transparent),linear-gradient(-30deg, black, transparent),linear-gradient(30deg, transparent, black),linear-gradient(108deg, black, transparent),url(${'/backgrounds/'+item.bg})`,
                        }}>
                        <h3>Article <span style={{fontSize:'7px'}}>{item.date} </span></h3>
                        <h1 style={{fontWeight:'Bolder',fontSize:'40px'}}>{item.title}</h1>
                        <div class="ui grid">
                            <div class="two wide computer only column" >
                                <img class="ui circular image" style={{border:'10px solid orange'}}  src={window.location.origin+'/avatars/'+item.avatar}/>
                            </div>
                            <div style={{marginTop:'2%'}} class="three wide column" >
                                <legend >Author<h4>{item.name}</h4></legend>
                            </div>
                        </div>
                        <div class="ui grid">
                            <div class="eleven wide column">
                                <p style={{fontSize:'20px'}}>
                                {item.content}
                                <br/>
                                <br/>
                                <br/>
                                Reminder: Bennett does all sorts of cool stuff. I’ve probably used Clippy about a million times. …
                                </p>
                                <a href="" style={{fontSize:'25px',fontWeight:'bolder',textDecoration:'underline',textDecorationColor:'orange',background:'linear-gradient(90deg,#db1d60,#ed4f32)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Read article</a>
                                <br/>
                                <br/>
                                <br/>
                                {item.tags.map(tag=>{
                                   return ( <button class="ui mini inverted teal basic button">{tag.toUpperCase()}</button>);
                                })}
                            </div>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    );
                })}
                        
                </div>
            </div>
            <div id="end" style={{marginBottom:'5%'}} class="ui grid">
                <div class="five wide column"></div>
                <button style={{background:'linear-gradient(90deg,#db1d60,#ed4f32)',color:'white',fontSize:'20px'}} class="ui button ten wide column">Keep browsing in the archives</button>
            </div>
            </>
         );
    }
}
 
export default SingleBigCard;