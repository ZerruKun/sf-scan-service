import React from 'react'
import Document from '../Document/Document'
import styles from "./Documents.module.css"
import { observer } from 'mobx-react-lite'
import store from '../../../../store/store'

const Documents = observer(() => {
  return (
    <div className={styles.general}>
      <h3>Список документов</h3>
      <div className={styles.documents}>
        <Document 
          date={store.testPublishes[0].ok.issueDate.substring(0, 10).split("-").join(".")} 
          source={store.testPublishes[0].ok.source.name} 
          header={store.testPublishes[0].ok.title.text}
          isTechNews={store.testPublishes[0].ok.attributes.isTechNews}
          isAnnouncement={store.testPublishes[0].ok.attributes.isAnnouncement}
          isDigest={store.testPublishes[0].ok.attributes.isDigest}
          content={store.testPublishes[0].ok.content.markup}
          link={store.testPublishes[0].ok.url}
          words={store.testPublishes[0].ok.attributes.wordCount}
        />
      </div>
      <button className={styles.more}>Показать больше</button>
    </div>
  )
})

export default Documents
