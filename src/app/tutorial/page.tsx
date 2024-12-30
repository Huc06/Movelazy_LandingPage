"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { useState } from 'react';

const TutorialPage = () => {
  const [activeSection, setActiveSection] = useState("gioi-thieu");

  return (
    <div 
      className="min-h-screen bg-black text-white border-b border-gray-600"
      style={{ backgroundImage: "url('/Background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Header />
      <main className="flex min-h-screen border border-gray-700 rounded-lg shadow-lg p-6">
        <aside className="w-1/4 p-6 border border-gray-600 rounded-lg shadow-lg">
          <ul className="space-y-2">
            <li>
              <Link 
                href="#" 
                onClick={() => setActiveSection("gioi-thieu")} 
                className={`transition duration-300 ${activeSection === "gioi-thieu" ? "text-purple-400 bg-gray-700 border border-purple-400" : "text-white"}`}
              >
                Introduction
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                onClick={() => setActiveSection("aptos")} 
                className={`transition duration-300 ${activeSection === "aptos" ? "text-purple-400 bg-gray-700 border border-purple-400" : "text-white"}`}
              >
                Aptos
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                onClick={() => setActiveSection("solidity")} 
                className={`transition duration-300 ${activeSection === "solidity" ? "text-purple-400 bg-gray-700 border border-purple-400" : "text-white"}`}
              >
                Solidity
              </Link>
            </li>
          </ul>
        </aside>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-center mb-6 space-x-4">
            <Link href="/" className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>
              </svg>
            </Link>
            <span>|</span>
            <motion.h1 
              className="text-4xl font-extrabold text-center text-yellow-300"
              whileHover={{ scale: 1.1, rotateY: 15, rotateX: 15 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === "gioi-thieu" ? "Introduction" : activeSection === "aptos" ? "Aptos" : "Solidity"}
            </motion.h1>
          </div>

          {activeSection === "gioi-thieu" && (
            <section id="gioi-thieu" className="mb-8">
              <h2 className="text-3xl font-bold mb-4">What is Movelazy?</h2>
              <p className="text-gray-400 mb-4">
                Movelazy is a Visual Studio Code extension that allows users to execute movement commands easily through an intuitive interface, removing the necessity for local environment setup. This tool is designed to streamline the execution of movement-related commands, making it user-friendly for developers of all experience levels.
              </p>
            </section>
          )}

          {activeSection === "aptos" && (
            <section id="aptos" className="mb-8">
              
              <h3 className="text-2xl font-semibold mb-2">If you are an Aptos developer, please select the Aptos feature.</h3>
              <ol className="list-decimal list-inside text-gray-400 mb-4">
                <li>
                  Create a working directory - Before starting with Movelazy, you need to create an empty directory in your working folder. This is the first step to ensure everything is organized correctly.
                </li>
                <li>
                  Open this folder in Visual Studio Code.
                </li>
                <li>
                  Select the development platform - In the Movelazy interface, you will see two main options: &quot;Solidity&quot; and &quot;Aptos&quot;. If you want to develop on the Aptos platform, click on the &quot;Aptos&quot; option.
                </li>
                <li>
                  Click on the &quot;Initialize Aptos Project&quot; button - When you click this button, Movelazy will:
                  <ul className="list-disc list-inside">
                    <li>Initialize a new npm project (if it doesn&apos;t already exist).</li>
                    <li>Install Aptos and the necessary dependencies for developing on the Aptos platform.</li>
                    <li>Create the initial project structure, preparing the development environment.</li>
                  </ul>
                </li>
                <li>
                  Configure the compiler
                  <ul className="list-disc list-inside">
                    <li>Package directory: Use the command in the terminal to get the current path and fill it in here. Make sure this path is the correct directory you created in the first step. If left blank, it will take the current directory.</li>
                    <li>Chain management: Choose one of the testnets: - Proto - Suzuka - Bardock</li>
                    <li>Module name: Enter the module name as the name of the project you created: hello_blockchain</li>
                    <li>Move version: Choose the Move version you want to use.</li>
                    <li>Enable optimization: If you want, you can enable this option to optimize compilation performance.</li>
                    <li>Bytecode Hash: Choose the type of hash you want to use.</li>
                  </ul>
                </li>
                <li>
                  Compile the source code - After writing your smart contract, ensure all configurations are set. Click the &quot;Compile&quot; button to initiate the compilation of the Aptos source code for the hello_blockchain module.
                </li>
                <li>
                  Unit testing - Navigate to the Testing section: Select the &quot;Tester&quot; tab in Movelazy and click the &quot;Tester&quot; button to begin executing your tests.
                </li>
                <li>
                  Deploy Smart Contract
                  <ul className="list-disc list-inside">
                    <li>Go to deployment settings: 1. Go to the &quot;Deploy&quot; tab in Movelazy 2. The system automatically creates an account for you.</li>
                    <li>Account management: The created account address. The public and private keys are generated automatically. Click &quot;Connect&quot; to create a new wallet if you want to deploy multiple times. Each time you Connect, a new key will be created.</li>
                    <li>Prepare for deployment: Check the address named: hello_blockchain. Click &quot;Faucet&quot; to receive testnet tokens. Wait for balance confirmation.</li>
                    <li>Deploy: Click the &quot;Deploy&quot; button to deploy the smart contract. Wait for transaction confirmation. Make sure to accept the transaction in the notification. You can check the status of your transaction using Movement Explorers.</li>
                  </ul>
                </li>
                <li>
                  <strong>Note:</strong> If you use &quot;Connect&quot; to create a new wallet, remember to copy the Account Address, Public Key, and Private Key into the config.yaml file in the current directory for easier management. Store the private key securely each time you create a new wallet. Ensure you have enough balance to deploy. Check the information before deploying. Remember the contract address after each successful deployment. After copying to config.yaml, you must recompile to continue the deployment process.
                </li>
              </ol>
            </section>
          )}

          {activeSection === "solidity" && (
            <section id="solidity" className="mb-8">
              <h2 className="text-3xl font-bold mb-4">If you are a Solidity developer, please select the Solidity feature.</h2>
              <p className="text-gray-400 mb-4">
                Solidity is a programming language used to write smart contracts on the Ethereum platform and compatible blockchains.
              </p>
              <h3 className="text-2xl font-semibold mb-2">Verify the project:</h3>
              <p className="text-gray-400 mb-4">
                When accessing the tool, the system will automatically check if the current workspace is a Solidity contract project. If not, you will be prompted to initialize a new workspace.
              </p>
              <h3 className="text-2xl font-semibold mb-2">Access the Compile page:</h3>
              <p className="text-gray-400 mb-4">
                After initialization, you will be redirected to the Compile page.
              </p>
              <h3 className="text-2xl font-semibold mb-2">Write Smart Contracts:</h3>
              <p className="text-gray-400 mb-4">
                You can write your smart contracts and place them in the contracts folder. On the Solidity Compile page, you can customize the compilation settings. Click the &quot;Compile&quot; button for the system to automatically compile all contracts in the contracts folder in preparation for deployment. Use the &quot;Clean&quot; button to delete compiled files if necessary.
              </p>
              <h3 className="text-2xl font-semibold mb-2">Deploy Contract:</h3>
              <p className="text-gray-400 mb-4">
                After the compilation process is complete, navigate to the Deploy page. If you choose the &quot;local&quot; network: The system will provide you with 20 accounts in the local network to deploy contracts. If you choose the &quot;custom&quot; network: Enter the network name, RPC URL, Chain ID, and your private key. Select the compiled contract to deploy. Upon successful deployment, the system will return the hash of the deployed contract on the network.
              </p>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TutorialPage;
