import React from "react";
import "../styles/InvitationQuote.css";

function InvitationQuote(props) {
    const isUrdu = props.isUrdu;

    return (
        <section id="invitation-quote">
            <div className="bg-image"></div>
            <div className="inner-content text-shadow">
                {isUrdu ? (
                    <>
                        <h1 className="urdu">
                            ہمارے بیٹے کے خوابیدہ لمحات قریب ہے ، خوش آمدید ہے
                            ہمارے بڑے دن میں
                        </h1>

                        <h3 className="urdu">
                            آپ کو خوشی سے دعوت ہے کہ آپ ہمیں آپ کی قیمتی موجودگی
                            اور دعاؤں کے ساتھ اور خوشیوں کے ساتھ ہمارے پیارے
                            عزیز بیٹے کی منگنی کے خصوصی موقع پر ہمارے ساتھ شریک
                            ہوں
                        </h3>
                    </>
                ) : (
                    <>
                        <h1>Welcome to our Big Day</h1>
                        <h3>
                            We cordially invite you to honour us with your
                            esteemed presence and blessings with Family and
                            Friends on the auspicous occasion of the Engagement
                            Ceremony of our beloved Son
                        </h3>
                    </>
                )}
            </div>
        </section>
    );
}

export default InvitationQuote;
