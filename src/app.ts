import express from 'express';
import cors from 'cors';  // Importe o pacote cors
import WhatsAppClient from './whatsAppClient';
import whatsappReady from './Middlewares/whatsappReady';
import { sendMessageController } from './Controllers/whatsapp.controller';

console.log("STARTING APP...")

const whatsAppClient = new WhatsAppClient()
whatsAppClient.startSock()


startServer()

function startServer () {
    setTimeout(() => {
        console.log("STARTING SERVER...")
        const app = express();

        app.use(cors())
        app.use(express.json());

        app.use(whatsappReady);

        app.post('/whatsapp/send-message', sendMessageController)
        try {
            app.listen(process.env.PORT || 30001, () => {
                console.log(`Server is running on port ${process.env.PORT || 30001}`);
            });
        } catch (error) {
            console.error('Error starting server:', error);
        }
    }, 3000)
}

export {whatsAppClient}


