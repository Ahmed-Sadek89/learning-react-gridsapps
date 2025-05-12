import './style.css'
const Blogs = () => {
    return (
        <section className="blogs">
            <div className="container">
                <h2 className="section-title">Latest Blogs</h2>
                <div className="blogs-grid">
                    <div className="blog-card">
                        <img src="https://placehold.co/400" alt="Blog 1" />
                        <div className="blog-content">
                            <h3>Blog Title 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula vitae ipsum volutpat sollicitudin.</p>
                            <a href="blog-details.html" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src="https://placehold.co/400" alt="Blog 2" />
                        <div className="blog-content">
                            <h3>Blog Title 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula vitae ipsum volutpat sollicitudin.</p>
                            <a href="blog-details.html" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src="https://placehold.co/400" alt="Blog 3" />
                        <div className="blog-content">
                            <h3>Blog Title 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula vitae ipsum volutpat sollicitudin.</p>
                            <a href="blog-details.html" className="btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs;