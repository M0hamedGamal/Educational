import Heading from "../common/heading/Heading.jsx";
import {online} from "../../dummydata.jsx";

function OnlineCourses() {
    return (
        <section className='online'>
            <div className="container">
                <Heading title={'COURSES'} subTitle={'Browse Our Online Courses'} />
                <div className="content grid3">
                    {online.map((val, i) => (
                        <div className='box' key={i}>
                            <div className="img">
                                <img src={val.cover} alt=""/>
                                <img src={val.hoverCover} alt="" className='shadow'/>
                            </div>
                            <h1>{val.courseName}</h1>
                            <span>{val.course}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OnlineCourses;