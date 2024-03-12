import Slider from "react-slick";
import "./saying.css"
import { FaStar } from "react-icons/fa";
import mask from "../../assets/Mask.png"
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="next" onClick={onClick}
        ><IoIosArrowDropleftCircle className="say_icon" /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="previous" onClick={onClick}
        ><IoIosArrowDroprightCircle className="say_icon" /></div>
    );
}

const Saying = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section id="saying">
            <Container>
                <Row>
                    <Col lg={6} xs={12} sm={12}>
                        <Slider {...settings}>
                            <div className="sl_img">
                                <img src={mask} alt="" />
                            </div>
                            <div className="sl_img">
                                <img src={mask} alt="" />
                            </div>
                            <div className="sl_img">
                                <img src={mask} alt="" />
                            </div>

                        </Slider>
                    </Col>
                    <Col lg={6} xs={12} sm={12} className="say_text">
                        <a href="#"><svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31 0.26625L30.2177 5.88921C28.653 5.75768 27.3817 6.02075 26.4038 6.6784C25.4259 7.30318 24.7413 8.2239 24.3502 9.44056C23.9916 10.6243 23.9264 12.0054 24.1546 13.5838H31V27H17.7003V13.5838C17.7003 8.84867 18.7923 5.26444 20.9763 2.83111C23.1604 0.3649 26.5016 -0.490055 31 0.26625ZM13.2997 0.26625L12.5173 5.88921C10.9527 5.75768 9.68139 6.02075 8.70347 6.6784C7.72555 7.30318 7.04101 8.2239 6.64984 9.44056C6.29127 10.6243 6.22608 12.0054 6.45426 13.5838H13.2997V27H0V13.5838C0 8.84867 1.09201 5.26444 3.27603 2.83111C5.46004 0.3649 8.80126 -0.490055 13.2997 0.26625Z" fill="#FF7F5C" />
                        </svg></a>
                        <h2>Save Time Managing Social
                            Media For Your Business</h2>
                        <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                            Believing neglected so so allowance existence departure in. In design active temper be uneasy.
                        </p>
                        <div className="star">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h5>Angela Taylor</h5>
                        <h6>CEO SAMSUNG</h6>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Saying