import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./Comment.css";

const Comment = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <div className="containers pt-5 pb-5">
        <h2 className="text-white">Comment</h2>
        <div className="d-flex justify-content-center">
          <div className="contact-container">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className="text-start m-0">Name</p>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  style={errors.name ? { border: "1px solid red" } : {}}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p
                    className="text-danger text-start"
                    style={{ fontSize: 12, fontStyle: "italic" }}
                  >
                    Name is required
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className="text-start m-0">Email</p>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={errors.email ? { border: "1px solid red" } : {}}
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p
                    className="text-danger text-start"
                    style={{ fontSize: 12, fontStyle: "italic" }}
                  >
                    Email is required
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p
                    className="text-danger text-start"
                    style={{ fontSize: 12, fontStyle: "italic" }}
                  >
                    Entered email is in wrong format
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className="text-start m-0">Message</p>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={
                    errors.message
                      ? { border: "1px solid red", height: 100 }
                      : { height: 100 }
                  }
                  name="message"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <p
                    className="text-danger text-start"
                    style={{ fontSize: 12, fontStyle: "italic" }}
                  >
                    Message is required
                  </p>
                )}
              </Form.Group>
              <button className="btn btn-primary btn-submit" type="submit">
                Submit
              </button>
            </Form>
          </div>
        </div>
        <div className="comment-section mt-5">
          <div className="container">
            <h4 className="text-white text-start">Comment Section</h4>
          </div>
          <div className="line"></div>
          <div className="comment-section d-flex justify-content-center p-3">
            <div className="comment-container">
              <div className="commentar-name">
                <div className="comment-header d-flex justify-content-between">
                  <h5 className="text-start" style={{ fontWeight: 700 }}>
                    User Example
                  </h5>
                  <p className="text-start">12/12/2021</p>
                </div>
                <p className="text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
