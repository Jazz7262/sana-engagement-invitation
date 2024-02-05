import React, { useCallback } from "react";
import "../styles/Timeline.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import timelineParticlesConfig from "../ts-particles-config-files/timeline-particles-config";

function Timeline(props) {
    const isUrdu = props.isUrdu;

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <section id="timeline">
            <Particles
                id="timeline-ts-particles"
                init={particlesInit}
                options={timelineParticlesConfig}
            ></Particles>
            <div className="single-timeline">
                {isUrdu ? (
                    <h1 className="inshaallaah urdu ">انشآالله</h1>
                ) : (
                    <h1 className="inshaallaah">Inshaallaah ...</h1>
                )}
                <div
                    className="wrapper"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="content">
                        {isUrdu ? (
                            <>
                                <h1 className="urdu">منگنی کی تقریب</h1>
                                <p className="urdu">
                                    بروز اتوار بتایخ ٣٠ رجب المرجب ، ۱۴۴۵ ہجری
                                </p>
                                <p className="urdu">فروری 11 ، 2024 عیسوی </p>
                                <p className="urdu">
                                    بعد نمازِ ظہر ، بوقت ٢ بجے دن
                                </p>
                                <p className="urdu mb-4">بوقت ٢ بجے دن</p>

                                <h1 className="urdu">بمقام</h1>
                                <p className="urdu">انٹرنیشنل فنکشن ہال</p>
                                <p className="urdu">
                                    تیسری روڈ ، ایس،کے،ڈی، کالونی
                                </p>
                                <p className="urdu">ادونی </p>
                            </>
                        ) : (
                            <>
                                <h1>Engagement Ceremony</h1>
                                <p>
                                    On Sunday, 11<sup>th</sup> February, 2024,
                                    <br />
                                    30<sup>th</sup> Rajab-ul-Murajjab, 1445
                                    Hijri,
                                    <br />
                                    After Namaaz -e- Zohar,
                                    <br />
                                    Time: 02:00 PM.
                                </p>
                                <h2>Venue:</h2>
                                <p>
                                    International Function Hall,
                                    <br /> 3<sup>rd</sup> road, SKD Colony,
                                    <br /> Adoni.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>

        // <section id="timeline">
        //     <Particles
        //         id="timeline-ts-particles"
        //         init={particlesInit}
        //         options={timelineParticlesConfig}
        //     ></Particles>
        //     <div className="multi-timeline">
        //         <h1 className="inshaallaah">Inshaallaah ...</h1>
        //         <div className="wrapper">
        //             {/* shukrana included */}
        //             <>
        //                 <div className="row">
        //                     <div className="col-lg-6 left" data-aos="fade-down">
        //                         <h1>Shukrana</h1>
        //                         <p>
        //                             On Saturday, 04<sup>th</sup> November, 2023.
        //                             <br />
        //                             20<sup>th</sup> Rabi-ul-Aakhir, 1445 Hijri,
        //                             <br />
        //                             Time: 09:00 PM.
        //                         </p>

        //                         <h2>Venue:</h2>
        //                         <p>
        //                             KKB Function Hall,
        //                             <br /> NGO's Colony,
        //                             <br /> Adoni.
        //                         </p>
        //                     </div>
        //                     <div
        //                         className="col-lg-6 right"
        //                         data-aos="fade-down"
        //                     ></div>
        //                 </div>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     ></div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     >
        //                         <h1>Nikaah</h1>
        //                         <p>
        //                             On Sunday, 05<sup>th</sup> November, 2023,
        //                             <br />
        //                             21<sup>st</sup> Rabi-ul-Aakhir, 1445 Hijri,
        //                             <br /> Time: 12:45 PM.
        //                         </p>

        //                         {/* <h2>Venue:</h2>
        //                         <p>
        //                             Masjid -e- Shekhan,
        //                             <br /> Near Yemmiganur By-pass Road,
        //                             <br /> Tirumala Nagar,
        //                             <br /> Adoni.
        //                         </p>

        //                         <h2>Lunch Follows:</h2>
        //                         <p>
        //                             Roshan Garden,
        //                             <br /> Near Art's College,
        //                             <br /> Yemmiganur Road,
        //                             <br /> Tirumala Nagar,
        //                             <br /> Adoni.
        //                         </p> */}

        //                         <h2>Venue:</h2>
        //                         <p>
        //                             KKB Function Hall,
        //                             <br /> NGO's Colony,
        //                             <br /> Adoni.
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     >
        //                         <h1>Valima</h1>

        //                         <p>
        //                             On Monday, 06<sup>th</sup> November, 2023,
        //                             <br />
        //                             22<sup>nd</sup> Rabi-ul-Aakhir, 1445 Hijri,
        //                             <br />
        //                             Time: 02:00 PM.
        //                         </p>

        //                         <h2>Venue:</h2>
        //                         <p>
        //                             KKB Function Hall,
        //                             <br /> NGO's Colony,
        //                             <br /> Adoni.
        //                         </p>
        //                     </div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     ></div>
        //                 </div>
        //             </>
        // {/* shukrana excluded */}
        // {/* <>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     >
        //                         <h1>Nikaah</h1>
        //                         <p>
        //                             On Saturday, 24<sup>th</sup> November, 2023,
        //                             <br />
        //                             06<sup>th</sup> Rabi-ul-Aakhir, 1445 Hijri,
        //                             <br />
        //                             Time: 11:45 AM.
        //                         </p>

        //                         <h2>Venue:</h2>
        //                         <p>
        //                             St. Anthony Function Hall,
        //                             <br /> St. Joseph School Road,
        //                             <br /> Bellari.
        //                         </p>
        //                     </div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     ></div>
        //                 </div>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     ></div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     >
        //                         <h1>Valima</h1>
        //                         <p>
        //                             On Sunday, 25<sup>th</sup> November, 2023,
        //                             <br />
        //                             07<sup>th</sup> Rabi-ul-Aakhir, 1445 Hijri,
        //                             <br />
        //                             Time: 01:00 PM.
        //                         </p>
        //                         <h2>Venue:</h2>
        //                         <p>
        //                             Karnataka Function Hall,
        //                             <br /> Hospet Road,
        //                             <br /> Bellari.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </> */}
        //         </div>
        //     </div>
        // </section>
    );
}

export default Timeline;
