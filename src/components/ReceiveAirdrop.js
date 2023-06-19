import React from 'react';
import Form from "@rjsf/mui";
import Validator from "@rjsf/validator-ajv8";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {create} from "zustand";

const useWalletStore = create((set) => ({
  response: {},
  addr: "",
  setResponse: (res) => set({ response: res }),
  setAddr: (address) => set({ addr: address }),
}));

const ReceiveAirdrop = () => {
  const walletStore = useWalletStore();
  const navigate = useNavigate();

  const schema = {
    title: "TeamQoins Airdrop 💰",
    type: "object",
    required: ["wallet_address"],
    properties: {
      wallet_address: {
        title: "Wallet Address",
        type: "string",
        // default : "Enter your wallet address 💳"
      },
    },
  };

  const uiSchema = {
    "ui:submitButtonOptions": {
      submitText: "Receive Airdrop",
    },
    // 'ui:placeholder': 'http://',
  };

  let options = {
    url: "https://hq-chain.onrender.com/api/airdrop",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      wallet_address: "",
    },
  };

  const onSubmit = async ({ formData }) => {
    let address = formData.wallet_address.trim();
    options.data.wallet_address = address;
    const res = await axios(options);
    walletStore.setResponse(res);
    walletStore.setAddr(address);
    if (res.status === 200) {
      setTimeout(() => {
        navigate("/wallet");
      }, 4000);
    }
  };

  return (
    // <WalletContext.Provider value={walletStore}>
    <>
      <Form schema={schema} validator={Validator} uiSchema={uiSchema} onSubmit={onSubmit} />
      <h4>
        {walletStore.response.data?.message} {walletStore.addr}✨
      </h4>
    </>

    // </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const walletStore = useWalletStore();
  return walletStore;
};

export default ReceiveAirdrop;
