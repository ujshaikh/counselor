import { useEffect, useState } from "react"

export default function Modal(props: { show: any }) {
    const { show } = props
    let displayStyle = {}
    const [ inlineStyle, setInlineStyle ] = useState(displayStyle)

    useEffect(() => {
        displayStyle = show.length > 0 ? {display: 'block', paddingRight: '17px'} : {display: 'none'}
        setInlineStyle(displayStyle)
        console.log('inlineStyle11', inlineStyle, show)
    }, [show])

    const onClose = () => {
        setInlineStyle(displayStyle)
        console.log('inlineStyle', inlineStyle)
    }

    return (
        <div className={`modal fade ${show}`} tabIndex={-1} role="dialog" aria-hidden="true" style={inlineStyle}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}