const asyncHandler = require('express-async-handler')

// @desc Get listings
// @route GET /api/listings
// @access Private

const getListings = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get listings'})
})

// @desc Set listing
// @route POST /api/listings
// @access Private

const setListing = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set listing'})
})

// @desc Update listing
// @route PUT /api/listings/:id
// @access Private

const updateListing = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update listing ${req.params.id}` })
})

// @desc Delete listing
// @route DELETE /api/listings/:id
// @access Private

const deleteListing = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete listing ${req.params.id}` })
})

module.exports = {
    getListings,
    setListing,
    updateListing,
    deleteListing,
}