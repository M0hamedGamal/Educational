import Back from "../common/back/Back.jsx";
import CoursesCard from "./CoursesCard.jsx";
import OnlineCourses from "./OnlineCourses.jsx";

function CoursesHome() {
    return (
        <>
            <Back title='Explore Courses'/>
            <CoursesCard/>
            <OnlineCourses />
        </>
    );
}

export default CoursesHome;