
import twilio from "twilio";
import dotenv from 'dotenv';
dotenv.config()
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;


export default async function sendSMS(messageBody,toPhoneNumber){
    const client = new twilio(accountSid, authToken);

   
      try {
        const message = await client.messages.create({
          body: messageBody,
          to: toPhoneNumber,
          from: "+17087264376",
        });
        console.log(`Message sent with SID: ${message.sid}`);
        return message.sid; // Return SID or any other meaningful response
      } catch (error) {
        console.error(`Failed to send message: ${error.message}`);
        throw error;
      }
    }
    
   

