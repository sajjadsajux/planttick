import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import SetTitle from "../Utilities/SetTitle";
import { Bounce, toast } from "react-toastify";

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
  return (
    <div className="min-h-screen  container mx-auto py-5  flex items-center justify-center px-2">
      <div className="w-full max-w-3xl p-6 bg-base-300  rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-center text-primary   mb-6">Add Plants</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4   " onSubmit={handleAddPlants}>
          {/* Plant Name */}
          <div className="space-y-1 md:col-span-2">
            <label className="block font-medium">Plant Name</label>
            <input required type="text" name="plantname" placeholder="Plant Name" className="w-full px-3 py-2 rounded-md border border-gray-300      focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm" />
          </div>

          {/* Image */}
          <div className="space-y-1">
            <label className="block font-medium">Image URL</label>
            <input required type="url" name="image" placeholder="Image URL" className="w-full px-3 py-2 rounded-md border border-gray-300      focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm" />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="block font-medium">Plant Category</label>
            <select required name="category" className="w-full mt-1 rounded-md border border-gray-300      shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm text-gray-600">
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
            <label className="block font-medium">Care Level</label>
            <select required name="careLevel" className="w-full mt-1 rounded-md border border-gray-300      shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm text-gray-600">
              <option value="">Select care level</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div className="space-y-1">
            <label className="block font-medium">Watering Frequency (days)</label>
            <input required type="number" name="wateringFrequency" placeholder="e.g., 3" min="1" className="w-full mt-1 rounded-md border border-gray-300      focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm" />
          </div>

          {/* Last Watered Date */}
          <div className="space-y-1">
            <label className="block font-medium">Last Watered Date</label>
            <input required type="date" name="lastWatered" className="w-full mt-1 rounded-md border border-gray-300      shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm" />
          </div>

          {/* Next Watering Date */}
          <div className="space-y-1">
            <label className="block font-medium">Next Watering Date</label>
            <input required type="date" name="nextWatering" className="w-full mt-1 rounded-md border border-gray-300      shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm " />
          </div>

          {/* Added Date */}
          <div className="space-y-1">
            <label className="block font-medium">Added Date</label>
            <input required type="date" name="addedDate" defaultValue={new Date().toISOString().split("T")[0]} className="w-full mt-1 rounded-md border border-gray-300      shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm" />
          </div>

          {/* Health Status */}
          <div className="space-y-1">
            <label className="block font-medium">Health Status</label>
            <select required name="healthStatus" className="w-full mt-1 rounded-md border border-gray-300      shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm text-gray-600">
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
            <label className="block font-medium">Description</label>
            <input required type="text" name="description" placeholder="Description" className="w-full px-3 py-2 rounded-md border border-gray-300      focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm" />
          </div>

          {/* User Email */}
          <div className="space-y-1">
            <label className="block font-medium">User Email</label>
            <input readOnly type="email" name="email" defaultValue={user.email} className="w-full px-3 py-2 rounded-md border border-gray-300      focus:outline-none text-sm" />
          </div>

          {/* User Name */}
          <div className="space-y-1">
            <label className="block font-medium">User Name</label>
            <input readOnly type="text" name="name" defaultValue={user.displayName} className="w-full px-3 py-2 rounded-md border border-gray-300      focus:outline-none text-sm" />
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
