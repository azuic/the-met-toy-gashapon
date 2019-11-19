import React from "react";
import { Sprite, withApp } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import PropTypes from "prop-types";

import {gsap} from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";
PixiPlugin.registerPIXI(PIXI);

const ball = "https://storage.googleapis.com/ceramics/ball.png";
const centerAnchor = new PIXI.Point(0.5, 0.5);
const height = window.innerHeight;
const width = window.innerWidth;

function GachaponBall(props) {
    return (
        <Sprite
            anchor={centerAnchor}
            texture={PIXI.Texture.from(ball)}
            {...props}
            height={50}
            width={50}
        />
    );
}


// class GachaponBall extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             value:0
//         }
//         this.counter=0
//     }
//
//     componentDidMount() {
//         this.setState({ value: this.props.from })
//         this.props.app.ticker.add(this.tick)
//     }
//
//     componentWillUnmount() {
//         this.props.app.ticker.remove(this.tick)
//     }
//
//     tick = (delta) => {
//         const speed = Math.random()*2;
//
//         this.counter += speed * delta
//         const value =  1 / 2 - Math.cos(this.counter)  / 2
//
//         this.setState({ value})
//     }
//
//     render(){
//         return(
//                 <Ball {...this.props} x={Math.floor(Math.random()*width)} y={Math.floor(Math.random()*height)}/>
//         )
//     }
// }
GachaponBall.contextTypes = {
    app: PropTypes.object
};
export default withApp(GachaponBall);

// +this.state.value + Math.sin(this.counter/2)
// +this.state.value + Math.cos(this.counter/2)