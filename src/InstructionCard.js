import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
// import {useHistory, useParams} from "react-router";
// import React from "react";
import {toys} from './toys';

export default class InstructionCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // objectInfo: toys.find(obj=>obj.objectID===this.props.match.params.objectID),
            objectInfo: toys.find(obj=>obj.objectID===this.props.objectID),
            showInfo: false
        }

    }
    componentDidUpdate(prevProps) {
        console.log(prevProps.showModal,'')
        if(prevProps.showModal !== this.props.showModal){
            this.setState({showInfo: !!this.props.showModal}) ;
        }
    }

    // if (!image) return null;

    back = (e) => {
        e.stopPropagation();
        this.props.history.goBack();
    };
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
                width: '400px',
                height: '540px'
            }}
        >
            <div
                className="CardContent"
                style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    width: '400px',
                    height: '540px'
                }}
            >
                <table style={{width:'400px', zIndex:'3', top:0}} >
                    <tbody>
                    <tr style={{height:'280px'}}>
                        <td className="ProfileImage"
                            style={{backgroundImage:`url(https://storage.googleapis.com/ceramics/toys/resize_crops/${this.state.objectInfo.objectID}.png)`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'}} />
                    </tr>
                    <tr  style={{height:'220px'}}>
                        <td style={{paddingLeft: '50px',paddingRight:'50px'}}>
                            <h3>
                                {this.state.objectInfo.title}
                            </h3>
                            <h4>{this.state.objectInfo.objectName}</h4>
                            <header>{this.state.objectInfo.objectBeginDate} – {this.state.objectInfo.objectEndDate}</header>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div style={{position:'absolute',top:0, width: '400px', height: '540px',zIndex:'4',backgroundRepeat:'no-repeat',backgroundSize: 'contain', backgroundImage:'url("https://storage.cloud.google.com/ceramics/gudamcard.png")'}}/>

                <button type="button" style={{position:'absolute', top:17, right:50, zIndex:'5', width:'20px',height:'20px', borderStyle: 'solid', borderColor:'F7D700',borderRadius:'5px', backgroundColor:'#F7D700', color: '#fff', outline: 'none', justify:'center'}} onClick={this.back}>X</button>
            </div>
        </div>
    );}
}