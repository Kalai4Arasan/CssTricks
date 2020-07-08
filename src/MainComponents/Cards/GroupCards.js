import React, { Component } from 'react';
import '../Cards/GroupCards.css'
import SingleCard from './SingleCard';
class GroupCards extends Component {
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
            <div style={{marginTop:'10%'}} class="ui container grid">
                <div class="four wide column" style={{marginTop:'1%'}}>
                    <div class="ui card" style={{border:'black',background:'linear-gradient(90deg,#db1d60,#ed4f32)',borderRadius:'20px'}}>
                        <div class="content" style={{marginTop:"80%"}}>
                            <h1 >Popular this month</h1>
                        </div>
                        <div class="content">
                        <small style={{fontSize:'30px'}}>Sponsored by Mailchimp</small>
                        </div>
                    </div>
                </div>
                <div class="twelve wide column " style={{}}>
                    <div class="mcards">
                        {
                            this.state.data.map((obj)=><SingleCard content={obj}/>)
                        }
                    </div>
                </div>
            </div>
         );
    }
}
 
export default GroupCards;