import { useContext } from "react";
import { Context } from "../lib/contextapi";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
  const { users, handleSendMoney, searchTerm, setSearchTerm } = useContext(Context);

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-6">
      <div className="max-w-md w-full mx-auto space-y-4">

        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-indigo-500">Users</h2>
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* User List */}
        <div className="space-y-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                className="bg-zinc-900 p-4 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-600 text-white p-2 rounded-full">
                    <FaUser className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{user.firstName} {user.lastName}</h3>
                    <p className="text-sm text-zinc-400">{user.email}</p>
                  </div>
                </div>

                {/* Send Button */}
                <button
                  onClick={() => handleSendMoney(user)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg w-full sm:w-auto transition"
                >
                  Send Money
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-zinc-500">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
