"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState("compile");

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent rounded-full blur-3xl -z-10"></div>
        <h1 className="text-5xl font-bold mb-6">The journey of Molazy</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          An extension for Visual Studio Code allow use interface to execute Movement
          command without set up environment in local.
        </p>
        <Button variant="secondary" className="bg-purple-900/50 hover:bg-purple-900/70 text-white">
          Start building
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-6 mb-8">
        <Button 
          variant="ghost" 
          className={activeTab === "compile" ? "text-purple-400 bg-purple-500/10" : "text-gray-400 hover:text-purple-400"}
          onClick={() => setActiveTab("compile")}
        >
          Compile
        </Button>
        <Button 
          variant="ghost" 
          className={activeTab === "tester" ? "text-purple-400 bg-purple-500/10" : "text-gray-400 hover:text-purple-400"}
          onClick={() => setActiveTab("tester")}
        >
          Tester
        </Button>
        <Button 
          variant="ghost" 
          className={activeTab === "deploy" ? "text-purple-400 bg-purple-500/10" : "text-gray-400 hover:text-purple-400"}
          onClick={() => setActiveTab("deploy")}
        >
          Deploy
        </Button>
      </div>

      {/* Content based on active tab */}
      {activeTab === "compile" && (
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/20 to-blue-900/20 p-8 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Compile</h2>
              <p className="text-gray-400">
                This section provides information about the compile process, including how to set up your environment and run the necessary commands.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/Compile.png"
                width={800}
                height={600}
                alt="Compile Process"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "tester" && (
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/20 to-blue-900/20 p-8 border border-purple-500/20 mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tester</h2>
              <p className="text-gray-400">
                This section covers the testing phase, including how to run tests and validate your code.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/Tester.png"
                width={800}
                height={600}
                alt="Testing Process"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "deploy" && (
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/20 to-blue-900/20 p-8 border border-purple-500/20 mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Deploy</h2>
              <p className="text-gray-400">
                This section explains the deployment process, including how to deploy your application to production.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/Deploy.png"
                width={800}
                height={600}
                alt="Deployment Process"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
