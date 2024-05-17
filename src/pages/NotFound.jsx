import React from 'react'
import { MyNav } from '../component/myNav'

export function NotFound() {
    return (
        <>
        <MyNav/>
        <div className='alert alert-danger'>
            <h1>404 Not Found Page</h1>

        </div>
        </>
    )
}