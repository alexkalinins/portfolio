import React, { useEffect, useState } from 'react'

/**
 * A transluscent overlay that shows a loading spinner until a message is given.
 */
export default function LoaderOverlay({ message }) {

    return (
        <div className="loaderOverlay">
            {!message ?
                (
                    <div className="spinner" />
                ) : (
                    <span >{message}</span>
                )}
        </div>
    )
}
