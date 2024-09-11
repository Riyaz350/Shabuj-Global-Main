const Login_Page = () => {
    return (
      <div className="bg-gray-100 pt-10 pb-32">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="p-5 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-5">
              Log In
            </h2>
            
  
            <form>
              
  
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
  
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              
  
              

               <div className="flex items-center mb-6">
                
                <label htmlFor="forgotPassword" className="text-gray-600 text-sm pl-1">
                  Forgot Password?
                </label>
              </div>

               <div className="mb-6">
                
                <button className="bg-[#081831] text-white p-3 rounded w-full">
                  Sign In
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#081831] text-white p-3 rounded w-full">
                  Sign In With Google
                </button>
                <button className="bg-gray-100 text-gray-700 p-3 rounded w-full">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login_Page;
  