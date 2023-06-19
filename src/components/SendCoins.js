import React, {useState} from 'react'
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import axios from "axios";


const SendCoins = () => {
    const [response, setResponse] = useState({})
    const schema = {
        title:"Rich man, no forget your boy 🤓 💶 💴 💵",
        type: "object",
        required : ["sender", "receiver", "amount"],
        properties:{
            sender:{
                title:"sender",
                type:"string",
                minLength: 40,
            },
            receiver:{
                title:"receiver",
                type:"string",
                minLength: 40
            },
            amount : {
                title: "amount",
                type:"number",
            }
        }

    }
    const uiOptions = {
        'ui:submitButtonOptions': {
          submitText: 'Send TeamQoin',
        }
      };
    let  options = {
        url:"https://hq-chain.onrender.com/api/send",
        method : "POST",
        headers : {
            Accept : "application/json",
            "Content-Type":"application/json"
        },
        data : {
            "sender":"",
            "receiver":"",
            "amount":0
        }

    }
    const onSubmit = async ({formData}) =>{
        options.data.sender = formData.sender
        options.data.receiver = formData.receiver
        options.data.amount = Number(formData.amount)
        const res = await axios(options)
        setResponse(res)
    }  



  return (
    <>
    <Form
    schema={schema}
    validator={validator}
    uiSchema={uiOptions}
    onSubmit={onSubmit}
   >
   </Form>
   <h3 >{response.data?.message} for confirmation view blockchain <br/>
    <a href="hq-chain.onrender.com">here</a></h3>
</>
   


  )
}

export default SendCoins