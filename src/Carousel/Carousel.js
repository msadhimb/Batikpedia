import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bg1 from "./asset/bg1.jpg";
import bg2 from "./asset/bg2.jpg";
import "./Carousel.css";

const Carou = () => {
  return (
    <React.Fragment>
      <Carousel id="home">
        <Carousel.Item>
          <img className="d-block w-100 bg" src={bg1} alt="First slide" />
          <Carousel.Caption>
            <h3>Secara Historis</h3>
            <p>
              Batik berasal dari zaman nenek moyang dan dikenal sejak abad ke
              17. Pada saat itu, motif dari batik didominasi oleh bentuk
              binatang serta tanaman. Akan tetapi, kemudian motif batik pun
              berkembang dan beralih pada motif-motif yang menyerupai awan
              maupun relief candi.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 bg" src={bg2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Teknik Canting Tulis</h3>
            <p>
              Teknik canting tulis adalah teknik membatik dengan menggunakan
              alat yang disebut canting (Jawa). Canting terbuat dari tembaga
              ringan dan berbentuk seperti teko kecil dengan corong di ujungnya
              . Canting berfungsi sebagai pena untuk menorehkan cairan malam
              pada sebagian pola. Malam berfungsi sebaga tinta yang diisikan
              pada canting. Saat kain dimasukkan ke dalam larutan pewarna,
              bagian yang tertutup malam tidak terkena warna.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};

export default Carou;
