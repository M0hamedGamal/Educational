import SendIcon from '@mui/icons-material/Send';
import './footer.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import {blog} from "../../../dummydata.jsx";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    return (
        <>
            <section className="newsletter">
                <div className="container flexsb">
                    <div className="left row">
                        <h1>Newsletter -Stay tune and get the latest update</h1>
                        <span>far far away, behind the word mountains</span>
                    </div>
                    <div className="right row">
                        <input type="text" placeholder='Enter email address'/>
                        <SendIcon/>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADEMIA</h1>
                        <span>online education & learning</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequatur
                            cum delectus dolor ea earum.</p>
                        <FacebookIcon className='icon'/>
                        <InstagramIcon className='icon'/>
                        <XIcon className='icon'/>
                    </div>
                    <div className="box link">
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="box link">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Recent Post</h3>
                        {blog.slice(0, 3).map((val, i) => (
                            <div className='items flexsb' key={i}>
                                <div className="img">
                                    <img src={val.cover} alt=""/>
                                </div>
                                <div className="text">
                                    <span>
                                         <PersonOutlinedIcon/>
                                         <label htmlFor="">{val.type}</label>
                                    </span>
                                    <span>
                                         <CalendarMonthOutlinedIcon/>
                                         <label htmlFor="">{val.date}</label>
                                    </span>
                                    <h4>{val.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="box last">
                        <h3>Have a Question?</h3>
                        <ul>
                            <li>
                                <MapIcon/>
                                27 First ST. October, EGYPT
                            </li>
                            <li>
                                <PhoneIcon/>
                                +123 456 789
                            </li>
                            <li>
                                <SendIcon/>
                                example@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="legal">
                <p>Copyright @2024 All rights reserved | This template is made with <FavoriteIcon/> By Mohamed Gamal
                </p>
            </div>
        </>
    );
}

export default Footer;