import React from "react";
import "../styles/Compliments.css";

function Compliments(props) {
    const isUrdu = props.isUrdu;

    return (
        <section id="compliments">
            {isUrdu ? (
                <>
                    <h1 className="urdu mb-4">بہترین تحائف کے ساتھ</h1>
                    <h2 className="urdu">پیارے اور قریبی رشتہ دار اور دوست</h2>
                </>
            ) : (
                <>
                    <h1>With Best Compliments From:</h1>
                    <h5>Near & Dear - Relatives & Friends.</h5>
                </>
            )}
        </section>
    );
}

export default Compliments;
