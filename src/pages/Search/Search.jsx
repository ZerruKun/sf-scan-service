import React from 'react'
import Discription from '../../components/Middle/Search/Discription/Discription'
import DocksPic from '../../components/Middle/Search/DocksPic/DocksPic'
import RocketPic from '../../components/Middle/Search/RocketPic/RocketPic'
import SearchingForm from '../../components/Middle/Search/SearchingForm/SearchingForm'
import styles from "./Search.module.css"

const Search = () => {
  return (
    <div className={styles.general}>
      <div className={styles.top}>
        <Discription />
        <DocksPic />
      </div>
      <div className={styles.buttom}>
        <SearchingForm />
        <RocketPic />
      </div>
    </div>
  )
}

export default Search
