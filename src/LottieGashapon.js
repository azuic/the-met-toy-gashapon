import React from 'react'
import Lottie from 'react-lottie'
import animationData from './gashapon'

export default class LottieGashapon extends React.Component{
    render(){
        const defaultOptions ={
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        const another_list = Array.from(Array(5),(x,i)=>i);
        return(
            <div className="LottieGashapon">
                {another_list.map(i=><Lottie key={i} options={defaultOptions} style={{top:`0px`}}/>)}
                {/*{another_list.map(i=><Lottie key={i} options={defaultOptions} style={{marginLeft:`200px`}}/>)}*/}
                {/*{another_list.map(i=><Lottie key={i} options={defaultOptions} style={{marginLeft:`400px`}}/>)}*/}
                {/*{another_list.map(i=><Lottie key={i} options={defaultOptions} style={{marginLeft:`600px`}}/>)}*/}
                {/*{another_list.map(i=><Lottie key={i} options={defaultOptions} style={{marginLeft:`800px`}}/>)}*/}



                {/*<Lottie options={defaultOptions} />*/}
                {/*<Lottie options={defaultOptions} />*/}
                {/*<Lottie options={defaultOptions} />*/}
                {/*<Lottie options={defaultOptions} />*/}
            </div>
        )
    }
}