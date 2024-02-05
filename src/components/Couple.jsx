import React, { useCallback } from "react";
import "../styles/Couple.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import coupleParticlesConfig from "../ts-particles-config-files/couple-particles-config";

function Couple(props) {
    const isUrdu = props.isUrdu;

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <section id="couple">
            <div className="couple-wrapper">
                <Particles
                    id="couple-ts-particles"
                    init={particlesInit}
                    options={coupleParticlesConfig}
                ></Particles>
                {isUrdu ? (
                    <h1 className="title-quote urdu">
                        خوش قسمت جوڑے کی منگنی ہو رہی ہے 
                    </h1>
                ) : (
                    <h1 className="title-quote">
                        Happy Couple Going To Be Engaged
                    </h1>
                )}
                <div className="row">
                    <div className="col-lg-5" data-aos="fade-up">
                        <div
                            id="carouselIndicators"
                            className="carousel slide"
                            data-interval="2000"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="1"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="2"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="3"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="4"
                                ></li>
                                {/* <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="5"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="6"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="7"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="8"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="9"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="10"
                                ></li> */}
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/ziya_1.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/ziya_2.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/ziya_3.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/ziya_4.png"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/ziya_5.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselIndicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselIndicators"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <img
                                className="flower groom-flower"
                                src="../assets/images/golden-rose.png"
                                alt="flower"
                            />
                        </div>
                        <div className="info groom-info">
                            {isUrdu ? (
                                <>
                                    <h3 className="urdu">
                                        <sub>B.Tech-CSE</sub> ،{" "}
                                        <strong>ٹی ۪ محمد ضیاءالدین </strong>
                                    </h3>

                                    <p className="urdu mt-2 mt-lg-3">
                                        پیشہ: ٹرای یانز میں اینگولر ڈویلپر
                                    </p>

                                    <p className="urdu">
                                        پوتا جناب{" "}
                                        <strong>ٹی ۪ غوث محی الدین صاحب</strong>{" "}
                                        مرحوم
                                    </p>

                                    <p className="urdu">
                                        نواسا جناب{" "}
                                        <strong>بی ۪ بشیر احمد صاحب</strong>{" "}
                                        مرحوم
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h3>
                                        T. Mohammed Ziauddin{" "}
                                        <sub>B.Tech - CSE,</sub>
                                    </h3>
                                    <p className="urdu mt-2 mt-lg-3">
                                        Profession:{" "}
                                        <strong>Angular Developer,</strong> at
                                        Trianz.
                                    </p>

                                    {/* <p className="mt-1 mt-lg-2"> at Alur.</p> */}
                                    {/* <p className="mt-2 mt-lg-3">
                                S/O Janab{" "}
                                <strong>Shabeer Ahmed Sahab(Late)</strong>
                            </p> */}
                                    <p className="mt-1 mt-lg-2">
                                        Paternal Grand S/O Janab{" "}
                                        <strong>
                                            T. Ghouse Mohiyuddin Sahab(Late),
                                        </strong>{" "}
                                    </p>

                                    <p className="mt-1 mt-lg-2">
                                        Maternal Grand S/O Janab{" "}
                                        <strong>
                                            B. Basheer Ahmed Sahab(Late),
                                        </strong>{" "}
                                    </p>

                                    {/* <p className="mt-1 mt-lg-2">
                                S/O Janab <strong>B. Khadar Sahab,</strong>{" "}
                            </p>
                            <p className="mt-1 mt-lg-2">APSRTC, Adoni.</p>
                            <p className="mt-1 mt-lg-2">
                                Residence at RTC Colony, Adoni.
                            </p> */}
                                </>
                            )}
                        </div>
                    </div>
                    <div
                        className="col-lg-2"
                        data-aos="zoom-out "
                        data-aos-delay="300"
                    >
                        <img
                            className=" heart-mid"
                            src="../assets/images/heart.png"
                            alt="heart_img"
                        />
                    </div>
                    <div className="col-lg-5" data-aos="fade-up">
                        <div
                            id="bride-carousel-indicators"
                            className="carousel slide"
                            data-interval="2000"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="1"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="2"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="3"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="4"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="5"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="6"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="7"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="8"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="9"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="10"
                                ></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride"
                                            src="../assets/images/sana_1.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_2.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride"
                                            src="../assets/images/sana_3.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_4.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_5.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_6.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_7.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_8.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_9.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_10.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img bride "
                                            src="../assets/images/sana_11.jpg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#bride-carousel-indicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#bride-carousel-indicators"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <img
                                className="flower bride-flower"
                                src="../assets/images/golden-rose.png"
                                alt="flower"
                            />
                        </div>
                        <div className="info bride-info">
                            {isUrdu ? (
                                <>
                                    <h3 className="urdu">
                                        <sub>B.Com., B.Sc.</sub> ،{" "}
                                        <strong>یم ۪ ثنا سلطانہ </strong>
                                    </h3>

                                    {/* <p className="urdu mt-2 mt-lg-3">
                                        پیشہ: ٹرای یانز میں اینگولر ڈویلپر
                                    </p> */}

                                    <p className="urdu">
                                        دختر نیک جناب{" "}
                                        <strong>یم ۪یس ۪ ولی صاحب</strong>{" "}
                                    </p>

                                    <p className="urdu">
                                        پوتی جناب{" "}
                                        <strong>
                                            الحاج یم ۪ عبدل عزیز صاحب
                                        </strong>{" "}
                                        مرحوم
                                    </p>

                                    <p className="urdu">
                                        نواسی جناب{" "}
                                        <strong>سی ۪ احمد باشاہ صاحب</strong>{" "}
                                        مرحوم
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h3>
                                        Dukhtar -e- Nek Akhtar,
                                        {/* <sub>(Moulvi),</sub> */}
                                    </h3>
                                    {/* <p className="mt-2 mt-lg-3">
                                Professsion: <strong>Software Engineer,</strong>
                            </p> */}
                                    <p className="mt-2 mt-lg-3">
                                        D/O Janab{" "}
                                        <strong>D/o M.S. Vali Sahab</strong>
                                    </p>
                                    <p className="mt-1 mt-lg-2">
                                        Paternal Grand D/O Janab{" "}
                                        <strong>
                                            Al-Haaj M. Abdul Azeez Sahab(Late),
                                        </strong>
                                    </p>
                                    <p className="mt-1 mt-lg-2">
                                        Maternal Grand D/O Janab{" "}
                                        <strong>
                                            C. Ahmed Basha Sahab(Late).
                                        </strong>
                                    </p>
                                    <p className="mt-1 mt-lg-2">
                                        Residence: #21/224/27, Near Navya
                                        Hospital,
                                    </p>
                                    <p className="mt-1 mt-lg-2">
                                        Zero Road, SKD Colony,
                                    </p>
                                    <p className="mt-1 mt-lg-2">Adoni.</p>
                                    {/* <p className="mt-1 mt-lg-2">Bellari.</p> */}
                                    {/* <p className="mt-1 mt-lg-2">
                                D/O <strong>Shaikh Nazeer Ahmed.</strong>
                            </p> */}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
