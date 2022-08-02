import { useDispatch } from 'react-redux'
import { deletelisting } from '../features/listings/listingSlice'

function ListingItem({ listing }) {
  const dispatch = useDispatch()

  return (
    <div className='listing'>
      <div>{new Date(listing.createdAt).toLocaleString('en-US')}</div>
      <h2>{listing.text}</h2>
      <button onClick={() => dispatch(deletelisting(listing._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default ListingItem