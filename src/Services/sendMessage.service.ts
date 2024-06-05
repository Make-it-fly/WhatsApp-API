import { Request, Response } from 'express';
import WhatsAppClient from '../whatsAppClient';

export const sendMessageService = async (req: Request, res: Response, WhatsAppClient: WhatsAppClient) => {
    try {
        const {number, message} = req.body;
        let actualNumber = 0
        if((number).toString()[0] == 5 && (number).toString()[1] == 5){
            actualNumber = number
        } else {
            actualNumber = 55 + number
        }
        const consoleMessage = 'SENDING MESSAGE TO NUMBER: ' + actualNumber
        console.log(consoleMessage)
        await WhatsAppClient.sendMessage(
            actualNumber, 
            message
        )
        res.status(200).send({message: "message sent with success"})
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(400).send({message: 'error sending message:' + error.message})
    }
};