import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Heading from "../../common/heading/Heading.jsx";
import './hero.css'

function Hero() {
    return (
        <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Heading title='WELCOME TO ACADAEMIA' subTitle='Best Online Education' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem commodi consectetur
                        consequuntur delectus dolores ducimus eligendi et fugiat laboriosam neque odit officiis pariatur
                        possimus praesentium recusandae saepe sequi voluptate.</p>
                    <div className="button">
                        <button className='primary-btn'>GET STARTED NOW <ArrowRightAltOutlinedIcon className=''/>
                        </button>
                        <button>VIEW COURSE <ArrowRightAltOutlinedIcon className=''/></button>
                    </div>
                </div>
            </div>
        </section>
            <div className="margin" />
        </>
    );
}

export default Hero;