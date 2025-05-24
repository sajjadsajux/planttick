import React from "react";
import { useLoaderData } from "react-router";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import SetTitle from "../Utilities/SetTitle";

const MyPlantsUpdate = () => {
  const myplant = useLoaderData();
  // console.log(myplant);
  const { _id, plantname, category, careLevel, description, healthStatus, image, lastWatered, nextWatering, wateringFrequency } = myplant;
  const formattedLastDate = new Date(lastWatered).toISOString().split("T")[0];
  const formattedNextDate = new Date(nextWatering).toISOString().split("T")[0];

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatePlants = Object.fromEntries(formData.entries());
    updatePlants.lastWatered = new Date(updatePlants.lastWatered);
    updatePlants.nextWatering = new Date(updatePlants.nextWatering);
    // console.log(updatePlants);
    // patch
    fetch(`https://planttick-server.vercel.app/myplants/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePlants),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // console.log("Update Data", data);
          toast.success("Plant Details Updated Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else if (data.modifiedCount === 0) {
          toast.warn("Everything is Up to Date!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      });
  };
  SetTitle(`Update Plant - ${plantname}`);
  return (
    <div>
      <div className=" p-10 container mx-auto">
        <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-base-300  mx-auto">
          <h1 className="text-2xl font-bold text-center  ">Update Plant</h1>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleUpdate}>
            {/* Plant Name */}
            <div className="space-y-1 text-sm">
              <label className="block  dark:text-gray-200">Plant Name</label>
              <input required type="text" name="plantname" placeholder="Plant Name" defaultValue={plantname} className="w-full px-4 py-3 rounded-md outline-1  dark:bg-gray-700  dark:text-gray-100" />
            </div>
            {/* Image */}
            <div className="space-y-1 text-sm">
              <label className="block  dark:text-gray-200">Image</label>
              <input required type="url" name="image" placeholder="ImageURL" defaultValue={image} className="w-full px-4 py-3 rounded-md outline-1  dark:bg-gray-700  dark:text-gray-100" />
            </div>
            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-sm font-medium  dark:text-gray-200">
                Plant Category
              </label>
              <select required name="category" defaultValue={category} className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600   shadow-sm text-gray-700">
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
              <label htmlFor="careLevel" className="block text-sm font-medium  ">
                Care Level
              </label>
              <select required name="careLevel" defaultValue={careLevel} className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600  text-gray-700 shadow-sm">
                <option value="">Select a care level from below</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Difficult">Difficult</option>
              </select>
            </div>

            {/* Watering Frequency */}
            <div className="space-y-1 text-sm">
              <label htmlFor="wateringFrequency" className="block text-sm font-medium  dark:text-gray-200">
                Watering Frequency (in days)
              </label>
              <input required type="number" name="wateringFrequency" placeholder="e.g., 3" min="1" defaultValue={wateringFrequency} className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 shadow-sm" />
            </div>

            {/* Last Watered Date */}
            <div className="space-y-1 text-sm">
              <label htmlFor="lastWatered" className="block text-sm font-medium  dark:text-gray-200">
                Last Watered Date
              </label>
              <input required type="date" id="lastWatered" name="lastWatered" defaultValue={formattedLastDate} className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600   text-gray-700 shadow-sm" />
            </div>

            {/* Next Watering Date */}
            <div className="space-y-1 text-sm">
              <label htmlFor="nextWatering" className="block text-sm font-medium  dark:text-gray-200">
                Next Watering Date
              </label>
              <input required type="date" name="nextWatering" defaultValue={formattedNextDate} className="mt-1 block w-full rounded-md border border-gray-300  text-gray-700 shadow-sm" />
            </div>

            {/* Health Status */}
            <div className="space-y-1 text-sm">
              <label htmlFor="healthStatus" className="block text-sm font-medium  dark:text-gray-200">
                Health Status
              </label>
              <select required name="healthStatus" defaultValue={healthStatus} className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 shadow-sm">
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
              <label className="block  dark:text-gray-200">Description</label>
              <input required type="text" name="description" placeholder="Description" defaultValue={description} className="w-full px-4 py-3 rounded-md border border-gray-700 dark:border-gray-400  dark:bg-gray-700  dark:text-gray-100 outline-1" />
            </div>

            {/* Submit Button - Full Width */}
            <div className="md:col-span-2">
              <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-primary hover:bg-primary-dark transition">
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
