import { useEffect, useRef } from 'react'
import { useCursor } from '@/hooks/useCursor'

import styles from './Cursor.module.scss'

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  const { cursorType } = useCursor()

  const onUpdateMousePositionEventHandler = () => {
    document.addEventListener(`mousemove`, (e: MouseEvent) => {
      if (cursorRef && cursorRef.current) {
        cursorRef.current.className = `${styles.cursor} ${styles.pulse}`
        cursorRef.current.setAttribute(
          `style`,
          `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px`
        )
      }
    })

    return () => {
      document.removeEventListener(`mousemove`, (e: MouseEvent) => {
        if (cursorRef && cursorRef.current) {
          cursorRef.current.className = `${styles.cursor} ${styles.pulse}`
          cursorRef.current.setAttribute(
            `style`,
            `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px`
          )
        }
      })
    }
  }

  const onClickEventHandler = () => {
    document.addEventListener(`click`, () => {
      if (cursorRef && cursorRef.current) {
        cursorRef.current.className = `${styles.cursor} ${styles.expand}`

        setTimeout(() => {
          cursorRef.current!.className = `${styles.cursor}`
        }, 500)
      }
    })

    return () => {
      document.removeEventListener(`click`, () => {
        if (cursorRef && cursorRef.current) {
          cursorRef.current.className = `${styles.cursor} ${styles.expand}`

          setTimeout(() => {
            cursorRef.current!.className = `${styles.cursor}`
          }, 500)
        }
      })
    }
  }

  const onMouseHoverEventHandler = () => {
    document.addEventListener(`mouseover`, () => {
      if (cursorRef && cursorRef.current) {
        cursorRef.current.className = `${styles.cursor} ${styles.fill}`
      }
    })

    document.addEventListener(`mouseout`, () => {
      if (cursorRef && cursorRef.current) {
        cursorRef.current.className = `${styles.cursor} ${styles.pulse}`
      }
    })

    return () => {
      document.removeEventListener(`mouseover`, () => {
        if (cursorRef && cursorRef.current) {
          cursorRef.current.className = `${styles.cursor} ${styles.fill}`
        }
      })

      document.removeEventListener(`mouseout`, () => {
        if (cursorRef && cursorRef.current) {
          cursorRef.current.className = `${styles.cursor} ${styles.pulse}`
        }
      })
    }
  }

  useEffect(() => {
    onUpdateMousePositionEventHandler()
    onClickEventHandler()
  }, [])

  // useEffect(() => {
  //   switch (cursorType) {
  //     case 'hover':
  //       console.log('hover')
  //       cursorRef.current!.className = `${styles.cursor} ${styles.fill}`
  //       break;

  //     case 'not-allowed':
  //       break;

  //     default:
  //       cursorRef.current!.className = `${styles.cursor} ${styles.pulse}`
  //       break;
  //   }

  // }, [cursorType])

  return (
    <div ref={cursorRef} className={`${styles.cursor} ${styles.cursorType}`} />
  )
}
