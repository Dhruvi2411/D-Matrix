import React, { useState } from "react";
import axios from "axios";
import { User, Mail, MessageSquare } from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      toast.success(response.data.message); // Success message

      const resEmail = await axios.post(
        "http://localhost:5000/api/email",
        formData
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error submitting form:", error);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-xl bg-gray-900 text-white p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-blue-200 mb-6 border-b-4 border-blue-900 inline-block">
          Contact Me
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400">
              <User size={18} />
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400">
              <Mail size={18} />
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <span className="absolute top-3 left-3 text-gray-400">
              <MessageSquare size={18} />
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Say something..."
              className="w-full pl-10 pr-4 pt-3 pb-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 py-2 px-6 rounded-lg bg-blue-900 hover:bg-blue-950 transition-all font-semibold text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
