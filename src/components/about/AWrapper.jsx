import {awrapper} from "../../dummydata.jsx";

function AWrapper() {
    return (
        <section className='awrapper'>
            <div className="container grid">
                {awrapper.map((item, i) => (
                    <div className='box flex' key={i}>
                        <div className="img">
                            <img src={item.cover} alt="awrapper-img"/>
                        </div>
                        <div className="text">
                            <h1>{item.data}</h1>
                            <h3>{item.title}</h3>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}

export default AWrapper;