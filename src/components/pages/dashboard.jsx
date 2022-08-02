import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ListingForm from '../listingForm'
import ListingItem from '../listingItem'
import Spinner from '../spinner'
import { getlistings, reset } from '../../features/listings/listingSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { listings, isLoading, isError, message } = useSelector(
    (state) => state.listings
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getlistings())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>listings Dashboard</p>
      </section>

      <ListingForm />

      <section className='content'>
        {listings.length > 0 ? (
          <div className='listings'>
            {listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
            ))}
          </div>
        ) : (
          <h3>You have not set any listings</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
