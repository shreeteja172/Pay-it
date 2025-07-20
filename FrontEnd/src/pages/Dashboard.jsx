import React from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased">
      <AppBar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-10">
        {/* Balance Section */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <Balance />
        </section>

        {/* Users Section */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <Users />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
