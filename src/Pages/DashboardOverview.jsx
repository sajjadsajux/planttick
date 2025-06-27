import { use, useEffect, useState } from "react";
import { FaLeaf, FaUserCircle, FaTint, FaCalendarCheck, FaListUl, FaSeedling } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthContext";
import LocalNotes from "../Utilities/LocalNotes";
import SetTitle from "../Utilities/SetTitle";
const DashboardOverview = () => {
  const { user } = use(AuthContext);
  const [allCount, setAllCount] = useState(0);
  const [myCount, setMyCount] = useState(0);
  const [plants, setPlants] = useState([]);
  const [commonCategory, setCommonCategory] = useState("");

  useEffect(() => {
    fetch("https://planttick-server.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setAllCount(data.length);

        // Calculate most common category
        const categoryMap = {};
        data.forEach((plant) => {
          categoryMap[plant.category] = (categoryMap[plant.category] || 0) + 1;
        });
        const mostCommon = Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0];
        setCommonCategory(mostCommon?.[0] || "");
      });

    fetch(`https://planttick-server.vercel.app/myplants?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyCount(data.length));
  }, [user.email]);

  const lastWatered = plants.sort((a, b) => new Date(b.lastWatered) - new Date(a.lastWatered))[0];
  const upcomingWater = plants.sort((a, b) => new Date(a.nextWatering) - new Date(b.nextWatering))[0];
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const greeting = getGreeting();
  SetTitle("Dashboard");

  return (
    <div className="p-6 min-h-screen bg-base-200">
      {/* Greeting */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold text-primary">
          {greeting}, {user.displayName || "User"}!
        </h1>
      </div>

      {/* Logged-in User Profile */}
      <div
        className="flex flex-col items-center justify-center bg-base-300 dark:bg-base-300 p-6 rounded-xl shadow mb-10 w-full max-w-md mx-auto transform transition-all duration-300 hover:shadow-lg hover:scale-105 border dark:border-white
"
      >
        <img src={user.photoURL || "https://i.ibb.co/5rC6w8P/user.png"} alt="User" className="w-24 h-24 rounded-full border-2 border-primary object-cover mb-4" />
        <h2 className="text-2xl font-bold text-primary text-center">{user.displayName}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center break-words">{user.email}</p>
      </div>
      <div className="">
        <LocalNotes></LocalNotes>
      </div>

      {/* Dashboard Stats */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card icon={<FaLeaf size={24} />} title="Total Plants" value={allCount} bg="bg-green-100 dark:bg-green-800" />
        <Card icon={<FaUserCircle size={24} />} title="My Plants" value={myCount} bg="bg-blue-100 dark:bg-blue-800" />
        <Card icon={<FaListUl size={24} />} title="Top Category" value={commonCategory || "N/A"} bg="bg-purple-100 dark:bg-purple-800" />
        <Card icon={<FaTint size={24} />} title="Recently Watered" value={lastWatered?.plantname || "N/A"} bg="bg-rose-100 dark:bg-rose-800" />
        <Card icon={<FaCalendarCheck size={24} />} title="Next Watering" value={upcomingWater?.plantname || "N/A"} bg="bg-sky-100 dark:bg-sky-800" />
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ icon, title, value, bg }) => (
  <div className={`rounded-xl p-5 shadow text-center ${bg} flex flex-col items-center justify-center min-h-[10px]`}>
    <div className="text-primary mb-2">{icon}</div>
    <h3 className="text-base font-semibold mb-1">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default DashboardOverview;
