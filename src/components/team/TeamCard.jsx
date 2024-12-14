import {team} from "../../dummydata.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

function TeamCard() {
    return (
        <>
            {team.map((val, i) => (
                <div className='items shadow' key={i}>
                    <div className="img">
                        <img src={val.cover} alt=""/>
                        <div className="overlay">
                            <FacebookIcon className='icon'/>
                            <InstagramIcon className='icon'/>
                            <XIcon className='icon'/>
                        </div>
                    </div>
                    <div className="details">
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TeamCard;
