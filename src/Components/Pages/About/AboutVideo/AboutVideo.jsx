import './style.css'

const AboutVideo = () => {
    return (
        <section className="video-section">
            <div className="text-center container">
                <h2>Get to Know Us</h2>
                <video controls>
                    <source src="company-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

export default AboutVideo