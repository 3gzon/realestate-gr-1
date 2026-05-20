import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPropertyById } from '../services/properties';

function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erorr, setError] = useState("");

    useEffect(() => {
        getPropertyById(id)
            .then((data) => {
                console.log(data);
                setProperty(data);
                setLoading(false);
            })
    }, [id])

    return (
        <main className="py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/properties" className="text-blue-600 text-sm inline-block mb-4"
                >
                    ← back to properties
                </Link>

                <img src={property?.image} alt={property?.title}
                    className="w-full h-80 object-cover rounded-xl mb-8"
                />

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold mb-2">{property?.title}</h1>

                    <p className="text-gray-600 mb-4">{property?.location}</p>

                    <div className="mb-6">
                        <p className="text-4xl font-bold text-blue-600">${property?.price}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-gray-600 text-sm">Type</p>
                            <p className="text-lg font-semibold">{property?.type}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-gray-600 text-sm">Area</p>
                            <p className="text-lg font-semibold">{property?.area} m²</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-gray-600 text-sm">Bedrooms</p>
                            <p className="text-lg font-semibold">{property?.bedrooms}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-gray-600 text-sm">Bathrooms</p>
                            <p className="text-lg font-semibold">{property?.bathrooms}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">Description</h2>
                        <p className="text-gray-700">{property?.description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PropertyDetails