import React from 'react'

export default function Spinner({ clases, id }) {
    return (
        <div className={`bg-yellow-600 min-h-screen flex justify-center items-center ${clases}`} id={id}>
            <div className="spinner"></div>
        </div>
    )
}
