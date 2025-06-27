import React, { use, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";
import SetTitle from "../Utilities/SetTitle";
import Loader from "../Utilities/Loader";

const MyPlantsNew = () => {
  const { user } = use(AuthContext);
  const { _id } = user;
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    if (user?.email) {
      fetch(`https://planttick-server.vercel.app/myplants?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setPlants(data))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`https://planttick-server.vercel.app/myplants/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.error("Your plant has been deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });

              const remainingPlants = plants.filter((plant) => plant?._id !== _id);
              setPlants(remainingPlants);
            }
          });
      }
    });
  };
  SetTitle("My Plants");
  return (
    <div className="container mx-auto p-6 lg:p-0 min-h-[100vh]">
      <h1 className="text-3xl font-bold text-center mb-8  text-primary mt-8">My Plants</h1>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="container mx-auto px-4 py-6">
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="min-w-full bg-white dark:bg-base-300 text-sm border border-gray-200 dark:border-gray-700">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Image</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Care Level</th>
                  <th className="px-4 py-3 text-left">Water Freq</th>
                  <th className="px-4 py-3 text-left">Last Watered</th>
                  <th className="px-4 py-3 text-left">Next Watering</th>
                  <th className="px-4 py-3 text-left">Health</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-left">Added By</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {plants.map((plant) => (
                  <tr key={plant._id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="px-4 py-2">
                      <img src={plant.image} alt={plant.plantname} className="h-14 w-14 object-cover rounded" />
                    </td>
                    <td className="px-4 py-2 font-medium">{plant.plantname}</td>
                    <td className="px-4 py-2">{plant.category}</td>
                    <td className="px-4 py-2">{plant.careLevel}</td>
                    <td className="px-4 py-2">{plant.wateringFrequency} days</td>
                    <td className="px-4 py-2">{new Date(plant.lastWatered).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{new Date(plant.nextWatering).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{plant.healthStatus}</td>
                    <td className="px-4 py-2 max-w-xs truncate" title={plant.description}>
                      {plant.description}
                    </td>
                    <td className="px-4 py-2">
                      {plant.name}
                      <br />
                      <span className="text-xs text-gray-500">{plant.email}</span>
                    </td>
                    <td className="px-4 py-2">
                      <div className="join join-vertical w-full">
                        <Link to={`/myplants-update/${plant._id}`} className="btn join-item bg-primary text-white hover:bg-green-700 transition" state={{ from: location.pathname }}>
                          Update
                        </Link>
                        <button onClick={() => handleDelete(plant._id)} className="btn join-item bg-red-500 text-white hover:bg-red-600 transition">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPlantsNew;
