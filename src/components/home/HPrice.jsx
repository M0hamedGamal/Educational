import React from 'react';
import Heading from "../common/heading/Heading.jsx";
import {blog} from "../../dummydata.jsx";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import PriceCard from "../pricing/PriceCard.jsx";

function HPrice(props) {
    return (
        <>
            <Heading title='Our Pricing' subTitle='Pricing & Packages'/>
            <section className='hprice padding'>
                <div className="price container grid">
                    <PriceCard />
                </div>
            </section>
        </>
    );
}

export default HPrice;
