"use client"
import React, { useState } from "react";

function AddProducts() {
    const [imageur, setImageur] = useState();
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`
    setImageur(imageUploadUrl)
  };
  
  const handleSubmit = async (e) =>{
    e.preventDefault;
    const form = e.target.value;
    const name = form.name.value;
    const price = form.price.value;
    const color = form.color.value;
    const brand = form.brand.value;
    const stock = form.stock.value;
    const description = form.description.value;
    const image = imageur
    console.log({name,price,color,brand,stock,description,image});
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-lg p-2"
              placeholder="Product name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="w-full border rounded-lg p-2"
              placeholder="e.g., 120"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <input
              type="text"
              name="color"
              className="w-full border rounded-lg p-2"
              placeholder="e.g., Black"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              className="w-full border rounded-lg p-2"
              placeholder="e.g., Nike"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              className="w-full border rounded-lg p-2"
              placeholder="e.g., 50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
          </div>
        </div>

        {/* Full width below both columns */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              className="w-full border rounded-lg p-2 h-28"
              placeholder="Write product details here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium"
          >
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
