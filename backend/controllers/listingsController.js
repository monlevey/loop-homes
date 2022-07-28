const asyncHandler = require('express-async-handler')

const Listing = require('../models/listingsModel')

// @desc Get listings
// @route GET /api/listings
// @access Private

const getListings = asyncHandler(async (req, res) => {
    const listings = await Listing.find()

    res.status(200).json(listings)
})

// @desc Set listing
// @route POST /api/listings
// @access Private

const setListing = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const listing = await Listing.create({
        text: req.body.text
    })

    res.status(200).json(listing)
})

// @desc Update listing
// @route PUT /api/listings/:id
// @access Private

const updateListing = asyncHandler(async (req, res) => {
    const listing = await Listing.findById(req.params.id)

    if (!listing) {
        res.status(400)
        throw new Error('Listing not found')
    }

    const updateListing = await Listing.findByIdAndUpdate(req.params.id, req.body, 
        {
        new:true, 
        })

    res.status(200).json(updateListing)
})

// @desc Delete listing
// @route DELETE /api/listings/:id
// @access Private

const deleteListing = asyncHandler(async (req, res) => {

    const listing = await Listing.findById(req.params.id)

    if (!listing) {
        res.status(400)
        throw new Error('Listing not found')
    }

    await listing.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getListings,
    setListing,
    updateListing,
    deleteListing,
}