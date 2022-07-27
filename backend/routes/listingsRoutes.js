const express = require('express')
const router = express.Router()
const { 
    getListings, 
    setListing, 
    updateListing, 
    deleteListing 
} = require('../controllers/listingsController')

router.route('/').get(getListings).post(setListing)
router.route('/:id').delete(deleteListing).put(updateListing)

module.exports = router