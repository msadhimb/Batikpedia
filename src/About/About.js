import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container-about">
        <h1 className="about-title mb-4">About</h1>
        <div className="about-content  pb-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md="4">
              <h2 className="text-white content1 ">BatikPedia</h2>
            </Col>
            <Col md="5">
              <p className="text-white content2 p-4">
                Batik merupakan salah satu seni budaya yang diakui dunia sebagai
                warisan manusia untuk budaya lisan dan takbenda oleh UNESCO
                sejak Oktober 2009. Di Indonesia, batik sudah ada sejak dulu
                zaman Majapahit dan sangat populer pada abad berikutnya. Oleh
                karena itu, batik adalah salah satunya warisan budaya yang harus
                dilestarikan dan dikembangkan. Setiap daerah di Indonesia
                memiliki karakteristik dan motif yang berbeda-beda.
                <br />
                Untuk memberi pengetahuan tentang berbagai macam batik yang ada
                di Indonesia kami pun membuat sebuah website bernama BatikPedia.
                BatikPedia adalah suatu website untuk melestarikan dan
                mengabadikan batik di Indonesia. Di dalam website ini terdapat
                asal, jenis, dan makna dari batik tersebut. BatikPedia membantu
                masyarakat untuk mempelajari tentang sejarah batik dan asal usul
                batik itu sendiri sehingga masyarakat Indonesia tidak akan asing
                dengan batik. Dengan adanya website ini, diharapkan masyarakat
                Indonesia sudah tidak asing lagi dengan motif batik dari
                berbagai daerah dan mengetahui sejarah maupun filosofi dari
                batik tersebut.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
