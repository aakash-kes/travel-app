import React from 'react'
import Layout from '../../Component/Layout/Layout'
import Slider from './Slider'
import PopularDestination from './PopularDestination'
import UpComingTours from './UpComingTours'
import UpcomingActivities from './UpcomingActivities'
import TravelThemes from './TravelThemes'
import BgVideos from './BgVideos'

const Home = () => {
  return (
    <Layout>
      <Slider />
      <UpComingTours />
      <PopularDestination />
      <UpcomingActivities />
      <TravelThemes />
      <BgVideos />
    </Layout>
  )
}

export default Home
