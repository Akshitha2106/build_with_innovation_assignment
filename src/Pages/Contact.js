import React, { useState } from "react";
import { InfoDisplay } from "../components/InfoDisplay.js";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData?.name === "") {
      toast.error(`Please enter your name before submitting the form!`, {
        id: "error1",
      });
      return;
    }
    if (formData?.email === "") {
      toast.error(`Please enter your email before submitting the form!`, {
        id: "error2",
      });
      return;
    }
    if (formData?.message === "") {
      toast.error(`Please enter your query before submitting the form!`, {
        id: "error3",
      });
      return;
    }
    toast.success(`Your query is submitted successsfully!`, {
      id: "success1",
    });
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="container mx-auto -mt-12">
        <div className="bg-white p-8 rounded shadow-xl m-8">
          <div className="flex justify-center items-center">
            <div className="flex gap-[5px] items-center m-6">
              <h1 className="text-2xl font-bold ">Contact Us</h1>
              <InfoDisplay
                title="Have feedback for us?"
                description="Submit your feedback or inquiries."
              >
                <p className="mb-3">
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
              </InfoDisplay>
            </div>
          </div>

          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <Toaster
              position="top-right"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: "m-8",
                duration: 5000,
                style: {
                  background: "#363636",
                  color: "#fff",
                },

                // Default options for specific types
                success: {
                  duration: 3000,
                  theme: {
                    primary: "green",
                    secondary: "black",
                  },
                },
              }}
            />
            <button
              className="relative py-3 px-8 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
