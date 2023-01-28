import React from 'react'
// import Authorization from "../../../pages/Authorization/Authorization"
import Landing from '../../../pages/Landing/Landing'
// import Search from '../../../pages/Search/Search'
// import SearchResult from '../../../pages/SearchResult/SearchResult'
import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={styles.general}>
      <Landing />
      {/* <Authorization /> */}
      {/* <Search /> */}
      {/* <SearchResult /> */}
    </div>
  )
}

export default Main
