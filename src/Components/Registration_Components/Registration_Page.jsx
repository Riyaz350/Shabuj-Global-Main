import { Link } from "react-router-dom";

const Registration_Page = () => {
    return (
      <div className="bg-gray-100 pt-10 pb-52 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="p-5 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-5">
              Create an Account
            </h2>
            <p className="text-gray-500 mb-10">
              Create an account and start your mission.
            </p>
  
            <form>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded"
                />
              </div>
  
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
  
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded"
                />
                <select className="w-full sm:w-1/2 p-3 border border-gray-300 rounded">
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Germany</option>
                  <option>Netherland</option>
                  <option>Australia</option>
                  <option>Switzerland</option>
                  <option>France</option>
                </select>
              </div>
  
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded"
                />
              </div>
  
              <div className="flex items-center mb-6">
                <input type="checkbox" id="terms" className="accent-[#081831]"/>
                <label htmlFor="terms" className="text-gray-600 text-sm pl-1">
                  I agree to the terms and conditions
                </label>
              </div>
  
              <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
                <button className="bg-[#081831] text-white p-3 rounded w-full">
                  Sign Up
                </button>
                <Link to='/login' >
                <button className="bg-gray-100 text-gray-700 p-3 rounded w-full">
                  Sign In
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Registration_Page;
  