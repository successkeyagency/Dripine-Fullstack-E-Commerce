import express from "express"
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
import { updateStatus,placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, UserOrders, verifyStripe } from "../controllers/orderController.js"

const orderRouter = express.Router()

//admin
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

//payments
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)

//user
orderRouter.post('/userOrders',authUser, UserOrders,)

//payment verify
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter