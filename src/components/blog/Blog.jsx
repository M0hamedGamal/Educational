import React from 'react';
import Back from "../common/back/Back.jsx";
import BlogCard from "./BlogCard.jsx";
import './blog.css'

function Blog(props) {
    return (
        <>
        <Back title='Blog Posts' />
            <section className="blog padding">
                <div className="container grid2">
                    <BlogCard/>
                </div>
            </section>
        </>
    );
}

export default Blog;