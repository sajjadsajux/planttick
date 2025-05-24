import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";
import SetTitle from "../Utilities/SetTitle";
import Loader from "../Utilities/Loader";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const { _id } = user;
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    <div className="container mx-auto p-6 min-h-[100vh]">
      <h1 className="text-3xl font-bold text-center mb-8  text-primary">My Plants</h1>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div key={plant._id} className="bg-base-300  rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:scale-[1.02] transition duration-300 border border-gray-100 ">
              {/* Image */}
              <img src={plant.image} alt={plant.plantname} className="w-full h-64 object-cover" />

              {/* Info */}
              <div className="p-5 space-y-2 flex-grow  ">
                <h2 className="text-xl font-bold text-primary">{plant.plantname}</h2>
                <p>
                  <strong>Category:</strong> {plant.category}
                </p>
                <p>
                  <strong>Care Level:</strong> {plant.careLevel}
                </p>
                <p>
                  <strong>Watering:</strong> Every {plant.wateringFrequency} days
                </p>
                <p>
                  <strong>Last Watered:</strong>{" "}
                  {new Date(plant.lastWatered).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>
                  <strong>Next Watering:</strong>{" "}
                  {new Date(plant.nextWatering).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>
                  <strong>Health Status:</strong> {plant.healthStatus}
                </p>
                <p>
                  <strong>Description:</strong> {plant.description}
                </p>
                <p>
                  <strong>Added By:</strong> {plant.name} ({plant.email})
                </p>
              </div>

              {/* Buttons */}
              <div className="px-5 py-4 flex justify-between border-t border-gray-200  bg-base-300 ">
                <Link to={`/myplants-update/${plant._id}`} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-green-700 transition">
                  Update
                </Link>
                <button onClick={() => handleDelete(plant._id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
