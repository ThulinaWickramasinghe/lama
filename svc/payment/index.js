import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())

app.post("/payment-service", async (req, res) => {
    const { cart } = req.body;
    
    // assume we get the cookie and decrypt user id 
    const userId = "1234";

    // TODO: payment


    // kafka

    console.log("API endpoint hit");

    return res.status(200).send("Payment successful")
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message)
})

app.listen(8000, () => {
    console.log("Payment svc is running on port 8000")
})