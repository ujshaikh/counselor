'use client'
import Link from 'next/link';
import React, { SyntheticEvent, useEffect, useState } from 'react';

// class ExpandText extends React.Component {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             showFull: false
//         };
//     }

//     render() {
//         let visibleText = null;
//         if (this.state.showFull || this.props.text.length <= this.props.maxLength) {
//             visibleText = this.props.text;
//         } else {
//             const firstHalf = this.props.text.substring(0, this.props.maxLength);
//             // const secondHalf = this.props.text.substring(this.props.text.length - (this.props.maxLength / 2), this.props.text.length)
//             visibleText = `${firstHalf}...`;
//         }
//         const self = this;
//         const clickHandler = () => {
//             self.setState({showFull: !self.state.showFull});
//         }
//         return <p className={this.props.className}>{visibleText} - <span onClick={clickHandler}>More</span></p>;
//   }
// }

export default function ExpandText({text, maxLength, className}: any) {
    const [showFull, setShowFull] = useState(false)
    const [visibleText, setVisibleText] = useState('')

    useEffect(() => {
        if (showFull || text.length <= maxLength) {
            setVisibleText(text)
        } else {
            const lessContent = text.substring(0, maxLength)
            setVisibleText(`${lessContent}...`)
        }
    }, [showFull, text, maxLength])

    const clickHandler = (e: SyntheticEvent): void => {
        e.preventDefault()
        e.stopPropagation()
        setShowFull(!showFull)
    }

    return <p className={className}>{visibleText}<Link href='#' className="ml-2 text-decoration text-primary" onClick={clickHandler}>{!showFull ? 'More' : 'Less'}</Link></p>
}