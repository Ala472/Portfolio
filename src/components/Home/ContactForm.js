import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, message } = data;
    // Disable form while processing submission
    setDisabled(true);

    // Define template params
    const templateParams = {
      name,
      email,
      message,
    };

    // Use emailjs to email contact form data
    await emailjs
      .send("service_glzdkaj", "template_wjfn10c", templateParams, {
        publicKey: "QhyovEk2DySyEYAsa",
      })
      .then(
        (response) => {
          reset();
          toastifySuccess();
          setDisabled(false);
        },
        (err) => {
       
        }
      );
  };

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      {...register("Name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Delivery address (be specific)"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter delivery information
                      </span>
                    )}
                  </div>
                </div>

                <button
                  className="submit-btn"
                  disabled={disabled}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
