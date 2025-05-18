import { blogs } from '../../../mock/mock';
import CustomLink from '../../ui/CustomLink/CustomLink';
import './style.css';

const Blogs = () => {
    return (
        <div className="blogs-grid">

            {
                blogs.map((blog, index) => (
                    <div className="blog-card" key={index}>
                        <img src={blog.image} alt={blog.alt} />
                        <div className="blog-content">
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>
                            <CustomLink href={blog.link} className='btn' title={"Read More"} />
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Blogs