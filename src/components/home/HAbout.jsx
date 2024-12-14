import Heading from "../common/heading/Heading.jsx";
import {coursesCard} from "../../dummydata.jsx";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import OnlineCourses from "../allCourses/OnlineCourses.jsx";

function HAbout() {
    return (
        <>
            <section className='home-about'>
                <div className="container">
                    <Heading title='Our Courses' subTitle='Explore Our Popular Online Courses'/>
                    <div className='coursesCard'>
                        <div className="container grid2">
                            {coursesCard.slice(0, 3).map((val, i) => (
                                <div className='items' key={i}>
                                    <div className="content flex">
                                        <div className="left">
                                            <div className="img">
                                                <img src={val.cover} alt=""/>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h1>{val.coursesName}</h1>
                                            <div className="rate">
                                                <StarOutlinedIcon/>
                                                <StarOutlinedIcon/>
                                                <StarOutlinedIcon/>
                                                <StarOutlinedIcon/>
                                                <StarOutlinedIcon/>
                                                <label>(5.0)</label>
                                            </div>
                                            <div className="details">
                                                {val.courTeacher.map((details, j) => (
                                                    <div key={j}>
                                                        <div className="box">
                                                            <div className="dimg">
                                                                <img src={details.dcover} alt=""/>
                                                            </div>
                                                            <div className="para">
                                                                <h4>{details.name}</h4>
                                                            </div>
                                                        </div>
                                                        <span>{details.totalTime}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <h3>
                                            {val.priceAll} / {val.pricePer}
                                        </h3>
                                    </div>
                                    <button className="outline-btn">ENROLL NOW !</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <OnlineCourses />
        </>
    );
}

export default HAbout;