import { useEffect, useState } from "react"

export default function Modal(props: any) {
    const { isOpen, title } = props
    let displayStyle = {}
    const [ inlineStyle, setInlineStyle ] = useState(displayStyle)
    const [showCls, setShowCls] = useState('')

    useEffect(() => {
        displayStyle = isOpen ? {display: 'block', paddingRight: '17px'} : {display: 'none'}
        setInlineStyle(displayStyle)
        setShowCls(isOpen ? 'show' : '')
    }, [isOpen])

    const onClose = () => {
        setInlineStyle(displayStyle)
    }

    return (
        <div className={`modal fade ${showCls}`} tabIndex={-1} role="dialog" aria-hidden="true" style={inlineStyle}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
                        <button type="button" className="close" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}