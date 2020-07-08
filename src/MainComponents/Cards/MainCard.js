import React, { Component } from 'react';
class MainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
     cardBody={
        marginTop:'3%',
        backgroundImage: `linear-gradient(30deg, black, transparent),linear-gradient(-30deg, black, transparent),linear-gradient(30deg, transparent, black),linear-gradient(108deg, black, transparent),url(${require('../../Images/contentImages/maincard.png')})`,
    }
    
    render() { 
        return ( 
            <div className="ui container" style={this.cardBody}>
                <h3>Fresh Article <span style={{fontSize:'10px'}}>July 5, 2020 </span></h3>
                <h1 style={{fontWeight:'Bolder',fontSize:'40px'}}>USA.css</h1>
                <div class="ui grid">
                    <div class="two wide computer only column" >
                        <img class="ui circular image" style={{border:'10px solid orange'}}  src={require('../../Images/contentImages/author1.jpeg')}/>
                    </div>
                    <div style={{marginTop:'2%'}} class="three wide column" >
                        <legend >Author<h4>Chris Coyer</h4></legend>
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
                        <a href="" style={{fontSize:'25px',fontWeight:'bolder',textDecoration:'underline',textDecorationColor:'orange',background:'linear-gradient(90deg,#db1d60,#ed4f32)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Read article</a>
                        <br/>
                        <br/>
                        <br/>
                        <button class="ui mini inverted teal basic button">GRADIENTS</button>
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