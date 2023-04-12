import React from "react"; 
import Carousel from "./Carousel";

const Home = (props) => {
    let panel = "h-2/6 flex place-content-around items-center bg-opacity-30 w-full";
    return(
        <div className="flex-col place-content-center">
            <div className={panel+" bg-coding"}>
                <p className="text-5xl text-ubuntu-grey-250 p-10">
                    <b className="text-ubuntu-orange">&lt;</b>
                    Html, CSS, JavaScript, React.js, PhP e MySQL
                    <b className="text-ubuntu-orange">/&gt;</b>
                </p>
                <img src="images/code.png" className="h-96 p-10"/>
            </div>
            <div className={panel+" bg-ubuntu-purple"}>
                <img src="images/code.png" className="h-96 p-10"/>
                <p className="text-5xl text-ubuntu-grey-250 p-10">
                    <b className="text-ubuntu-orange">&lt;div&gt;</b>
                    Com foco em desenvolvimento Web, desenvolvimento de sistemas e banco de dados
                    <b className="text-ubuntu-orange">&lt;/div&gt;</b>
                    </p>
            </div>
            <Carousel jobs={props.jobs}/>
        </div>
    );
};

export default Home;