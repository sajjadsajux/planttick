import React from "react";

const AddPlants = () => {
  const handleAddPlants = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlantData = Object.fromEntries(formData.entries());
    console.log(newPlantData);
  };
  return (
    <div className="bg-green-700 p-10">
      <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-white  mx-auto ">
        <h1 className="text-2xl font-bold text-center">Add Plants</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleAddPlants}>
          {/* Image */}
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">Image</label>
            <input required type="url" name="image" placeholder="ImageURL" className="w-full px-4 py-3 rounded-md   outline-1" />
          </div>

          {/* Plant Name */}
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">Plant Name</label>
            <input required type="text" name="plantname" placeholder="Plant Name" className="w-full px-4 py-3 rounded-md outline-1" />
          </div>

          {/* Category */}
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-sm font-medium">
              Plant Category
            </label>
            <select required name="category" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
              <option value="">Select a category from below</option>
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
              <option value="tropical">Tropical</option>
              <option value="bonsai">Bonsai</option>
              <option value="cactus">Cactus</option>
            </select>
          </div>

          {/* Care Level */}
          <div className="space-y-1 text-sm">
            <label htmlFor="careLevel" className="block text-sm font-medium">
              Care Level
            </label>
            <select required name="careLevel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
              <option value="">Select a care level from below</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div className="space-y-1 text-sm">
            <label htmlFor="wateringFrequency" className="block text-sm font-medium">
              Watering Frequency (in days)
            </label>
            <input required type="number" name="wateringFrequency" placeholder="e.g., 3" min="1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>

          {/* Last Watered Date */}
          <div className="space-y-1 text-sm">
            <label htmlFor="lastWatered" className="block text-sm font-medium">
              Last Watered Date
            </label>
            <input required type="date" id="lastWatered" name="lastWatered" className="mt-1 block w-full rounded-md shadow-sm" />
          </div>

          {/* Next Watering Date */}
          <div className="space-y-1 text-sm">
            <label htmlFor="nextWatering" className="block text-sm font-medium">
              Next Watering Date
            </label>
            <input required type="date" name="nextWatering" className="mt-1 block w-full rounded-md shadow-sm" />
          </div>

          {/* Health Status */}
          <div className="space-y-1 text-sm">
            <label htmlFor="healthStatus" className="block text-sm font-medium">
              Health Status
            </label>
            <select required name="healthStatus" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm ">
              <option value="">Select health status from below</option>
              <option value="healthy">Healthy</option>
              <option value="okay">Okay</option>
              <option value="needs_attention">Needs Attention</option>
            </select>
          </div>

          {/* Description - Full Width */}
          <div className="space-y-1 text-sm md:col-span-2">
            <label className="block text-gray-400">Description</label>
            <input required type="text" name="description" placeholder="Description" className="w-full px-4 py-3 rounded-md border-gray-700  outline-1 " />
          </div>

          {/* User Email */}
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">User Email</label>
            <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md   " />
          </div>

          {/* User Name */}
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">User Name</label>
            <input required type="text" name="name" placeholder="User Name" className="w-full px-4 py-3 rounded-md  " />
          </div>

          {/* Submit Button - Full Width */}
          <div className="md:col-span-2">
            <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-green-700">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlants;
