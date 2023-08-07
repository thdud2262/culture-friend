'use client'
import React, {useState} from 'react'
import styles from './_cultureCalendar.module.css'

export default function ExpandedViewText({text}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleTextExpansion = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
  <div
  className={isExpanded? styles.expandedText : ""}
    onMouseEnter={toggleTextExpansion}
    onMouseLeave={toggleTextExpansion}
  >
    {text}
  </div>
  )
}
