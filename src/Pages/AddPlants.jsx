import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const AddPlants = () => {
  const { user } = useContext(AuthContext);

  const handleAddPlants = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlantData = Object.fromEntries(formData.entries());

    newPlantData.addedDate = new Date(newPlantData.addedDate);
    newPlantData.lastWatered = new Date(newPlantData.lastWatered);
    newPlantData.nextWatering = new Date(newPlantData.nextWatering);

    fetch("https://planttick-server.vercel.app/plants", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPlantData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Plant Added",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8">Add Plants</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900 dark:text-gray-100" onSubmit={handleAddPlants}>
          {/* Plant Name */}
          <div className="space-y-1">
            <label className="block font-semibold">Plant Name</label>
            <input required type="text" name="plantname" placeholder="Plant Name" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>

          {/* Image */}
          <div className="space-y-1">
            <label className="block font-semibold">Image URL</label>
            <input required type="url" name="image" placeholder="Image URL" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="block font-semibold">Plant Category</label>
            <select required name="category" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition">
              <option value="">Select a category</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
              <option value="Tropical">Tropical</option>
              <option value="Bonsai">Bonsai</option>
              <option value="Cactus">Cactus</option>
            </select>
          </div>

          {/* Care Level */}
          <div className="space-y-1">
            <label className="block font-semibold">Care Level</label>
            <select required name="careLevel" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition">
              <option value="">Select care level</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div className="space-y-1">
            <label className="block font-semibold">Watering Frequency (days)</label>
            <input
              required
              type="number"
              name="wateringFrequency"
              placeholder="e.g., 3"
              min="1"
              className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Last Watered Date */}
          <div className="space-y-1">
            <label className="block font-semibold">Last Watered Date</label>
            <input required type="date" name="lastWatered" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>

          {/* Next Watering Date */}
          <div className="space-y-1">
            <label className="block font-semibold">Next Watering Date</label>
            <input required type="date" name="nextWatering" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>

          {/* Added Date */}
          <div className="space-y-1">
            <label className="block font-semibold">Added Date</label>
            <input
              required
              type="date"
              name="addedDate"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Health Status */}
          <div className="space-y-1">
            <label className="block font-semibold">Health Status</label>
            <select required name="healthStatus" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition">
              <option value="">Select health status</option>
              <option value="Looking Healthy">Looking Healthy</option>
              <option value="Fair">Fair</option>
              <option value="Leaves Drying">Leaves Drying</option>
              <option value="Starting to Wilt">Starting to Wilt</option>
              <option value="Needs Care">Needs Care</option>
            </select>
          </div>

          {/* Description - Full Width */}
          <div className="space-y-1 md:col-span-2">
            <label className="block font-semibold">Description</label>
            <input required type="text" name="description" placeholder="Description" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>

          {/* User Email */}
          <div className="space-y-1">
            <label className="block font-semibold">User Email</label>
            <input readOnly type="email" name="email" defaultValue={user.email} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none" />
          </div>

          {/* User Name */}
          <div className="space-y-1">
            <label className="block font-semibold">User Name</label>
            <input readOnly type="text" name="name" defaultValue={user.displayName} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none" />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold hover:from-green-700 hover:to-green-500 transition">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlants;
