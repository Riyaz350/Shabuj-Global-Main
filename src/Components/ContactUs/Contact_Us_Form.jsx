import arrow from "../../assets/Arrow 06.png";
import hand from "../../assets/Holding a Tablet to the Right.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact_Us_Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    preferredDestination: "",
    preferredYear: "",
    preferredIntake: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5">
        <div className="mx-auto px-4 lg:px-0 my-10 lg:my-28 lg:w-[80%] lg:col-span-1">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-center lg:text-left">
            We’d love to hear from you!
          </h1>
          <p className="text-center lg:text-left text-sm mt-5 md:text-base">
            Interested in studying abroad with Shabuj Global Education? Enter
            your details and we'll call you back when it suits you.
          </p>
          <img src={arrow} alt="" className="mx-auto hidden lg:block" />
        </div>
        <div className="lg:col-span-2 hidden lg:block relative">
          <motion.img
            src={hand}
            alt="Hold Tablet on Hand"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-[360px] mx-auto p-4 rounded-md absolute top-1/2 transform -translate-y-[56%] left-1/2 -translate-x-[48%]"
            initial={{ opacity: 0, x: -180, y: -550 }}
            animate={{ opacity: 1, x: -180, y: -260 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-2 outline-none border border-gray-300 rounded-md"
            />

            <div className="flex items-center bg-white border border-gray-300 rounded-md mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 p-2 outline-none bg-white rounded-l-md"
              />
              <span className="px-3 py-2 bg-gray-100 text-gray-600 border-l border-gray-300 rounded-r-md">
                .com
              </span>
            </div>
            <div className="flex items-center mb-4">
              <span className="p-2 border bg-white border-gray-300 rounded-md mr-2">
                +880
              </span>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-gray-300 rounded-md"
              />
            </div>
            <select
              name="preferredDestination"
              value={formData.preferredDestination}
              onChange={handleChange}
              className="w-full mb-4 p-2 outline-none border border-gray-300 rounded-md"
            >
              <option disabled value="">
                Preferred Study Destination
              </option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Germany</option>
              <option>Netherland</option>
              <option>Australia</option>
              <option>Switzerland</option>
              <option>France</option>
            </select>
            <select
              name="preferredYear"
              value={formData.preferredYear}
              onChange={handleChange}
              className="w-full mb-4 p-2 outline-none border border-gray-300 rounded-md"
            >
              <option disabled value="">
                Preferred Study Year
              </option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2025">2026</option>
              <option value="2025">2027</option>
            </select>
            <select
              name="preferredIntake"
              value={formData.preferredIntake}
              onChange={handleChange}
              className="w-full mb-4 p-2 outline-none border border-gray-300 rounded-md"
            >
              <option disabled value="">
                Preferred Study Intake
              </option>
              <option value="intake1">September-2024</option>
              <option value="intake1">October-2024</option>
              <option value="intake1">November-2024</option>
              <option value="intake1">December-2024</option>
              <option value="intake2">January-2025</option>
            </select>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm text-white">
                By clicking you agree to our
                <br />
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline pr-2"
                >
                  Privacy Policy
                </a>
                and
                <a
                  href="/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline px-2"
                >
                  Terms & Conditions
                </a>
                *
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500"
            >
              SUBMIT
            </button>
          </motion.form>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:max-w-[500px] md:mx-auto lg:hidden mx-4 p-6 rounded-md bg-gray-200 mb-10 "
          initial={{ opacity: 0, x: -180, y: -550 }}
          animate={{ opacity: 1, x: -180, y: -260 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md placeholder:text-sm"
          />

          <div className="flex items-center bg-white border border-gray-300 rounded-md mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 p-2 outline-none bg-white rounded-l-md placeholder:text-sm"
            />
            <span className="px-3 py-2 bg-gray-100 text-sm text-gray-600 border-l border-gray-300 rounded-r-md">
              .com
            </span>
          </div>
          <div className="flex items-center mb-4">
            <span className="p-2 border bg-white border-gray-300 rounded-md mr-2 text-sm">
              +880
            </span>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:text-sm"
            />
          </div>
          <select
            name="preferredDestination"
            value={formData.preferredDestination}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">Preferred Study Destination</option>
            <option value="destination1">Destination 1</option>
            <option value="destination2">Destination 2</option>
          </select>
          <select
            name="preferredYear"
            value={formData.preferredYear}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">Preferred Study Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          <select
            name="preferredIntake"
            value={formData.preferredIntake}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">Preferred Study Intake</option>
            <option value="intake1">Intake 1</option>
            <option value="intake2">Intake 2</option>
          </select>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-500">
              By clicking you agree to our
              <br />
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline pr-2"
              >
                Privacy Policy
              </a>
              and
              <a
                href="/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline px-2"
              >
                Terms & Conditions
              </a>
              *
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-full text-sm  font-semibold hover:bg-blue-500"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact_Us_Form;
