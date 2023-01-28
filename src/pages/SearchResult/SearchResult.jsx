import React from 'react'
import Documents from '../../components/Middle/SearchResult/Documents/Documents'
import Searching from '../../components/Middle/SearchResult/Searching/Searching'
import Summary from '../../components/Middle/SearchResult/Summary/Summary'
import styles from "./SearchResult.module.css"

const SearchResult = () => {
  return (
    <div className={styles.general}>
      <Searching />
      <Summary />
      <Documents />
    </div>
  )
}

export default SearchResult