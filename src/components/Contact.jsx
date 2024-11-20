import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bxoozwla", userInfo);
      toast.success("Your message has been sent.");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contacts"
        className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 py-16"
      >
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8 lg:px-16">
          {/* Section Title */}
          <h1 className="text-5xl font-extrabold text-white text-center mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-200 text-center mb-12">
            I’m excited to hear from you! Fill out the form below, and I’ll get
            back to you soon.
          </p>

          {/* Contact Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              // action="https://getform.io/f/bxoozwla"
              // method="POST"
              className="w-full lg:w-2/3 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              autoComplete="off"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Contact Me
              </h2>

              {/* Full Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Full Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none"
                />
              </div>
              {errors.name && <span>This field is required</span>}
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none"
                />
              </div>
              {errors.email && <span>This field is required</span>}
              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none"
                />
                {errors.message && <span>This field is required</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Decorative Info Section */}
            <div className="lg:w-1/3 text-white text-center space-y-8">
              <h3 className="text-3xl font-bold">Contact Info</h3>
              <p className="text-lg">
                Email me at{" "}
                <a
                  href="uettaxilarmkhan2454@gmail.com"
                  className="text-yellow-300 underline hover:text-yellow-400"
                >
                  uettaxilarmkhan2454@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="py-8" />
    </>
  );
}

export default Contact;
