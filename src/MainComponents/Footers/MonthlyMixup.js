import React, { Component } from 'react';
import SingleCard from '../Cards/SingleCard';
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
            <div class="ui computer only grid" style={{marginTop:'20%',backgroundImage:'url("/backgrounds/bglogo.png")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div class="row">
                    <div class="ten wide column">
                        <h1 style={{marginLeft:'20%',marginTop:'5%'}}>Monthly Mixup</h1>
                    </div>
                    <div class="four wide column" style={{display:'flex',right:'16px',borderTop:'5px solid orange',borderLeft:'5px solid orange',borderTopLeftRadius:'10px'}}>
                        <div style={{}}>
                        <SingleCard content={this.state.data[0]}/>
                        </div>
                    </div>
                    <div class="two wide column" style={{borderTop:'5px solid orange',display:'flex',right:'22px'}}></div>
                    <div class="four wide column" style={{borderTop:'5px solid orange',borderRight:'5px solid orange',borderTopRightRadius:'10px'}}>
                        
                    </div>
                    <div class="four wide column">
                        <div style={{borderRadius:'10px'}}>
                        <SingleCard content={this.state.data[1]}/>
                        </div>
                    </div>
                    <div class="two wide column" style={{borderBottom:'5px solid orange',borderRight:'5px solid orange',display:'flex',right:'11px',borderBottomRightRadius:'10px'}}>
                        
                    </div>
                    <div class="four wide column">
                        <div style={{borderRadius:'10px'}}>
                        <SingleCard content={this.state.data[2]}/>
                        </div>
                    </div>
                    <div class="four wide column" style={{borderRight:'5px solid orange'}}>
                        
                    </div>
                    <div class="four wide column" style={{display:'flex',right:'14px'}}>
                        <div style={{borderBottom:'5px solid orange',borderRight:'5px solid orange',borderBottomRightRadius:'10px'}}>
                        <SingleCard content={this.state.data[3]}/>
                        </div>
                    </div>
                    <div class="two wide column" style={{}}>
                        
                    </div>
                    <div class="four wide column">
                        {/* <div style={{borderRadius:'10px'}}>
                        <SingleCard content={this.state.data[0]}/>
                        </div> */}
                    </div>
                    <div class="two wide column" style={{}}>
                        
                    </div>
                </div>
                
            </div>
            <div clas="ui container">
                <hr style={{border:"3px solid orange",margin:'4%'}}/> 
            </div>
            </>
        );
    }
}
 
export default MonthlyMixup;