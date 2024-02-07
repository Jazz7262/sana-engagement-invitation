import React from "react";
import "../styles/InviteNote.css";

function InviteNote(props) {
  const isUrdu = props.isUrdu;

  return (
    <section id="invite-note">
      <div className="invite-note-wrapper">
        {isUrdu ? (
          <>
            <h5 className="urdu">
              محفلِ منگنی میں آپکی شرکت و دعائے خیر و ہم طعامی کے آرزومند
            </h5>
            <h2 className="urdu">یم ۪یس ۪ ولی صاحب واہلیہ</h2>
            <h5 className="urdu">ضلع کرنول ، فوڈ فراہمی کنٹریکٹر </h5>

            <h5 className="urdu">مکان نمبر 21/224/27 ، نز ده ناویا ہسپتال</h5>
            <h5 className="urdu mb-4">یس ، کے ، ڈیڈیڈی کالونی ، ادونی</h5>

            <h5 className="urdu mb-3">:رابطہ کرے</h5>
            <p className="address ">
              +91 99635 41902, <br />
              +91 97044 49724.
            </p>
          </>
        ) : (
          <>
            <h5>An Invitation from:</h5>
            <h2>Mr. & Mrs. M.S. Vali Sahab</h2>

            <h5 className="address mb-3">
              Food Provision Contractor,
              <br /> Kurnool Dist.
            </h5>
            <h5 className="address mb-3">
              H.No.: #21/224/27, Near Navya Hospital,
              <br /> Zero Road, SKD Colony,
              <br /> Adoni, Kurnool Dist.,
              <br /> AP - 518 301.
            </h5>
            <p className="address">
              Contact: <br />
              +91 94403 64911, <br />
              +91 97034 44492.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default InviteNote;
