import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({property}) {
    return (
        <Link to={`/properties/${property.id}`} className="block bg-white rounded-xl
        shadow-sm border border-gray-200 overflow-hidden 
        ">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{property.title}</h3>
                    <span className="text-blue-500">{property.price }</span>
                </div>
                <p className="text-sm text-gray-700">{property.location }</p>
            </div>
      </Link>
  )
}

export default PropertyCard;
