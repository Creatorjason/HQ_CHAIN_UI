import React ,{ useState }from 'react';
import Form from "@rjsf/mui";
import Validator from "@rjsf/validator-ajv8";
import axios from "axios";

const ReceiveAirdrop = () => {
  const [response, setResponse] = useState({})
  const schema = {
    title: "TeamQoins Airdrop 💰 ",
    type:"object",
    required:["wallet_address"],
    properties:{
      wallet_address:{
        title: "Wallet Address",
        type : "string",
        // default : "Enter your wallet address 💳"
      }
    }
  };

  const uiSchema = {
    'ui:submitButtonOptions': {
      submitText: 'Receive Airdrop',
    }, 
    // 'ui:placeholder': 'http://',
  };
  let options = {
    url :"https://hq-chain.onrender.com/api/airdrop",
    method : "POST",
    headers : {
      Accept : "application/json",
      "Content-Type": "application/json"
    },
    data : {
      "wallet_address":""
    }
  };
  const onSubmit = async ({formData})=>{
    options.data.wallet_address = formData.address.trim()
    const res = await axios(options)
    setResponse(res)
  }




  return (
    <>
   <Form
    schema={schema}
    validator={Validator}
    uiSchema={uiSchema}
    onSubmit={onSubmit}
   />
   <h4>{response.data?.message}</h4>
    </>
  )
}

export default ReceiveAirdrop