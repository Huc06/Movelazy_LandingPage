"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';

const TabButton: React.FC<{ tab: string; isActive: boolean; onClick: () => void }> = ({ tab, isActive, onClick }) => (
  <motion.button
    className={`pb-2 text-lg font-medium transition-all ${isActive ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"} hover:text-white`}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {tab}
  </motion.button>
);

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Code Editor");
  const [imageSrc, setImageSrc] = useState("/path/to/your/image.png");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "Compile") {
      setImageSrc("/Compile.png");
    } else if (tab === "Tester") {
      setImageSrc("/Tester.png");
    } else if (tab === "Deploy") {
      setImageSrc("/Deploy.png");
    }
  };

  return (
    <main className="flex flex-col items-center p-6 bg-slate-950">
      {/* Hero Section */}
      <section className="flex flex-col items-center mt-20 button-3d">
        <motion.h1 
          className="text-5xl font-bold text-center text-white"
          whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
          transition={{ duration: 0.3 }}
        >
          The Journey of Movelazy
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-300 mb-8 text-center"
          whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
          transition={{ duration: 0.3 }}
        >
          An extension for Visual Studio Code allow use interface to execute Movement command without set up environment in local. 
        </motion.p>
        <motion.button 
          className="bg-black-600 text-white py-2 px-6 rounded shadow-lg hover:bg-pink-700 hover:shadow-xl transition-all transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Start building
        </motion.button>
      </section>

      <div className="tabs flex space-x-4 mt-6 tab-3d">
        {["Compile", "Tester", "Deploy"].map((tab) => (
          <TabButton key={tab} tab={tab} isActive={activeTab === tab} onClick={() => handleTabChange(tab)} />
        ))}
      </div>

      <div className="mt-8 w-full flex">
        <div className="w-1/2 bg-gray-800 p-4 rounded-lg text-white">
          {activeTab === "Compile" && (
            <>
              <h2 className="text-2xl font-bold">Compile</h2>
              {/* <p className="mt-4">Tailored to the Sui Move language with features like:</p> */}
              <ul className="mt-2 list-disc list-inside">
                {/* <li>Built-in compiling</li>
                <li>Syntax highlighting for the Sui Move language</li>
                <li>Fully integrated with Move testing framework</li> */}
              </ul>
            </>
          )}

          {activeTab === "Tester" && (
            <div>
              <h2 className="text-2xl font-bold">Tester</h2>
              {/* <p className="mt-4">Manage your code packages effortlessly.</p> */}
            </div>
          )}

          {activeTab === "Deploy" && (
            <div>
              <h2 className="text-2xl font-bold">Deploy</h2>
              {/* <p className="mt-4">Access all on-chain objects:</p>
              <ul className="mt-2 list-disc list-inside">
                <li>View attributes of on-chain objects</li>
                <li>Look at object modification history in transactions</li>
              </ul> */}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 bg-gray-900 p-4 rounded-lg flex items-center justify-center">
          <Image 
            src={imageSrc} 
            alt={`${activeTab} Preview`} 
            className="w-full h-auto rounded-lg" 
            layout="responsive" 
            width={500}
            height={300}
          />
        </div>
      </div>
    </main>
  );
};

export default Homepage;