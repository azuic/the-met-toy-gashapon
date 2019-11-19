import React from 'react';
import './App.css';
import LottieGashapon from "./LottieGashapon";
import Background from "./Background";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import Gallery from "./Gallery";
import InstructionCard from "./InstructionCard"

function Home() {
    // const another_list = Array.from(Array(5),(x,i)=>i);
    return(
        <div>
            <Background />
            <div className="title">
                <svg className="titleSVG" viewBox="0 0 300 30">
                    <symbol id="s-text">
                        <text textAnchor="middle"
                              x="50%" y="50%" dy=".35em">
                            The MET Toy Gashapon
                        </text>
                    </symbol>
                    <use xlinkHref="#s-text" className="text"/>
                    <use xlinkHref="#s-text" className="text"/>
                    <use xlinkHref="#s-text" className="text"/>
                    <use xlinkHref="#s-text" className="text"/>
                    <use xlinkHref="#s-text" className="text"/>
                </svg>
            </div>
            <table><tbody><tr>
                <td style={{width:'200px'}}><LottieGashapon /></td>
                <td style={{width:'200px'}}><LottieGashapon /></td>
                <td style={{width:'200px'}}><LottieGashapon /></td>
                <td style={{width:'200px'}}><LottieGashapon /></td>
                <td style={{width:'200px'}}><LottieGashapon /></td>
                <td style={{width:'200px'}}><LottieGashapon /></td>
                <td style={{width:'200px'}}><LottieGashapon /></td>
            </tr></tbody></table>
            <LottieGashapon />
            <Link to="/gallery"><a className="btn btn-2 btn-3" href="#">GO</a></Link>
        </div>
    )
}
function ModalSwitch() {
    let location = useLocation();

    // This piece of state is set when one of the
    // gallery links is clicked. The `background` state
    // is the location that we were at when one of
    // the gallery links was clicked. If it's there,
    // use it as the location for the <Switch> so
    // we show the gallery in the background, behind
    // the modal.
    let background = location.state && location.state.background;

    return (
        <div>
            <Switch location={background || location}>
                <Route exact path="/" children={<Home />} />
                <Route path="/gallery" children={<Gallery />} />
                {/* <Route path="/img/:id" children={<ImageView />} /> */}
            </Switch>

            {/* Show the modal when a background page is set */}
            {background && <Route path="/img/:objectID" children={<InstructionCard />} />}
        </div>
    );
}



function App() {
    // const another_list = Array.from(Array(5),(x,i)=>i);

    return (
        <Router>
            <ModalSwitch />
        </Router>
  );
}

export default App;
