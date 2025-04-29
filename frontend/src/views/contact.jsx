import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Let’s Build Something Great</h2>
        <p className="text-lg text-gray-600">
          Have a project in mind or questions about our services? We’d love to
          hear from you. Fill out the form below or schedule a free consultation
          call — let's talk strategy, design, and growth.
        </p>
      </div>

      <form className="w-full max-w-2xl bg-gray-100 p-8 rounded-2xl shadow-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject (e.g., Website Build, App Quote)"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Tell us more about your project..."
          rows="5"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">
          Prefer a call? Schedule a free 30-minute consultation:
        </p>
        <a
          href="https://calendly.com/successkeyagency/consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default Contact;
