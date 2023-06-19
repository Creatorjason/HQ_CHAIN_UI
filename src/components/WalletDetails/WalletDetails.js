import React, {useEffect, useState} from 'react'
import "./WalletDetails.css";
import { useWalletContext} from '../ReceiveAirdrop';
import {Link} from "react-router-dom";
import  axios from "axios";

const WalletDetails = () => {
  const {addr} = useWalletContext();
  const [balance, setBalance] = useState(0)
  console.log(addr)
  useEffect(() => {
    const options = {
      url: "https://hq-chain.onrender.com/api/wallet/" + addr,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json"
      }
    }
    async function fetchData(){
      const res = await axios(options)
      setBalance(res.data?.message?.account_balance);
    }
    // console.log(addr);
    fetchData();
  }, [options]);


  return (
    <div className="wallet-container">
      <h3>Wallet Address 💳:</h3>
      <h4>{addr}</h4>
      <h3>Balance 💰 :</h3>
      <h4>{balance} TQ</h4>
    <div className="btn-container">
      {/* <div className="button">Generate Wallet</div> */}
      <div className="button"><Link to="/send-coins">Send TeamQoins</Link></div>
    </div>
    </div>
  )
}

export default WalletDetails