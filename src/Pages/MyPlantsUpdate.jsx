import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import SetTitle from "../Utilities/SetTitle";
import useScrollToTop from "../Utilities/ScrollToTop";

const MyPlantsUpdate = () => {
  const myplant = useLoaderData();
  // console.log(myplant);
  const { _id, plantname, category, careLevel, description, healthStatus, image, lastWatered, nextWatering, wateringFrequency } = myplant;
  const formattedLastDate = new Date(lastWatered).toISOString().split("T")[0];
  const formattedNextDate = new Date(nextWatering).toISOString().split("T")[0];
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/myplants"; // fallback route

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
          navigate(from);
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
  useScrollToTop();

  return (
    <div>
      <div className="p-10 container mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Update Plant</h1>

        <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-white dark:bg-base-300 border dark:border-gray-600 mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleUpdate}>
            {/* Plant Name */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-700 dark:text-gray-200">Plant Name</label>
              <input required type="text" name="plantname" placeholder="Plant Name" defaultValue={plantname} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
            </div>

            {/* Image */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-700 dark:text-gray-200">Image</label>
              <input required type="url" name="image" placeholder="ImageURL" defaultValue={image} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
            </div>

            {/* Category */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-700 dark:text-gray-200">Plant Category</label>
              <select required name="category" defaultValue={category} className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
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
            <div className="space-y-1 text-sm">
              <label className="block text-gray-700 dark:text-gray-200">Care Level</label>
              <select required name="careLevel" defaultValue={careLevel} className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                <option value="">Select care level</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Difficult">Difficult</option>
              </select>
            </div>

            {/* Watering Frequency */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-700 dark:text-gray-200">Watering Frequency (in days)</label>
              <input required type="number" name="wateringFrequency" min="1" placeholder="e.g., 3" defaultValue={wateringFrequency} className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
            </div>

            {/* Last Watered */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-700 dark:text-gray-200">Last Watered Date</label>
              <input required type="date" name="lastWatered" defaultValue={formattedLastDate} className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
            </div>

            {/* Next Watering */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-700 dark:text-gray-200">Next Watering Date</label>
              <input required type="date" name="nextWatering" defaultValue={formattedNextDate} className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
            </div>

            {/* Health Status */}
            <div className="space-y-1 text-sm">
              <label className="block text-gray-700 dark:text-gray-200">Health Status</label>
              <select required name="healthStatus" defaultValue={healthStatus} className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                <option value="">Select health status</option>
                <option value="Looking Healthy">Looking Healthy</option>
                <option value="Fair">Fair</option>
                <option value="Leaves Drying">Leaves Drying</option>
                <option value="Starting to Wilt">Starting to Wilt</option>
                <option value="Needs Care">Needs Care</option>
              </select>
            </div>

            {/* Description */}
            <div className="space-y-1 text-sm md:col-span-2">
              <label className="block text-gray-700 dark:text-gray-200">Description</label>
              <input required type="text" name="description" placeholder="Description" defaultValue={description} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
            </div>

            {/* Submit */}
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
