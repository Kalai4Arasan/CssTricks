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
            <div style={{marginTop:'10%',marginLeft:'4%',marginRight:'4%'}} class="ui grid">
                <div class="four wide column" style={{marginTop:'2%'}}>
                    <div class="ui card" style={{border:'black',padding:'10%',boxShadow:'none',background:'linear-gradient(0deg,#ff8a00,#e52e71)',borderRadius:'20px',height:'94%',width:'120%'}}>
                        <div class="content" style={{marginTop:"80%"}}>
                            <h1 >Popular this month</h1>
                        </div>
                        <div class="content" style={{border:'0'}}>
                        <small style={{fontSize:'30px'}}>Sponsored by Mailchimp</small>
                        </div>
                    </div>
                </div>
                <div class="twelve wide column ">
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
