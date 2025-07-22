import React from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import Footer from "../components/Footer";
import { useState,useEffect} from "react";
const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }
  

  

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased ">
      <AppBar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-10 pb-10">
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <Balance />
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <Users />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
