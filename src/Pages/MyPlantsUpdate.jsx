import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyPlantsUpdate = () => {
  const myplant = useLoaderData();
  console.log(myplant);
  const { _id, plantname, category, careLevel, description, healthStatus, image, lastWatered, nextWatering, wateringFrequency } = myplant;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatePlants = Object.fromEntries(formData.entries());
    console.log(updatePlants);
    // patch
    fetch(`http://localhost:3000/myplants/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePlants),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("Update Data", data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Plant Updated SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-green-700 p-10">
        <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-white  mx-auto ">
          <h1 className="text-2xl font-bold text-center">Update Plant</h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleUpdate}>
            {/* Image */}
            <div className="space-y-1 text-sm">
              <label className="block ">Image</label>
              <input required type="url" name="image" placeholder="ImageURL" className="w-full px-4 py-3 rounded-md   outline-1" defaultValue={image} />
            </div>

            {/* Plant Name */}
            <div className="space-y-1 text-sm">
              <label className="block ">Plant Name</label>
              <input required type="text" name="plantname" placeholder="Plant Name" className="w-full px-4 py-3 rounded-md outline-1" defaultValue={plantname} />
            </div>

            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-sm font-medium">
                Plant Category
              </label>
              <select required name="category" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm " defaultValue={category}>
                <option value="">Select a category from below</option>
                <option value="Succulent">Succulent</option>
                <option value="Fern">Fern</option>
                <option value="Flowering">Flowering</option>
                <option value="Tropical">Tropical</option>
                <option value="Bonsai">Bonsai</option>
                <option value="Cactus">Cactus</option>
              </select>
            </div>

            {/* Care Level */}
            <div className="space-y-1 text-sm">
              <label htmlFor="careLevel" className="block text-sm font-medium">
                Care Level
              </label>
              <select required name="careLevel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm " defaultValue={careLevel}>
                <option value="">Select a care level from below</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Difficult">Difficult</option>
              </select>
            </div>

            {/* Watering Frequency */}
            <div className="space-y-1 text-sm">
              <label htmlFor="wateringFrequency" className="block text-sm font-medium">
                Watering Frequency (in days)
              </label>
              <input required type="number" name="wateringFrequency" placeholder="e.g., 3" min="1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" defaultValue={wateringFrequency} />
            </div>

            {/* Last Watered Date */}
            <div className="space-y-1 text-sm">
              <label htmlFor="lastWatered" className="block text-sm font-medium">
                Last Watered Date
              </label>
              <input required type="date" id="lastWatered" name="lastWatered" className="mt-1 block w-full rounded-md shadow-sm" defaultValue={lastWatered} />
            </div>

            {/* Next Watering Date */}
            <div className="space-y-1 text-sm">
              <label htmlFor="nextWatering" className="block text-sm font-medium">
                Next Watering Date
              </label>
              <input required type="date" name="nextWatering" className="mt-1 block w-full rounded-md shadow-sm" defaultValue={nextWatering} />
            </div>

            {/* Health Status */}
            <div className="space-y-1 text-sm">
              <label htmlFor="healthStatus" className="block text-sm font-medium">
                Health Status
              </label>
              <select required name="healthStatus" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm " defaultValue={healthStatus}>
                <option value="">Select health status from below</option>
                <option value="Looking Healthy">Looking Healthy</option>
                <option value="Fair">Fair</option>
                <option value="Leaves Drying">Leaves Drying</option>
                <option value="Starting to Wilt">Starting to Wilt</option>
                <option value="Needs Care">Needs Care</option>
              </select>
            </div>

            {/* Description - Full Width */}
            <div className="space-y-1 text-sm md:col-span-2">
              <label className="block ">Description</label>
              <input required type="text" name="description" placeholder="Description" className="w-full px-4 py-3 rounded-md border-gray-700  outline-1 " defaultValue={description} />
            </div>

            {/* Submit Button - Full Width */}
            <div className="md:col-span-2">
              <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyPlantsUpdate;
