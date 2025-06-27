import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import SetTitle from "../Utilities/SetTitle";
import { Bounce, toast } from "react-toastify";
import useScrollToTop from "../Utilities/ScrollToTop";

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
          toast.success("Plant Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });

          form.reset();
        }
      });
  };
  SetTitle("Add Plant");
  useScrollToTop();
  return (
    <div className="min-h-screen container mx-auto s flex flex-col items-center  px-2">
      <h1 className="text-3xl font-bold my-8 text-center text-primary">Add Plants</h1>
      <div className="w-full max-w-4xl p-6 bg-white dark:bg-base-300 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleAddPlants}>
          {/* Plant Name */}
          <div className="space-y-1 md:col-span-2">
            <label className="block font-medium text-gray-800 dark:text-gray-200">Plant Name</label>
            <input required type="text" name="plantname" placeholder="Plant Name" className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100" />
          </div>

          {/* Image */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">Image URL</label>
            <input required type="url" name="image" placeholder="Image URL" className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100" />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">Plant Category</label>
            <select required name="category" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-base-100">
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
            <label className="block font-medium text-gray-800 dark:text-gray-200">Care Level</label>
            <select required name="careLevel" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-base-100">
              <option value="">Select care level</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">Watering Frequency (days)</label>
            <input
              required
              type="number"
              name="wateringFrequency"
              placeholder="e.g., 3"
              min="1"
              className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Last Watered Date */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">Last Watered Date</label>
            <input required type="date" name="lastWatered" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100" />
          </div>

          {/* Next Watering Date */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">Next Watering Date</label>
            <input required type="date" name="nextWatering" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100" />
          </div>

          {/* Added Date */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">Added Date</label>
            <input
              required
              type="date"
              name="addedDate"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Health Status */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">Health Status</label>
            <select required name="healthStatus" className="w-full mt-1 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-base-100">
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
            <label className="block font-medium text-gray-800 dark:text-gray-200">Description</label>
            <input
              required
              type="text"
              name="description"
              placeholder="Description"
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* User Email */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">User Email</label>
            <input readOnly type="email" name="email" defaultValue={user.email} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100" />
          </div>

          {/* User Name */}
          <div className="space-y-1">
            <label className="block font-medium text-gray-800 dark:text-gray-200">User Name</label>
            <input readOnly type="text" name="name" defaultValue={user.displayName} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none text-sm bg-white dark:bg-base-100 text-gray-900 dark:text-gray-100" />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button type="submit" className="w-full py-2 rounded-md bg-primary text-white font-medium hover:bg-green-600 transition text-sm">
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlants;
