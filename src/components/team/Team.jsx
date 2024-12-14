import Back from "../common/back/Back.jsx";
import TeamCard from "./TeamCard.jsx";
import './team.css'
function Team() {
    return (
        <>
            <Back title='Team'/>
            <section className="team padding">
                <div className="container grid">
                    <TeamCard/>
                </div>
            </section>
        </>
    );
}

export default Team;