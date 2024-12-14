import React from 'react';
import {blog} from "../../dummydata.jsx";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

function BlogCard(props) {
    return (
        <>
            {blog.map((val, i) => (
                <div className='items shadow' key={i}>
                    <div className="img">
                        <img src={val.cover} alt=""/>
                    </div>
                    <div className="text">
                        <div className="admin flexsb">
                            <span>
                                 <PersonOutlinedIcon/>
                                <label htmlFor="">{val.type}</label>
                            </span>
                            <span>
                                 <CalendarMonthOutlinedIcon/>
                                <label htmlFor="">{val.date}</label>
                            </span>
                            <span>
                                 <CommentOutlinedIcon/>
                                <label htmlFor="">{val.com}</label>
                            </span>
                        </div>
                        <h1>{val.title}</h1>
                        <p>{val.desc}</p>
                    </div>

                </div>
            ))}
        </>
    );
}

export default BlogCard;