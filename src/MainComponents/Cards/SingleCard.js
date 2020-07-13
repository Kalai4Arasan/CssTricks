import React, { Component } from 'react';

class SingleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="mcard">
                <div class="ui card" id="innerCard" >
                    <div class="content" style={{marginBottom:'20%'}}>
                         <h1>Article <small style={{fontSize:'12px'}} class="transparent">{this.props.content.date}</small></h1> 
                         <h4 class="textHover">{this.props.content.title}</h4>
                    </div>
                    <div class="ui grid content" style={{border:'0'}}>
                        <div class="six wide column" >
                        <img class="ui circular image" style={{display:'flex',marginLeft:'10px'}}  src={window.location.origin+"/avatars/"+this.props.content.avatar}/>
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
                        <div style={{marginTop:'2%'}} class="eight wide column" >
                            <legend style={{marginLeft:'1%'}} >Author<h4 class="textHover">{this.props.content.author}</h4></legend>
                        </div>
                    </div>
                    <div class="content" style={{border:'0',marginBottom:'10%'}}>
                        {this.props.content.tags.map(data=><button class="groupButton" style={{marginLeft:'1%',msarginTop:'1%'}}>{data.toUpperCase()}</button>)}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SingleCard;