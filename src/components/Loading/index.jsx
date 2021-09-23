import React from 'react'
import styles from './styles.module.css'

export default function Loading ({ children, show }) {
  const loading = (
    <div className={styles.loadingContainer}>
      <img src='img/loading.gif' className={styles.loadingImage} />
    </div>
  )
  return (
    <>
      {!show ? children : loading}
    </>
  )
}
