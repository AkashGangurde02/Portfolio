import { useState, useEffect } from 'react'
import './PasswordModal.css'

const PasswordModal = ({ onSuccess, onClose }) => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isShaking, setIsShaking] = useState(false)

    // SHA-256 hash function
    const hashPassword = async (text) => {
        const encoder = new TextEncoder()
        const data = encoder.encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-256', data)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
        return hashHex
    }

    // Hardcoded hashed password (current password: "test123")
    // You can change this by generating a new hash using test-password-hash.html
    const HASHED_PASSWORD = 'ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae'

    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!password.trim()) {
            setError('Please enter a password')
            triggerShake()
            return
        }

        const hashedInput = await hashPassword(password)

        if (hashedInput === HASHED_PASSWORD) {
            // Authentication successful - no storage, temporary only
            setError('')
            onSuccess()
        } else {
            setError('Incorrect password. Please contact the owner.')
            setPassword('')
            triggerShake()
        }
    }

    const triggerShake = () => {
        setIsShaking(true)
        setTimeout(() => setIsShaking(false), 500)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }

    return (
        <div className="password-modal-overlay" onClick={onClose}>
            <div
                className={`password-modal ${isShaking ? 'shake' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="password-modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="password-modal-content">
                    <div className="password-modal-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <h2 className="password-modal-title">Protected Content</h2>
                    <p className="password-modal-description">
                        This case study is password protected. Please enter the password to view the content.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="password-input-wrapper">
                            <input
                                type="password"
                                className="password-input"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={handleKeyDown}
                                autoFocus
                            />
                        </div>

                        {error && (
                            <div className="password-error">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                {error}
                            </div>
                        )}

                        <button type="submit" className="password-submit-btn">
                            Unlock Case Study
                        </button>
                    </form>

                    <p className="password-modal-footer">
                        Need access? Contact the portfolio owner for the password.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PasswordModal
