import Heading from "../common/heading/Heading.jsx";
import {faq} from "../../dummydata.jsx";
import {useState} from "react";

function FAQ() {
    const [click, setClick] = useState(false)
    const toggle = (index)  => {
        if (click === index)
           return  setClick(false)
        setClick(index)
    }
    return (
        <>
        <Heading title='FAQs' subTitle='Frequesntly Ask Questions' />
            <section className="faq">
                <div className="container">
                {faq.map((val, i) => (
                    <div className='box' key={i}>
                        <button className='accordion' onClick={() => toggle(i)}>
                            <h2>{val.title}</h2>
                        </button>
                        {click === i ? (
                            <div className='text'>
                                <p>{val.desc}</p>
                            </div>

                        ): null}
                    </div>
                ))}
                </div>
            </section>
        </>
    );
}

export default FAQ;