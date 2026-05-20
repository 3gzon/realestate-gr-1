import React, { useEffect, useState } from "react";
import { getProperties } from "../services/properties";
import PropertyCard from "../components/PropertyCard";

function Properties() {
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

  return (
    <main className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All properties</h1>
        <p className="text-gray-500 mb-10">
          Browse {properties.length} listing from our system
        </p>
        {loading &&
          <div className="text-gray-500">loading properties</div>
        }
        {error && (
          <p className="rounded-lg bg-red-50 text-red-700 text-sm px-4 py-4 border border-red-100">
            {error}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard property={property} key={property.id } />
            ))}
        </div>
      </div>
    </main>)
}

export default Properties;
