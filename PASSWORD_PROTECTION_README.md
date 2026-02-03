# 🔐 Password Protection System - Case Studies

This portfolio includes a secure password protection system for the Hemp Hop and Grubwala case studies.

## 🎯 Features

- **SHA-256 Encryption**: Passwords are hashed using SHA-256 cryptographic algorithm
- **Session-Based**: Authentication lasts only for the current browser session
- **User-Friendly Modal**: Clean, professional password entry interface
- **Error Handling**: Visual feedback for incorrect password attempts with shake animation
- **Responsive Design**: Works perfectly on all devices
- **Auto-Redirect**: Users are sent back to homepage if they close the modal without authenticating

## 🔑 Current Password

**IMPORTANT: Change this immediately!**

The current demo password is: `AkashUXPortfolio2026@Secure`

This is a placeholder - you should replace it with your own secure password.

## 🛠️ How to Change the Password

### Step 1: Generate a New Hash

1. Open your browser console (Press F12)
2. Copy and paste this function:

```javascript
async function generateHash(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
```

3. Generate your hash with your desired password:

```javascript
const myPassword = "YourSuperSecurePassword123!"
const hash = await generateHash(myPassword)
console.log(hash)
```

4. Copy the hash output from the console

### Step 2: Update the Components

Replace the `HASHED_PASSWORD` constant in **both** of these files:

1. **`src/components/PasswordModal.jsx`** (around line 24):
```javascript
const HASHED_PASSWORD = 'YOUR_NEW_HASH_HERE'
```

2. **`src/components/PasswordProtectedRoute.jsx`** (around line 20):
```javascript
const HASHED_PASSWORD = 'YOUR_NEW_HASH_HERE'
```

### Step 3: Test

1. Clear your browser's sessionStorage (or use incognito mode)
2. Navigate to a protected case study
3. Enter your new password
4. Verify it works!

## 🔒 Security Features

### What's Implemented:

✅ **SHA-256 Hashing**: Industry-standard cryptographic hash function  
✅ **No Plain Text Storage**: Password is never stored in plain text  
✅ **Session-Only Auth**: Authentication expires when browser is closed  
✅ **Client-Side Validation**: Fast, immediate feedback  
✅ **Hash Comparison**: Only hashes are compared, never plain text

### Important Security Notes:

⚠️ **Client-Side Limitation**: Since this is a React app, the password hash exists in the client-side code. Determined users can find it by inspecting the JavaScript bundles. This protects against casual viewers but not determined individuals.

💡 **Best Practices**:
- Use a strong, unique password (16+ characters)
- Combine uppercase, lowercase, numbers, and symbols
- Don't reuse passwords from other accounts
- Change the password periodically
- Don't share it publicly

## 📁 Protected Case Studies

Currently password-protected:
- ✅ Hemp Hop (D2C Wellness E-commerce)
- ✅ Grubwala (Food Delivery Mobile App)

Public (no password required):
- ⚪ Contact Form Redesign

## 🎨 Customization

### Change Protected Routes

To protect/unprotect different case studies, edit `src/App.jsx`:

```jsx
// To protect a route:
<Route path="/case-study/your-study" element={
  <PasswordProtectedRoute>
    <YourCaseStudy />
  </PasswordProtectedRoute>
} />

// To make it public:
<Route path="/case-study/your-study" element={<YourCaseStudy />} />
```

### Customize Modal Appearance

Edit `src/components/PasswordModal.css` to change:
- Colors
- Border radius
- Animations
- Typography
- Spacing

## 🚀 How It Works

1. **User clicks "View Case Study"** on Hemp Hop or Grubwala
2. **React Router navigates** to the case study URL
3. **PasswordProtectedRoute** checks sessionStorage for authentication
4. **If not authenticated**, shows PasswordModal
5. **User enters password**, which is hashed with SHA-256
6. **Hash is compared** with the stored hash constant
7. **If match**: Authentication stored in sessionStorage, content shown
8. **If no match**: Error message with shake animation
9. **If modal closed**: User redirected to homepage

## 📝 Files Modified

- `src/components/PasswordModal.jsx` - Password entry UI
- `src/components/PasswordModal.css` - Modal styling
- `src/components/PasswordProtectedRoute.jsx` - Authentication wrapper
- `src/App.jsx` - Route configuration
- `src/utils/passwordHashGenerator.js` - Utility for generating hashes

## 🐛 Troubleshooting

**Problem**: Password doesn't work after changing it  
**Solution**: Make sure you updated the hash in BOTH PasswordModal.jsx AND PasswordProtectedRoute.jsx

**Problem**: Still see password modal after entering correct password  
**Solution**: Check browser console for errors. Make sure sessionStorage is enabled.

**Problem**: Want to test again after authenticating  
**Solution**: Clear sessionStorage or use incognito mode

## 💡 Tips for Creating Strong Passwords

Good examples:
- `MyPortfolio$2026@SecureAccess!`
- `Design&Dev!Strong#Pass2026`
- `UX_UI_PasswordStrong_2026!`

Avoid:
- Short passwords (< 12 characters)
- Common words or patterns
- Personal information
- Reused passwords

---

**Need Help?** Check the inline comments in the source files or refer to this README.

**Security Concern?** Remember this is client-side protection for casual browsing privacy, not bank-level security.
