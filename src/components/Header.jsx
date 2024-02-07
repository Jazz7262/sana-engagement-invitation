import React from "react";
import "../styles/Header.css";

function Header(props) {
  const isUrdu = props.isUrdu;

  return (
    <section id="header">
      <img
        src="../assets/images/bismillah.jpg"
        alt="bismillah"
        className="poster"
      />
      {isUrdu ? (
        <>
          <h3 class="ayat">
            نَحْمَدُهٗ وَنُصَلِّيْ عَلٰ رَسُوْلِهٖ لْكَرِيْمْ
          </h3>

          <h4 className="special-urdu mt-3">
            {" "}
            شروع الله کے نام سے جو نہایت مہربان رحم والا{" "}
          </h4>

          <h4 className="urdu mt-3">
            بفیضِ روحانی قطب ادونی ، قطب الدوائر اشرف المعاصر ، أفضل مظاہر ، سید
            برحق حضرت سید شاہ طاہر القادری الحموی قدر سره رحمۃ اللہ علیہ
          </h4>

          <h4 className="urdu mt-3">
            بعیض روحانی اعالی حضرت مجدد دین وملت الشاہ امام احمد رضا خان قدر سره
          </h4>

          {/* <h4 className="urdu mt-3">
                        بعیض روحانی حضرت محمد علی رحمۃ اللہ علیہ ابراہیم پور ،
                        سروگپا
                    </h4> */}
        </>
      ) : (
        <>
          <h4>
            BEGIN WITH THE NAME OF ALLAAH, THE MOST BENIFICIENT AND THE MOST
            MERCIFUL
          </h4>

          <h4 className="mt-4">
            Under the spirutual patronage of:
            <br />
            Qutub-e-Adoni Qutub-ud-Dawaayir Ashraf-ul-Ma'aasir Afzalul-Muzaahir
            Sayyid-e-Barhaq Hazrath Sayyid Shah Taher Quadri, Al-Hamavi
            Rahamatullaahi Alaih, Adoni.
          </h4>

          <h4 className="mt-4">
            A'alaa Hazrath Mujaddid-e-Deen wa Millat Ash-Shah Imaam Ahmad Raza
            Khan Alaihi Rahmatu wa Rizwaan, Bareilly Shareef.
          </h4>

          {/* <h4 className="mt-4">
                        Hazrath Mohammed Ali Rahamatullaahi Alaih, Ibrahimpur,
                        Siruguppa.
                    </h4> */}
        </>
      )}

      {/* <h4 className="mt-4">
                Under the spirutual patronage of Peer-O-Murshid:
                <br />
                Hazrath Jahangir Ghousul Alam Mehboob-e-Yazdani Qudwatul Kubra
                Sultan Ashraf Jahangir Maqdoom-e-Simnani Alaihi Rahamatu Wa
                Rizwaan, Kichhauchha Shareef.
            </h4> */}

      {/* <h4 className="mt-4">
                Sayyid Sarkar Valiyullah Hussaini Al-Maroof Hazrath Mastan Vali
                Saheb Rahamatullaahi Alaih, Adoni,
            </h4> */}
      {/* <h4 className="mt-4">
                Qutub-ul-Aqtab Hazrath Shaikh Ahmed Bin Salaam Chisti, Al-Maroof
                Hazrath Shaikh Sha Vali Rahamatullaahi Alaih, Yellarthi Shareef,
            </h4>

            <h4 className="mt-4">
                Qutub-ul-Konain Hazrath Sayyid Shah Abdus Salaam Sibgatullah
                Hussaini, Al-Maroof Hazrath ShaSha Vali Rahamatullaahi Alaih,
                Yellarthi Shareef.
            </h4> */}
      {/* <h4 className="mt-4">
                Under the spirutual patronage of:
                <br />
                Maamu - Bhanja Rahamatullaahi Alaih, Bhiwandi.
            </h4> */}
      {/* <h4 className="mt-4">
                Under the Blessings of:
                <br />
                Hazrath Syed Shah Ismail Quadri, Sajjada Nasheen Dargah Niloor
                Shareef, Gulbarga Dist.
            </h4> */}
      {/* <h4 className="mt-4">
                Under the blessings of Peer-O-Murshid:
                <br />
                Huzur Shaikh-ul-Islam wal Muslimeen Hazrath Sayyid Shah Muhammad
                Madani Miya Ashrafi Al-Jilani Damat Barkatuhu Quddusiyah,
                Kichhauchha Shareef.
            </h4> */}
      {/* <h4 className="mt-4">
                Ba Faiz-e-Ruhani Hazrath Peer Al-Haaj Ghulam Yahiya Pasha Qibla
                Naqshbandi Rahamatullaahi Alaih.
            </h4>

            <h4 className="mt-4">
                Zer-e-Sarparasti Peer-e-Triqat Hazrath Al-Haaj Ghulam Mohammed
                Ghouse Pasha Naqshbandi, Hyderabad.
            </h4> */}

      <div className="bg-container"></div>
    </section>
  );
}

export default Header;
