import {testimonal} from "../../dummydata.jsx";
import Heading from "../common/heading/Heading.jsx";
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import './test.css'

function Test() {
    return (
        <>
            <section className='testimonal padding'>
                <div className="container">
                    <Heading title='Testimonal' subTitle='Our Successful Students'/>
                    <div className="content grid2">
                        {testimonal.map((val, i) => (
                            <div key={i} className='items shadow'>
                                <div className="box flex">
                                    <div className="img">
                                        <img src={val.cover} alt=""/>
                                        <FormatQuoteOutlinedIcon className='icon' />
                                    </div>
                                    <div className="name">
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                    </div>
                                </div>
                                <p>{val.desc}</p>

                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}

export default Test;