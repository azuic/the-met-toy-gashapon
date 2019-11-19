import React, {useRef, useState, useEffect}  from 'react';
import {Box, Illustration, useRender} from "react-zdog";
import {a, useSpring} from "react-spring/zdog";


const winH = window.innerHeight;
const winW = window.innerWidth;

const TAU = Math.PI*2;
const N_ROWS=10;
const list = Array.from(Array(150),(x,i)=>i);

function EachBox(props){
    const [up, setUp] = useState(true)
    useEffect(() => void setInterval(() => setUp(previous => !previous), 450), []);
    // Turn static values into animated values
    const { rotation } = useSpring({ rotation: up ? 0 : Math.PI });
    // useRender allows us to hook into the render-loop
    const ref = useRef();
    let t = 0;
    useRender(() => {
        ref.current.rotate.y = Math.cos((t += Math.random()) / TAU);
        ref.current.rotate.x = Math.cos((t+=Math.random()) / TAU );
    });
    return (
        <a.Anchor rotate={rotation.interpolate(r => ({ x: TAU / 18 + -r / 4 }))}>
            <Box ref={ref} translate={{ x: props.xPos, y: props.yPos }} rotate={rotation.interpolate(r => ({ x: TAU / 18 + -r / 4 }))} width={30} height={30} depth={30} stroke={false} color={'#F9744B'} leftFace={'#F78700'} rightFace={'#F7D700'} topFace={'#6565EA'} bottomFace={'#6565EA'}/>
        </a.Anchor>
    )
};

export default function Background(){
    return(
        <Illustration element="canvas" zoom={1} className="bg" style={{position:'absolute', height:winH, width:winW}}>
            {list.map(i=><EachBox key={i} xPos={Math.floor(i/N_ROWS)*100-winW/2+80} yPos={i%N_ROWS*100-winH/2-10}/>)}
        </Illustration>
    )
};