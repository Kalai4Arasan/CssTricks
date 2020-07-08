import React, { Component } from 'react';
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
                <input type="text" placeholder="lovetricks@internet.cool"/>
                <button style={{color:'white',background:'linear-gradient(90deg,#db1d60,#ed4f32)',marginLeft:'4%',fontWeight:'bolder',fontSize:'20px'}} class="ui button">Search</button>
            </div>
            <div class="ui grid container" style={{marginTop:'4%'}}>
                <div class="row">
                <div class="two wide column"></div>
                <div class="one wide column"></div>
                <div class="ui two wide column inverted primary button vertical animated button" tabindex="0">
                    <div class="hidden content">Youtube</div>
                    <div class="visible content">
                        <i class="youtube icon"></i>
                    </div>
                </div>
                <div class="ui two wide column inverted primary button vertical animated button" tabindex="0">
                    <div class="hidden content">Instagram</div>
                    <div class="visible content">
                        <i class="instagram icon"></i>
                    </div>
                </div>
                <div class="ui two wide column inverted primary button vertical animated button" tabindex="0">
                    <div class="hidden content">Twitter</div>
                    <div class="visible content">
                        <i class="twitter icon"></i>
                    </div>
                </div>
                <div class="ui two wide column inverted primary button vertical animated button" tabindex="0">
                    <div class="hidden content">Facebook</div>
                    <div class="visible content">
                        <i class="facebook icon"></i>
                    </div>
                </div>
                <div class="ui two wide column inverted primary button vertical animated button" tabindex="0">
                    <div class="hidden content">Rss</div>
                    <div class="visible content">
                        <i class="rss icon"></i>
                    </div>
                </div>
                </div>
                <div class="two wide column"></div>
                <div class="one wide column"></div>
                <div class="row" style={{marginTop:'5%'}}>
                        <div class="ui ten wide column">
                            <h2>
                            CSS-Tricks* is created, written by, and maintained by Chris Coyier and a team of swell people. The tech stack for this site is fairly boring. That's a good thing! I've used WordPress since day one all the way up to v17, a decision I'm very happy with. I also leverage Jetpack for extra functionality and Local for local development.
                            </h2>
                            <small>*May or may not contain any actual "CSS" or "Tricks".</small>
                        </div>
                        <div class="ui two wide column"></div>
                        <div class="ui four wide column">
                            <h1>Other Navs</h1>
                            <table class="ui fixed table" style={{background:'black',color:'white'}}>
                                <tr>
                                    <td>Contact</td>
                                    <td>About</td>
                                </tr>
                                <tr>
                                    <td>Guest Wrtiting</td>
                                    <td>Jobs</td>
                                </tr>
                                <tr>
                                    <td>Advertise</td>
                                    <td>License</td>
                                </tr>
                                <tr>
                                    <td>Subscribe</td>
                                    <td>All Author</td>
                                </tr>
                            </table>
                        </div>
                </div>
                <div class="row" style={{marginTop:'5%'}}>
                    <div class="one wide column"></div>
                    <div class="five wide column" >
                        <div class=" ui card" style={{background:'black'}}>
                            <a class="image" style={{background:'white',padding:'5%',height:'100px',width:'100%'}} href="#">
                                <img src="/icons/codepen.png"/>
                            </a>
                            <div class="content">
                                <h3>
                                    CodePen is a place to experiment, debug, and show off your HTML, CSS, and JavaScript creations.
                                </h3>
                            </div>
                        </div> 
                    </div>
                    <div class="five wide column" >
                        <div class=" ui card" style={{background:'black'}}>
                            <a class="image" style={{height:'100px',width:'100%'}} href="#">
                                <img src="/icons/flywheel.png"/>
                            </a>
                            <div class="content">
                                <h3>
                                CSS-Tricks is hosted by Flywheel, the best WordPress hosting in the business, with a local development tool to match.
                                </h3>
                            </div>
                        </div> 
                    </div>
                    <div class="five wide column" >
                        <div class=" ui card" style={{background:'black'}}>
                            <a class="image" style={{padding:'5%',height:'120px',width:'100%'}} href="#">
                                <img style={{marginLeft:'10%',height:'80px',width:'200px'}} src="/icons/shoptalk.png"/>
                            </a>
                            <div class="content">
                                <h3>
                                ShopTalk is a podcast all about front-end web design and development.
                                </h3>
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