import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./Gallery.css";

const Gallery = () => {
  const [detail, setDetail] = useState(false);
  const [imageId, setImageId] = useState(0);

  const [res, setRes] = useState([]);

  useEffect(() => {
    axios.get("batik.json").then((res) => {
      setRes(res.data);
    });
  }, []);

  const viewDetail = (data) => {
    setImageId(data.id);
    setDetail(!detail);
  };

  const DescBatik = ({ data }) => {
    return (
      <React.Fragment>
        <div>
          <p className="text-start motif">Motif Batik : {data.motif}</p>
          <p
            className=" desc"
            dangerouslySetInnerHTML={{
              __html: `Sejarah : <br> ${data.deskripsi_sejarah}`,
            }}
          ></p>
        </div>
      </React.Fragment>
    );
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <React.Fragment>
      <div className="search bg-dark ps-5" id="gallery">
        <Form.Control
          type="text"
          placeholder="Cari Batik (Asal kota)"
          style={{ width: 300 }}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="gallery-container row text-center p-5 pt-4">
        {res
          .filter((image) => {
            if (searchTerm === "") {
              return image;
            } else if (
              image.asal.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return image;
            } else {
              return null;
            }
          })
          .map((image) => {
            return (
              <div
                className={
                  detail && imageId === image.id ? "col-md-12" : "col-md-3"
                }
                key={image.id}
              >
                <div
                  className="gallery-item"
                  key={image.id}
                  onClick={() => viewDetail(image)}
                  style={
                    detail && imageId === image.id
                      ? {
                          width: "100%",
                          height: "auto",
                          backgroundColor: "black",
                          zIndex: "999",
                        }
                      : null
                  }
                >
                  <img
                    src={image.link}
                    alt="gallery"
                    className={
                      detail && imageId === image.id ? "image-expand" : null
                    }
                  />
                  <div className="overlay">
                    <div className="container">
                      <h5
                        className="text"
                        style={{
                          fontFamily: "Satisfy, cursive",
                          fontSize: "40px",
                        }}
                      >
                        {image.asal}
                      </h5>
                      {detail && imageId === image.id ? (
                        <DescBatik data={image} />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Gallery;
