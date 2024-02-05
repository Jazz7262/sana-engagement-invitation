import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="invite-note-wrapper">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. T. Basha</h2>

                <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5>
                <h5 className="address mb-3">
                    H.No.: 1/541/120, Near Vivekananda Junior College,
                    <br /> NGO's Colony,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 99635 41902, <br />
                    +91 97044 49724.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
