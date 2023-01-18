import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { uid } from "uid";
import "../Comment/Comment.css";

const Comment = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Comment
  const [comment, setComment] = useState([
    {
      id: 1,
      name: "User Example",
      email: "example@mail.com",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "12/12/2021",
    },
  ]);

  const [commentInput, setCommentInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    let data = { ...commentInput };
    data[e.target.name] = e.target.value;
    setCommentInput(data);
  }

  const onSubmit = () => {
    let data = [...comment];
    data.push({
      id: uid(),
      name: commentInput.name,
      email: commentInput.email,
      message: commentInput.message,
      date: new Date().toLocaleDateString(),
    });
    setComment(data);
    setCommentInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <React.Fragment>
      <div className="containers pt-5 pb-5 cmnt" id="comment">
        <h2 className="text-white comment-title">Comment</h2>
        <div className="container d-flex justify-content-end">
          <div className="contact-container">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className="text-start text-white m-0">Name</p>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={commentInput.name}
                  style={errors.email ? { border: "1px solid red" } : {}}
                  {...register("name", {
                    onChange: handleChange,
                    required: true,
                  })}
                />
                {errors.name && (
                  <p
                    className="text-danger text-start"
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      fontWeight: 700,
                    }}
                  >
                    Name is required
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className="text-start text-white m-0">Email</p>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={commentInput.email}
                  style={errors.email ? { border: "1px solid red" } : {}}
                  name="email"
                  {...register("email", {
                    required: true,
                    onChange: handleChange,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p
                    className="text-danger text-start"
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      fontWeight: 700,
                    }}
                  >
                    Email is required
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p
                    className="text-danger text-start"
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      fontWeight: 700,
                    }}
                  >
                    Entered email is in wrong format
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className="text-start text-white m-0">Message</p>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  value={commentInput.message}
                  style={
                    errors.message
                      ? { border: "1px solid red", height: 100 }
                      : { height: 100 }
                  }
                  name="message"
                  {...register("message", {
                    onChange: handleChange,
                    required: true,
                  })}
                />
                {errors.message && (
                  <p
                    className="text-danger text-start"
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      fontWeight: 700,
                    }}
                  >
                    Message is required
                  </p>
                )}
              </Form.Group>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary btn-submit" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div className="comment-section mt-5">
          <div className="container">
            <h4 className="text-white text-end">Comment Section</h4>
          </div>
          <div className="line"></div>
          <div className="container">
            {comment.map((item) => {
              return (
                <div
                  className="comment-section d-flex justify-content-center p-3"
                  key={item.id}
                >
                  <div className="comment-container">
                    <div className="commentar-name">
                      <div className="comment-options d-flex justify-content-between">
                        <h5
                          className="text-start m-0"
                          style={{ fontWeight: 700 }}
                        >
                          {item.name}
                        </h5>
                        <div className="comment-header d-flex justify-content-end">
                          <p className="text-start ">{item.date}</p>
                        </div>
                      </div>
                      <p className="text-start">{item.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
