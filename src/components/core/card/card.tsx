import clsx from 'clsx'
import { motion } from 'motion/react'
import { useMemo } from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@components'

import styles from './card.module.scss'

interface ICard {
  url?: string
  image?: string
  content?: React.ReactNode
  onClick?: () => void
  checked?: boolean
}

export const Card = ({ url, image, content, onClick, checked = false }: ICard) => {
  const classes = clsx(styles['card'], checked && styles['card--checked'])

  const getContent = useMemo(() => {
    return (
      <>
        {image && (
          <>
            <span className={styles['card__overlay']}></span>
            <img className={styles['card__image']} src={image} alt='' />
          </>
        )}

        {content && <span className={styles['card__content']}>{content}</span>}
      </>
    )
  }, [image, content])

  const renderCard = useMemo(() => {
    if (onClick) {
      return (
        <Button onClick={onClick} className={classes} tabIndex={0}>
          {getContent}
        </Button>
      )
    }

    if (url) {
      return (
        <Link to={url} tabIndex={0} className={classes}>
          {getContent}
        </Link>
      )
    }

    return getContent
  }, [classes])

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.05,
          ease: 'easeInOut',
        },
      }}
    >
      {renderCard}
    </motion.div>
  )
}
