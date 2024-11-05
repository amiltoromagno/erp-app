'use client'
import { Toast } from '@/services/toast'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const NotFound = () => {
useEffect(() => {
        Toast.error("This route doesn't exist.")
        redirect('/')
    })
    return (
        <div></div>
    )
}

export default NotFound
