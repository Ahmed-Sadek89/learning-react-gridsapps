import { blogs } from '../../../../mock/mock';
import Blog from '../Blog/Blog';
import './style.css'
const Blogs = () => {
    return (
        <section className="blogs">
            <div className="container">
                <h2 className="section-title">Latest Blogs</h2>
                <div className="blogs-grid">
                    {
                        blogs.map((blog, index) => {
                            return (
                                <Blog
                                    key={index}
                                    image={blog.image}
                                    alt={blog.alt}
                                    title={blog.title}
                                    description={blog.description}
                                    href={blog.href}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blogs;