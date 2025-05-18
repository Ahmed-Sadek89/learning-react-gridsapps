import './style.css'

const ServiceGallary = () => {
    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                {/* {
                    [1, 2, 3].map((key, index) => {
                        const uniqueKey = `image number ${key}`
                        return (
                            <img key={index} src="https://placehold.co/400" alt={`Gallery Image ${uniqueKey}`} />
                        )
                    })
                } */}
                {
                    [1, 2, 3].map((key, index) => (
                        <img key={index} src="https://placehold.co/400" alt={`Gallery Image ${key}`} />
                    ))
                }

            </div>
        </div>
    )
}

export default ServiceGallary