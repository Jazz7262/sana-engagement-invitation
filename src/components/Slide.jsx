import React from "react";
import "../styles/Slide.css";

function Slide(props) {
    const isUrdu = props.isUrdu;

    return (
        <section id="slide">
            <div className="slide-wrapper">
                <div className="slide-content">
                    {/* <div
                        className="img-container"
                        data-aos="zoom-out"
                        data-aos-offset="300"
                    >
                        <img alt="big_wheel" src="./assets/images/wheel.png" />
                    </div> */}
                    <div
                        className="text-content"
                        data-aos="fade-in"
                        data-aos-offset="300"
                        data-aos-delay="50"
                    >
                        {isUrdu ? (
                            <>
                                <h3 className="urdu">
                                    ہم اپنے بیٹے کی منگنی کی کر رہے ہیں
                                </h3>
                                <h1 className="urdu">ہماری تاریخ یاد رکھیں</h1>
                                <p className="urdu"> فروری 11، 2024۔</p>
                            </>
                        ) : (
                            <>
                                <h4>WE ARE ARRANGING OUR SON'S ENAGAGEMENT</h4>
                                <h1>Save Our Date</h1>
                                <p>
                                    11<sup>th</sup> February, 2024
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <img
                    className="mandal top-1"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
                <img
                    className="mandal top-2"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
                <img
                    className="mandal top-3"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
                <img
                    className="mandal top-4"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
                <img
                    className="mandal top-5"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
                <img
                    className="mandal bottom-1"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
                <img
                    className="mandal bottom-2"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
                <img
                    className="mandal bottom-3"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />

                <img
                    className="mandal bottom-4"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
                <img
                    className="mandal bottom-5"
                    src="../assets/images/golden-mandal.png"
                    alt="Wheel"
                />
            </div>
        </section>
    );
}

export default Slide;
