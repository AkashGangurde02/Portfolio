/**
 * Password Hash Generator for Portfolio Case Studies
 * 
 * IMPORTANT: The current password is a placeholder.
 * To set your own secure password:
 * 
 * 1. Open your browser console (F12)
 * 2. Copy and paste the generateHash function below
 * 3. Call it with your desired password: await generateHash("YourSecurePassword123!")
 * 4. Copy the generated hash
 * 5. Replace HASHED_PASSWORD values in:
 *    - src/components/PasswordModal.jsx
 *    - src/components/PasswordProtectedRoute.jsx
 * 
 * Current placeholder hash is for: "AkashUXPortfolio2026@Secure"
 * (This is just for demo - REPLACE IT with your own!)
 */

// Function to generate SHA-256 hash
async function generateHash(password) {
    const encoder = new TextEncoder()
    const data = encoder.encode(password)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return hashHex
}

/**
 * USAGE EXAMPLE:
 * 
 * In browser console, run:
 * 
 * async function generateHash(password) {
 *   const encoder = new TextEncoder()
 *   const data = encoder.encode(password)
 *   const hashBuffer = await crypto.subtle.digest('SHA-256', data)
 *   const hashArray = Array.from(new Uint8Array(hashBuffer))
 *   const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
 *   return hashHex
 * }
 * 
 * Then:
 * const hash = await generateHash("YourStrongPassword123!")
 * console.log(hash)
 * 
 * Copy the output and replace the HASHED_PASSWORD constant in both files.
 */

// Example of a secure password pattern:
// - At least 16 characters
// - Mix of uppercase and lowercase
// - Include numbers
// - Include special characters
// - Avoid common words or patterns

export { generateHash }
