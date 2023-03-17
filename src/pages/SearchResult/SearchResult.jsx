import React, {useEffect} from 'react'
import Documents from '../../components/Middle/SearchResult/Documents/Documents'
import Searching from '../../components/Middle/SearchResult/Searching/Searching'
import Summary from '../../components/Middle/SearchResult/Summary/Summary'
import styles from "./SearchResult.module.css"
import store from '../../store/store'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router'
import Loader from '../../components/Other/Loader/Loader'

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
      {store.isSummaryLoading === true ? (
        // Намеренно сделано без "суммарного окна" - так симпатичнее.
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        store.isSummaryError === true ? (
          <div className={styles.noResults}>
            <p>Ваши статьи в другом замке!</p>
            <p>Попробуйте изменить условия запроса.</p>
            <button onClick={() => {store.setIsSummaryAllowed(false); navigate("/search");}}>Попробовать снова</button>
          </div>
        ) : (
          <>
          <Summary />
          <Documents />
        </>
        )
      )}

    </div>
  )
})

export default SearchResult