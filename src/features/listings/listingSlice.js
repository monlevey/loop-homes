import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import listingService from './listingService'

const initialState = {
  listings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new listing
export const createlisting = createAsyncThunk(
  'listings/create',
  async (listingData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await listingService.createlisting(listingData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user listings
export const getlistings = createAsyncThunk(
  'listings/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await listingService.getlistings(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user listing
export const deletelisting = createAsyncThunk(
  'listings/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await listingService.deletelisting(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createlisting.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createlisting.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listings.push(action.payload)
      })
      .addCase(createlisting.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getlistings.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getlistings.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listings = action.payload
      })
      .addCase(getlistings.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletelisting.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletelisting.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listings = state.listings.filter(
          (listing) => listing._id !== action.payload.id
        )
      })
      .addCase(deletelisting.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = listingSlice.actions
export default listingSlice.reducer