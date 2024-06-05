import "./App.css";
import { useState } from "react";
//import {contractaddress} from '../config';
//import {transcation} from '../utils/trasaction.json';
const ethers = require("ethers");

function App() {
  const [walletAddress, setwalletAddress] = useState("");

  async function requestAccount() {
    //check if meta mask extension exists
    if (window.ethereum) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setwalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting.....");
      }
    } else {
      console.log("metamask not detected");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    } else {
      alert(
        "ERROR: Ethereum Wallet NOT DETECTED. please connect your ethereum wallet to the browser"
      );
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>FUND DETAILS</h1>
        <h2>FUND NAME:</h2>
        <h2>DURATION: </h2>
        <h2>STATUS:ONGOING</h2>
        <button onClick={connectWallet}>TRANSFER FUND</button>
        <h3>Wallet Address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
