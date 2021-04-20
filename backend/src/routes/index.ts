import express from 'express'
import getLeagueCredentials from './getLeagueCredentials'

const router = express.Router()

router.use("/credentials", getLeagueCredentials)

export default router