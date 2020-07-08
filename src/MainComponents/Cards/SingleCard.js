import React, { Component } from 'react';

class SingleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="mcard">
                <div class="ui card" style={{background:'black',borderRadius:'20px'}}>
                    <div class="content" style={{marginBottom:'20%'}}>
                         <h1>Article <small style={{fontSize:'12px'}} class="transparent">{this.props.content.date}</small></h1> 
                         <h4>{this.props.content.title}</h4>
                    </div>
                    <div class="ui grid content">
                        <div class="six wide column" >
                            <img class="ui circular image" style={{border:'10px solid orange'}}  src={window.location.origin+'/avatars/'+this.props.content.avatar} alt="img"/>
                        </div>
                        <div style={{marginTop:'2%'}} class="eight wide column" >
                            <legend class="transparent">Author<h4>{this.props.content.author}</h4></legend>
                        </div>
                    </div>
                    <div class="content">
                        {this.props.content.tags.map(data=><button class="ui mini inverted teal basic button">{data.toUpperCase()}</button>)}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SingleCard;