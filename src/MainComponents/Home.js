import React, { Component } from 'react';
import MainCard from './Cards/MainCard';
import GroupCards from './Cards/GroupCards';
import SingleBigCard from './Cards/SingleBigCard';
import MonthlyMixup from './Footers/MonthlyMixup';
import FinalFooter from './Footers/FinalFooter';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                    <MainCard/>
                </div>
                <div>
                    <GroupCards/>
                </div>
                <div>
                    <SingleBigCard/>
                </div>
                <div>
                    <MonthlyMixup/>
                </div>
                <div>
                    <FinalFooter/>
                </div>
            </div> 
        );
    }
}
 
export default Home;