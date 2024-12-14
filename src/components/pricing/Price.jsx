import Back from "../common/back/Back.jsx";
import PriceCard from "./PriceCard.jsx";
import './price.css'
import FAQ from "./FAQ.jsx";

function Price() {
    return (
        <>
            <Back title='Choose The Right Plan'/>
            <section className="price padding">
                <div className="container grid">
                    <PriceCard/>
                </div>
            </section>
            <FAQ/>
        </>
    );
}

export default Price;