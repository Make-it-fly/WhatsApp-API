import { sendMessageService } from "../Services/sendMessage.service";
import { Request, Response } from 'express';
import { whatsAppClient } from "../app";

export const sendMessageController = (req:Request, res:Response) => {
    sendMessageService(req, res, whatsAppClient)
};

