import React from 'react';
import Navigation from "../components/navigation/Navigation";
import Introduction from "./index/introduction/Introduction";
import WhyAway from "./index/whyAway/WhyAway";
import Benefits from "./index/benefits/Benefits";

const Index = () => {
    return <div>
        <div>
            <Navigation/>
        </div>
        <div>
            <Introduction/>
            <WhyAway/>
            <Benefits/>
        </div>
    </div>
}

export default Index;