import { Router } from 'express'
import playersRoutes from './players.js'
import matchesRoutes from './matches.js'
import playerRoutes from './player.js'
import dashboardRoutes from './dashboard.js'
import authRoutes from './auth.js'

const router = Router()

router.use('/players', playersRoutes)
router.use('/matches', matchesRoutes)
router.use('/player', playerRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/auth', authRoutes)

export default router
