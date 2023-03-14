import React, { useEffect } from 'react'
import Document from '../Document/Document'
import styles from "./Documents.module.css"
import { observer } from 'mobx-react-lite'
import store from '../../../../store/store'


const Documents = observer(() => {
  
  // Для проверки
  useEffect(() => {
    if(store.publishIds[0] !== undefined && store.publishIds[1] !== undefined) {
      store.getInitPublishes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.publishIds]);

  return (
    <div className={styles.general}>
      <h3>Список документов</h3>
      <div className={styles.documents}>
        {store.publishes.map((article, index) => {
          return(
            article.ok === undefined ? <div key={index}></div> :
            <Document 
              key={article.ok.id}
              date={article.ok.issueDate.substring(0, 10).split("-").join(".")} 
              source={article.ok.source.name} 
              header={article.ok.title.text}
              isTechNews={article.ok.attributes.isTechNews}
              isAnnouncement={article.ok.attributes.isAnnouncement}
              isDigest={article.ok.attributes.isDigest}
              content={article.ok.content.markup}
              link={article.ok.url}
              words={article.ok.attributes.wordCount}
            />
          )
        })}
      </div>
      <button className={styles.more}>Показать больше</button>
    </div>
  )
})

export default Documents
