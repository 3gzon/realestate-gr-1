import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../services/properties";

function AddProperty() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Apartment");
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [image, setImage] = useState("");
  const [amenities, setAmenities] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  console.log(userId)

  if (!userId) {
    return (
      <div>No user logged in</div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      title,
      description,
      price,
      location,
      type,
      area,
      bedrooms,
      bathrooms,
      image,
      amenities,
      yearBuilt,
      userId
    };
    createProperty(newProperty)

      .catch((error) => console.error("Error creating property:", error));
  }
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file.size > 300) {
      setError("file is to large")
    }
    const render = new FileReader();
    render.onload = () => setImage(render.result);
    render.readAsDataURL(file)
    console.log(file)
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Add property</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="title" className="block">
            <span className="text-gray-700 font-medium">Title</span>
            <input id="title" type="text" value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="description" className="block">
            <span className="text-gray-700 font-medium">Description</span>
            <textarea id="description" value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="price" className="block">
            <span className="text-gray-700 font-medium">Price</span>
            <input id="price" type="number" value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="location" className="block">
            <span className="text-gray-700 font-medium">Location</span>
            <input id="location" type="text" value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="type" className="block">
            <span className="text-gray-700 font-medium">Type</span>
            <select id="type" value={type}
              onChange={(e) => setType(e.target.value)}
              className={inputClass}
            >
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
              <option>Condo</option>
            </select>
          </label>
          <label htmlFor="area" className="block">
            <span className="text-gray-700 font-medium">Area (sqm)</span>
            <input id="area" type="number" value={area}
              onChange={(e) => setArea(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="bedrooms" className="block">
            <span className="text-gray-700 font-medium">Bedrooms</span>
            <input id="bedrooms" type="number" value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="bathrooms" className="block">
            <span className="text-gray-700 font-medium">Bathrooms</span>
            <input id="bathrooms" type="number" value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="amenities" className="block">
            <span className="text-gray-700 font-medium">Amenities</span>
            <input id="amenities" type="text" value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="yearBuilt" className="block">
            <span className="text-gray-700 font-medium">Year Built</span>
            <input id="yearBuilt" type="number" value={yearBuilt}
              onChange={(e) => setYearBuilt(e.target.value)}
              className={inputClass}
            />
          </label>
          <label htmlFor="image" className="block">
            <span className="text-gray-700 font-medium">Property Image</span>
            <input id="image" type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </label>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-6">Create new property</button>
        </form>
      </div>
    </main>
  )
}

export default AddProperty;
