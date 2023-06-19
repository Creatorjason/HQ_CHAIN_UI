import React, {useState} from 'react'
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
// import { createBrowserHistory } from 'history';
import {  useNavigate } from "react-router-dom";
import axios from "axios";


const CreateWallet = () => {
    const [response, setResponse] = useState({})
    // const history = createBrowserHistory();
    const navigate = useNavigate();


    const options = {
        url : "https://hq-chain.onrender.com/api/wallet",
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        data : {
            "name":""
        }
    }
    const onSubmit = async ({formData}) =>{
        options.data.name = formData.name
        const res = await axios(options)
        setResponse(res);
        if (res.status === 200 && res.data?.message?.wallet_address?.length === 40) {
          setTimeout(()=>{
            navigate("/receive-airdrop")
          },6000)
        }
        // console.log(res)

    }
    const schema = {
        title: 'My Ogas at Qoinpal 🙇🏼, Food is ready 🧆🍗🍲🍜',
        type: 'object',
        required: ['name'],
        properties: {
          // Add placeholders
          name :{type: "string", title:"Name", default:""}
        },
      };
      const uiSchema = {
        'ui:submitButtonOptions': {
          submitText: 'Generate Wallet',
        }
      };
  return (
    <>
     <Form
        schema={schema}
        validator={validator}
        uiSchema={uiSchema}
        onSubmit= {onSubmit}
   />

   <h1>Wallet Address:</h1>
   <h3>{response.data?.message?.wallet_address}</h3>
    </>
   
  )
}

export default CreateWallet