import React, {useEffect} from 'react'
import Documents from '../../components/Middle/SearchResult/Documents/Documents'
import Searching from '../../components/Middle/SearchResult/Searching/Searching'
import Summary from '../../components/Middle/SearchResult/Summary/Summary'
import styles from "./SearchResult.module.css"
import store from '../../store/store'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router'

const SearchResult = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    store.checkToken();
    if(store.token === "") {
      navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className={styles.general}>
      <Searching />
      <Summary />
      <Documents />
    </div>
  )
})

export default SearchResult