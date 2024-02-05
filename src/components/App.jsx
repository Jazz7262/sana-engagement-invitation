import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Header from "./Header";
import Slide from "./Slide";
import BackToTopBtn from "./BackToTopBtn";
import Couple from "./Couple";
import InvitationQuote from "./InvitationQuote";
// import BabiesQuote from "./BabiesQuote";
import Timeline from "./Timeline";
import CountDown from "./CountDown";
import Compliments from "./Compliments";
import InviteNote from "./InviteNote";
// import DeveloperInfo from "./DeveloperInfo";
import Audio from "./Audio";
import CustomModel from "./CustomModel";
import Logo from "./Logo";

import $ from "jquery";
import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/App.css";

function App() {
    useEffect(() => {
        $(document).on("scroll", function () {
            if (window.scrollY > 50) {
                $(".navbar").addClass("nav-bg");
            } else {
                $(".navbar").removeClass("nav-bg");
            }
        });

        $(window).blur(() => {
            let audio = document.getElementById("audio");
            if (!audio.paused) {
                let audioBtn = document.getElementById("play-btn");
                audioBtn.click();
            }
        });
    }, []);

    setTimeout(() => {
        $("#preloader").fadeOut("slow");

        // AOS initialization
        setTimeout(() => {
            AOS.init({
                duration: 1000,
                easing: "ease-in-out",
                once: true,
                mirror: false,
            });
        }, 500);

        // card corners animation
        setTimeout(() => {
            $(".card-corner.top-right").addClass("top-right-animation");
            $(".card-corner.bottom-right").addClass("bottom-right-animation");
            $(".card-corner.bottom-left").addClass("bottom-left-animation");
            $(".card-corner.top-left").addClass("top-left-animation");
        }, 1000);

        // card flower fade in animation
        setTimeout(() => {
            $(".card-flower").addClass("card-flower-fade-in-animation");
        }, 2500);
    }, 2500);

    var [isUrdu, setIsUrdu] = useState(false);
    function changeLanguage() {
        setIsUrdu((isUrdu = !isUrdu));
    }

    return (
        <>
            <Preloader />
            <CustomModel />
            <Navbar />
            <Header isUrdu={isUrdu} />
            <Slide isUrdu={isUrdu} />
            <Couple isUrdu={isUrdu} />
            <InvitationQuote isUrdu={isUrdu} />
            {/* <BabiesQuote /> */}
            <Timeline isUrdu={isUrdu} />
            <CountDown isUrdu={isUrdu} />
            <Compliments isUrdu={isUrdu} />
            <InviteNote isUrdu={isUrdu} />
            {/* <DeveloperInfo /> */}
            <Logo />
            <Audio />
            <BackToTopBtn />
            <div className="toast-message">
                <span>Tap on screen to stop auto scroll</span>
            </div>
            <button id="lang-btn" onClick={changeLanguage}>
                {isUrdu ? (
                    <span className="eng">En</span>
                ) : (
                    <span className="urdu">ار</span>
                )}
            </button>
        </>
    );
}

export default App;
