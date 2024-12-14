import Heading from "../common/heading/Heading.jsx";
import {homeAbout} from "../../dummydata.jsx";
import AWrapper from "./AWrapper.jsx";
import './about.css'

function AboutCard() {
    return (
        <>
        <secton className='about-home'>
            <div className="container flexsb">
                <div className="left row">
                        <img src="./images/about.webp" alt="about-img"/>
                </div>
                <div className="right row">
                    <Heading title='LEARN ANYTHING' subTitle='Benefits About Online Learning Expertise'/>
                    <div className="items">
                        {homeAbout.map((item, i) => (
                            <div className='item flexsb' key={i}>
                                <div className="img">
                                    <img src={item.cover} alt="about-icon"/>
                                </div>
                                <div className="text">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </secton>
            <AWrapper />
        </>
    );
}

export default AboutCard;
