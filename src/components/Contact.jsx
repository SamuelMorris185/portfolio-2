import { useState } from "react";

const initialState = { name: "", email: "", title: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is just a demo form. No message will be sent.");
    setFormData(initialState);
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-8 py-20 max-w-6xl mx-auto bg-gray-800 transition-colors duration-300"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Let's Develop Together
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          I'd love to hear about your project or idea. Drop a message and I'll
          respond soon.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300"
            required
            minLength={2}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300"
            required
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Subject / Title"
            className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300"
            required
            minLength={3}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            rows="5"
            className="px-6 py-4 bg-gray-800 rounded-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 text-white transition-colors duration-300 resize-none"
            required
            minLength={10}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-md font-semibold transition-colors text-white whitespace-nowrap flex items-center justify-center gap-2"
          >
            Send Message
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          (Demo Only) This form is for UI display — it doesn’t send messages.
        </p>
      </div>
    </section>
  );
};

export default Contact;
