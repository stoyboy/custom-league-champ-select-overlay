import express from 'express'
import { authenticate } from 'league-connect'

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const credentials = await authenticate()

        res.json({
            port: credentials.port,
            pid: credentials.pid,
            username: "riot",
            password: credentials.password,
            certificate: credentials.certificate
        })
    }
    catch (err) { 
        res.status(500)
        res.json({
            error: "League of Legends Client is not active"
        })
    }
})

export default router