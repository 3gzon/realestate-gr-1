import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const userId = localStorage.getItem("userId");
  return (
    <div className="bg-gray-100 text-gray-800">

      <section className="relative h-[80vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-6xl font-bold mb-6">
            Find Your Perfect Home
          </h1>

          <p className="text-xl max-w-2xl mx-auto mb-8">
            We help families and individuals discover modern,
            comfortable, and affordable properties.
          </p>

          
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-4">
            About Us
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We are a trusted real estate platform focused on helping
            people find their dream properties with ease and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-5xl font-bold text-blue-600 mb-4">
              500+
            </h3>

            <p className="text-gray-700 text-lg">
              Properties Sold
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-5xl font-bold text-blue-600 mb-4">
              1000+
            </h3>

            <p className="text-gray-700 text-lg">
              Happy Clients
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-5xl font-bold text-blue-600 mb-4">
              10+
            </h3>

            <p className="text-gray-700 text-lg">
              Years Experience
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
       <img
       src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
        alt=""
       className="rounded-3xl shadow-lg"
       />

          <div>
            <h2 className="text-5xl font-bold mb-6">
              Why Choose Us
            </h2>

            <p className="text-gray-600 leading-8 mb-6 text-lg">
              Our team works hard to provide trusted listings,
              professional support, and the best experience for
              every client searching for a new home.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-2xl">
                ✅ Trusted Real Estate Services
              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">
                ✅ Professional Support Team
              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">
                ✅ Modern & Affordable Properties
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Our mission is to make buying and finding homes easier,
            faster, and more reliable for everyone.
          </p>
        </div>
      </section>

    {!userId && (
  <section className="bg-blue-600 py-20 text-white">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-5xl font-bold mb-6">
        Ready to Explore Properties?
      </h2>

      <p className="text-xl text-blue-100 mb-10">
        Login or create an account to unlock full property details.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
      <Link to="/login">
          <button className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition">
            Login
          </button>
        </Link>
       <Link to="/register">
           <button className="bg-black text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition">
          Register
        </button>
        </Link>
       
      </div>

    </div>
  </section>
)}

      <footer className="bg-gray-900 text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-3xl font-bold mb-5">
              EstatePro
            </h3>

            <p className="text-gray-400 leading-7">
              EstatePro helps people discover modern and affordable
              homes with trusted property listings and professional support.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-5">
              Contact Information
            </h4>

            <div className="space-y-4 text-gray-400">
              <p>📧 estatepro@gmail.com</p>
              <p>📞 +383 44 123 456</p>
              <p>☎️ +383 49 987 654</p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-5">
              Office Location
            </h4>

            <div className="space-y-4 text-gray-400">
              <p>📍 Vushtrri, Kosovo</p>
              <p>🕒 Monday - Saturday</p>
              <p>⏰ 08:00 AM - 08:00 PM</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-500">
          © 2026 EstatePro. All rights reserved.
        </div>
      </footer>

    </div>

  )
}

export default Home;
