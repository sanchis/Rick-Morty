import React, { useRef } from 'react'
import styles from './styles.module.css'

export default function Loading ({ children, show }) {
  const ref = useRef()

  const loading = (
    <div className={styles.loadingContainer}>
      <div
        className={styles.loadingIndicator} style={{
          height: ref?.current?.clientHeight ?? 0
        }}
      >
        <img src='img/loading.png' className={styles.loadingImage} />
      </div>
      <div ref={ref} style={{ zIndex: '-1000' }}>
        {children}
      </div>
    </div>
  )
  return (
    <>
      {!show ? children : loading}
    </>
  )
}
