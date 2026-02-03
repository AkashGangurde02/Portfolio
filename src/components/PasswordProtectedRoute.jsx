import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PasswordModal from './PasswordModal'

const PasswordProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showModal, setShowModal] = useState(true)
    const navigate = useNavigate()

    // No hash checking - always show modal on mount
    // Authentication is only valid for this single page view

    const handleSuccess = () => {
        setIsAuthenticated(true)
        setShowModal(false)
    }

    const handleClose = () => {
        // Redirect to home when modal is closed without authentication
        navigate('/')
    }

    if (!isAuthenticated && showModal) {
        return <PasswordModal onSuccess={handleSuccess} onClose={handleClose} />
    }

    return isAuthenticated ? children : null
}

export default PasswordProtectedRoute
