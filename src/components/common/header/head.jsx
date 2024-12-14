import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Head() {
    return (
        <section className='head'>
            <div className="container flexsb">
                <div className="logo">
                    <h1>ACADEMIA</h1>
                    <span>ONLINE EDUCATION & LEARNING</span>
                </div>
                <div className="social">
                    <FacebookIcon className='icon' />
                    <InstagramIcon className='icon' />
                    <XIcon className='icon' />
                    <YouTubeIcon className='icon' />
                </div>
            </div>
        </section>
    );
}

export default Head;