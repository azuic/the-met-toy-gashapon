import React from 'react';


const cardFrameUrl="https://storage.cloud.google.com/ceramics/gudamcard.png";

export default class Gundam extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            obj: toys.find
        }
    }

    render(){
        const visible = {display: this.state.showInfo? 'block': 'none'};
        return (
            <div
                className="InstructionCard"
                onClick={this.back}
                style={{...visible,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background: "rgba(0, 0, 0, 0.15)"
                }}
            >
                <div
                    className="CardContent"
                    style={{
                        position: "absolute",
                        display:"grid",
                        background: "#fff",
                        top: 25,
                        left: "10%",
                        right: "10%",
                        padding: 15,
                        border: "2px solid #444"
                    }}
                >
                    <table style={{width:'400px', zIndex:'3'}} >
                        <tbody>
                        <tr style={{height:'320px'}}>
                            <td className="ProfileImage"
                                style={{backgroundImage:`url(https://storage.googleapis.com/ceramics/toys/resize_crops/${this.state.objectInfo.objectID}.png)`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'}} />
                        </tr>
                        <tr  style={{height:'220px'}}>
                            <td>
                                <h2>
                                    {this.state.objectInfo.title}
                                </h2>
                                <h3>{this.state.objectInfo.objectName}</h3>
                                <header>{this.state.objectInfo.objectBeginDate} – {this.state.objectInfo.objectEndDate}</header>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div style={{width: '400px', height: '400px', zIndex:'4',backgroundRepeat:'no-repeat',backgroundSize: 'contain', backgroundImage:'url("https://storage.cloud.google.com/ceramics/gudamcard.png")'}}/>

                    <button type="button" onClick={this.back}>
                        X
                    </button>
                </div>
            </div>
        );}
}