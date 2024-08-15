import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
    return (

        <section className="section" id="tours">

            <Title title="featured" subTitle="tours" />

            <div className="section-center featured-center">

                {
                    tours.map((data) => {
                        return (
                            <article key={data.id} className="tour-card">
                                <div className="tour-img-container">
                                    <img src={data.image} className="tour-img" alt="" />
                                    <p className="tour-date">{data.date}</p>
                                </div>
                                <div className="tour-info">
                                    <div className="tour-title">
                                        <h4>{data.title}</h4>
                                    </div>
                                    <p>{data.info}</p>
                                    <div className="tour-footer">
                                        <p>
                                            <span><i className="fas fa-map"></i></span> {data.location}
                                        </p>
                                        <p>{data.duration} days</p>
                                        <p>from ${data.cost}</p>
                                    </div>
                                </div>
                            </article>
                        );
                    })
                }

            </div>
        </section>

    );
}

export default Tours;