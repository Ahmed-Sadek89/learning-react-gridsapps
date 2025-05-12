import { about } from '../../../../mock/mock';
import SingleAbout from '../SingleAbout/SingleAbout';
import './style.css';

const AboutContent = () => {
    return (
        <section className="about-content">
            <div className="container">
                {
                    about.map((singleAbout, index) => {
                        return (
                            <SingleAbout
                                key={index}
                                title={singleAbout.title}
                                description={singleAbout.description}
                                className={singleAbout.className}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default AboutContent