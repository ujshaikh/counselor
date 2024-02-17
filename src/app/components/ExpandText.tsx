'use client'
import Link from 'next/link';
import React, { SyntheticEvent, useEffect, useState } from 'react';

export default function ExpandText({text, maxLength, className}: any) {
    const [showFull, setShowFull] = useState(false)
    const [visibleText, setVisibleText] = useState('')

    useEffect(() => {
        if (showFull || (text && text.length <= maxLength)) {
            setVisibleText(text)
        } else {
            const lessContent = text?.substring(0, maxLength)
            setVisibleText(`${lessContent}...`)
        }
    }, [showFull, text, maxLength])

    const clickHandler = (e: SyntheticEvent): void => {
        e.preventDefault()
        e.stopPropagation()
        setShowFull(!showFull)
    }

    return <p className={className}>{visibleText}{text && text.length != maxLength && <Link href='#' className="ml-2 text-decoration text-primary" onClick={clickHandler}>{!showFull ? 'More' : 'Less'}</Link>}</p>
}