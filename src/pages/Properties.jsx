import React, { useEffect, useState } from "react";
import { getProperties } from "../services/properties";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";

function Properties() {
  const userId = localStorage.getItem("userId");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProperties()
      .then((data) => {
        setProperties(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setError(error.message || String(error));
        setLoading(false)
      })
  }, [])

if (!userId) {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          You are not logged in
        </h2>

        <p className="text-gray-600 mb-6">
          Login to view properties
        </p>

        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}


  return (
    <main className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
       
        {loading &&
          <div className="text-gray-500">loading properties</div>
        }
        {error && (
          <p className="rounded-lg bg-red-50 text-red-700 text-sm px-4 py-4 border border-red-100">
            {error}
          </p>
        )}
        
      </div>
      <div className="bg-gray-100 min-h-screen text-gray-800">
      

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Latest Properties
          </h2>

          <p className="text-gray-600">
            Browse our newest real estate listings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold capitalize">
                    {property.title}
                  </h3>

                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">
                  {property.description}
                </p>

                <div className="space-y-2 text-gray-700 mb-5">
                  <p>📍 {property.location}</p>
                  <p>🛏 {property.bedrooms} Bedrooms</p>
                  <p>🛁 {property.bathrooms} Bathrooms</p>
                  <p>📐 {property.area} m²</p>
                </div>

                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-bold text-blue-600">
                    €{property.price}
                  </h4>

                  <Link to={`/properties/${property.id}`}>
  <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
    View More
  </button>
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&fit=crop"
            alt="House"
            className="rounded-3xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Trusted Real Estate Platform
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              We help people find modern and comfortable homes with
              trusted listings and amazing locations.
            </p>

           
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">
            EstatePro
          </h3>

          <p className="text-gray-400">
            Find the perfect property for your future.
          </p>
        </div>
      </footer>
    </div>
    </main>)
}

export default Properties;
