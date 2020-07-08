import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Switch,Route,NavLink} from 'react-router-dom';
import logo from '../../Images/logo.png'
import Home from '../../MainComponents/Home';
import Articles from '../../MainComponents/Articles';
import Videos from '../../MainComponents/Videos';
import Almanac from '../../MainComponents/Almanac';
import NewsLetter from '../../MainComponents/NewsLetter';
import Guides from '../../MainComponents/Guides';
import Books from '../../MainComponents/Books';
import Account from '../../MainComponents/Account';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router >
            <div class="ui inverted standard text-white">
                <div style={{fontSize:'14px',backgroundColor:'Black'}}  class="ui inverted menu">
                    <NavLink style={{backgroundColor:'Black'}} activeStyle={{backgroudColor:'Black',borderBottom:'10px solid black'}} to="/" className="item animate__animated animate__lightSpeedInLeft">
                    <img style={{borderRadius:'50px'}}  src={logo} width="40" height="40" /> <span style={{marginLeft:'5px',fontWeight:'bold',fontSize:'30px',fontFamily:"'MuseoModerno',cursive",letterSpacing:'5px'}}>CMT-Tricks</span>
                    </NavLink>
                    <NavLink style={{backgroundColor:'Black'}}  activeStyle={{borderBottom:'10px solid orange'}} to="/articles"   className="item">
                        <div  ><img height="40" width="40" src={require('../../Images/articles.png')}/>
                        <h4 >Articles</h4></div>
                    </NavLink>
                    <NavLink style={{backgroundColor:'Black'}}  activeStyle={{borderBottom:'10px solid orange',textAlign:'center'}} to="/videos" className="item">
                        <div><img style={{backgroundColor:'white',borderRadius:'10px'}} height="40" width="40" src={require('../../Images/video.png')}/>
                        <h4>Videos</h4></div>
                    </NavLink>
                    <NavLink style={{backgroundColor:'Black'}}  activeStyle={{borderBottom:'10px solid orange'}} to="/almanac" className="item">
                        <div><img height="40" style={{marginLeft:'5%'}} width="40" src={require('../../Images/almanac.png')}/>
                        <h4>Almanac</h4></div>
                    </NavLink>
                    <NavLink style={{backgroundColor:'Black'}}  activeStyle={{borderBottom:'10px solid orange'}} to="/newsletter" className="item">
                        <div><img  height="40" width="40" style={{marginLeft:'10%'}} src={require('../../Images/newsletter.png')}/>
                        <h4>Newsletter</h4></div>
                    </NavLink>
                    <NavLink style={{backgroundColor:'Black'}}  activeStyle={{borderBottom:'10px solid orange',textAlign:'center'}} to="/guides" className="item">
                        <div><img style={{backgroundColor:'white',borderRadius:'10px'}} height="40" width="40" src={require('../../Images/guides.png')}/>
                        <h4>Guides</h4></div>
                    </NavLink>
                    <NavLink style={{backgroundColor:'Black'}}  activeStyle={{borderBottom:'10px solid orange'}} to="/books" className="item">
                        <div><img height="40" width="40" src={require('../../Images/books.png')}/>
                        <h4>Books</h4></div>
                    </NavLink>
                    <NavLink style={{backgroundColor:'Black'}}  activeStyle={{borderBottom:'10px solid orange',textAlign:'center'}} to="/account" className="item">
                        <div><img style={{backgroundColor:'white',borderRadius:'10px'}} height="40" width="40" src={require('../../Images/account.png')}/>
                        <h4>Account</h4></div>
                    </NavLink>
                    <div class="right menu">
                        <div class="item" style={{textAlign:'center'}}>
                            <div class="ui inverted transparent icon input" style={{height:'50px'}}>
                                <input type="text" style={{border:'1px solid grey',width:"250px",marginLeft:'10px'}} placeholder="e.g Flexbox" />
                                <i class="search link icon" style={{marginRight:'20px',background:'linear-gradient(90deg,#db1d60,#ed4f32)',padding:'20px'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Route exact path="/" component={Home}/>
                <Route path="/articles" component={Articles}/>
                <Route path="/videos" component={Videos}/>
                <Route path="/almanac" component={Almanac} />
                <Route path="/newsletter" component={NewsLetter} />
                <Route path="/guides" component={Guides} />
                <Route path="/books" component={Books}/>
                <Route path="/account" component={Account} />
            </Router>
         );
    }
}
 
export default NavBar;