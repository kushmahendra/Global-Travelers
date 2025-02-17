"use client"

import { useState } from "react"

const LoginSignupPage = () => {
  const [activeTab, setActiveTab] = useState("login")
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setShowForgotPassword(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Image and Text */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="dubailogin1.jpg"
          alt="Adventure background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute bottom-20 left-10 text-white">
            <h1 className="text-5xl font-bold mb-4">Your Adventure Starts Here</h1>
            <p className="text-xl">Experience 20,000+ Tours And Activities from 1,200+ Suppliers</p>
          </div>
        </div>
      </div>

      {/* Right side - Forms */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-8  ">
          <div className="w-full max-w-md ">
            {/* Tabs */}
            <div className="flex mb-8 border-b">
              <button
                className={`pb-4 px-8 ${
                  activeTab === "login" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"
                }`}
                onClick={() => handleTabChange("login")}
              >
                Login
              </button>
              <button
                className={`pb-4 px-8 ${
                  activeTab === "signup" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"
                }`}
                onClick={() => handleTabChange("signup")}
              >
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            {activeTab === "login" && !showForgotPassword && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Log into Your Account</h2>
                <form className="space-y-4">
                  <div>
                    <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
                  </div>
                  <button
                    type="button"
                    className="text-orange-500 text-sm text-right w-full"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Forgot Password?
                  </button>
                  <button className="w-full bg-orange-500 text-white p-3 rounded-lg">Login & Continue</button>
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">or</span>
                    </div>
                  </div>
                  <button className="w-full border p-3 rounded-lg flex items-center justify-center gap-2">
                    <img src="/placeholder.svg?height=24&width=24" alt="Google" className="w-6 h-6" />
                    Sign in with Google
                  </button>
                </form>

                {/* Trust Badges */}
                <div className="mt-12">
                  <h3 className="text-center text-lg font-semibold mb-6">Book With Confidence</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">4.5/5</div>
                      <div>
                        <p className="font-semibold">TRIP ADVISOR</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">4.0/5</div>
                      <div>
                        <p className="font-semibold">TRUST PILOT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sign Up Form */}
            {activeTab === "signup" && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Create Your Account</h2>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div className="flex gap-2">
                    <select className="w-24 p-3 border rounded-lg">
                      <option>+91</option>
                    </select>
                    <input type="tel" placeholder="Phone" className="flex-1 p-3 border rounded-lg" />
                  </div>
                  <div>
                    <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-lg" />
                  </div>
                  <p className="text-sm text-gray-600">By joining, you agree to the Terms and Privacy Policy.</p>
                  <button className="w-full bg-orange-500 text-white p-3 rounded-lg">Sign Up</button>
                  <p className="text-center text-sm text-gray-600">
                    Already Have An Account?{" "}
                    <button className="text-orange-500" onClick={() => handleTabChange("login")}>
                      Log In
                    </button>
                  </p>
                </form>
              </div>
            )}

            {/* Forgot Password Form */}
            {showForgotPassword && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Forgotten Your Password?</h2>
                <p className="text-gray-600 mb-6">
                  Don't worry, we'll send you a message to help you reset your password.
                </p>
                <form className="space-y-4">
                  <div>
                    <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
                  </div>
                  <button className="w-full bg-orange-500 text-white p-3 rounded-lg">Continue</button>
                  <p className="text-center">
                    <button className="text-orange-500" onClick={() => setShowForgotPassword(false)}>
                      Return to Log In
                    </button>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignupPage

