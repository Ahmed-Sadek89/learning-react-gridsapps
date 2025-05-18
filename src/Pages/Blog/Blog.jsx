import { useNavigate, useParams } from 'react-router-dom';
import BlogContent from '../../Components/Pages/Blog/BlogContent';
import './style.css';
import { useEffect, useState } from 'react';
import { blogs } from '../../mock/mock';

const Blog = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);
    
    useEffect(() => {
        if(!isNaN(params.blog_id) && blogs[Number(params.blog_id)-1]) {
            setBlog(blogs[Number(params.blog_id)-1])
        } else {
            navigate("/")
        }
    } , [params.blog_id])

    
    return (
        <section className="blog-details">
            <div className="container">
                <h1 className="blog-title">{blog?.title}</h1>
                <div className="blog-meta">
                    <p>By <strong>{blog?.auther}</strong> | Published on <strong>{blog?.created_at}</strong></p>
                </div>
                <img src={blog?.image} alt={blog?.alt} className="blog-cover"
                    style={{ width: "50px", height: "50px" }} />
                <BlogContent />
            </div>
        </section>
    )
}

export default Blog