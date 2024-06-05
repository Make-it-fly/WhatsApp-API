import { whatsAppClient } from "../app";

const whatsappReady = (req, res, next) => {
    if (!whatsAppClient.getSocket()) {
        return res.status(503).send('WhatsApp Client is not ready yet. Please try again later.');
    }
    next();
};

export default whatsappReady;
