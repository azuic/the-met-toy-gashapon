import React from 'react';
import {toys} from './toys.js';
import {depts} from "./depts.js";
import GachaponBall from "./GachaponBall";
// import Gundam from "./Gundam";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";

import { render, Sprite, Stage } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

import {gsap,Draggable,InertiaPlugin,VelocityTracker} from "gsap/all";
import InstructionCard from "./InstructionCard";

gsap.registerPlugin(Draggable,InertiaPlugin,VelocityTracker);

const sizes = toys.map(i=>i.size);
const largest=Math.max(...sizes);
const smallest = Math.min(...sizes);


const height = window.innerHeight;
const width = window.innerWidth;
const OPTIONS = {
    backgroundColor: 0xffffff,
    height: height,
    width: width
};


export default class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.dragTarget = React.createRef();
        this.dragInstance = null;
        this.state={
            angle:0,
            speed:0,
            objectSelected:Math.floor(Math.random()*toys.length),
            showModal:false
        }
    }

    componentDidMount() {
        this.dragInstance = Draggable.create(this.dragTarget, {
            type: 'rotation',
            throwProps:true,
            inertia: true,
            onDragStart:()=>
                this.setState({doShuffle:true}),
            onDrag: ()=>
                this.setState({angle:(this.rotation +360*100000)%360}),
            onThrowUpdate: ()=>
                this.setState({angle:(this.rotation +360*100000)%360}),
            onThrowComplete: ()=>
                {this.setState({
                    angle:(this.rotation +360*100000)%360,
                    showModal:true});
                console.log(toys[this.state.objectSelected].objectID)}
        })
    }

    showGundam=()=>this.setState({showModal:!this.state.showModal});
    hideGundam=()=>this.setState({showModal:false});

    render() {
        return(
            <div className="Gallery">
                <Stage options={OPTIONS}>
                    {toys.map((each,index)=>(<GachaponBall key={index} tint={depts[each.department].color} height={each.size/largest*100+5} />))}
                </Stage>
                {/*{toys.map(i=>(*/}
                {/*    <Link key={i.objectID} to={{pathname:`/img/${i.objectID}`,state:{background:this.props.location}}}>*/}
                {/*    </Link>*/}
                {/*))}*/}
                {/*    <Link key={toys[this.state.objectSelected].objectID} to={{pathname:`/img/${toys[this.state.objectSelected].objectID}`,state:{background:this.props.location}}} showModal={this.props.showModal}/>*/}
                <InstructionCard showModal={this.state.showModal} objectID={toys[this.state.objectSelected].objectID}/>
                <div className="draggable" ref={div => (this.dragTarget = div)} style={{position:'absolute',bottom:'10%', left: '50%',width:'320px',height:'320px', backgroundRepeat:'no-repeat',backgroundSize: 'contain', backgroundImage: 'url("https://storage.googleapis.com/ceramics/spinner.png")'}} />

                {/*<Gundam objectID={this.state.objectID} onClick={this.hideGundam}/>*/}
            </div>
        )
    }
};
