const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#0D3C00] mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-10">
            Have questions, feedback, or suggestions? Feel free to reach
            out—we’d love to hear from you.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h2>

            <p className="text-gray-600">
              You can contact us through the following details or send us a
              message using the form.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>
                📧 <span className="font-medium">Email:</span>{" "}
                support@example.com
              </p>
              <p>
                📞 <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
              <p>
                📍 <span className="font-medium">Location:</span> India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#6A961F] w-full text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#557C1A] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
