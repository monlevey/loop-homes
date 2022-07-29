const express = require('express')
const router = express.Router()
const { 
    getListings, 
    setListing, 
    updateListing, 
    deleteListing 
} = require('../controllers/listingsController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getListings).post(protect, setListing)
router.route('/:id').delete(protect, deleteListing).put(protect, updateListing)

module.exports = router