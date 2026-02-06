# How to Test Mobile Layout - Quick Guide

## Method 1: Chrome DevTools (Recommended)

1. **Open Chrome DevTools**
   - Press `F12` OR
   - Right-click anywhere on page → Select "Inspect"

2. **Enable Device Toolbar**
   - Press `Ctrl + Shift + M` OR
   - Click the device/mobile icon in DevTools toolbar (top-left)

3. **Select Device**
   - From dropdown at top, choose:
     - **iPhone 12 Pro** (standard mobile)
     - **iPhone SE** (small screen)
     - **iPad** (tablet view)
     - **Responsive** (custom sizes)

4. **Test Both Orientations**
   - Click the rotate icon to switch between portrait/landscape

5. **What to Check**
   ✅ No horizontal scrolling
   ✅ All text is readable (not too small)
   ✅ Buttons are easy to tap (at least 44x44px)
   ✅ Images fit within screen
   ✅ Cards stack vertically
   ✅ Navigation works properly
   ✅ Forms are easy to fill
   ✅ Spacing looks clean

## Method 2: Responsive Mode

1. **In DevTools**, select "Responsive" from device dropdown
2. **Manually resize** the viewport by dragging corners
3. **Test at various widths**:
   - 375px (iPhone SE)
   - 390px (iPhone 12 Pro)  
   - 768px (iPad)
   - 1024px (Tablet landscape)

## Method 3: Real Device Testing

1. **Find your local IP address**:
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.5)

2. **Update Vite config** if needed (should allow network access)

3. **On your phone**:
   - Connect to same WiFi network
   - Open browser
   - Go to `http://[YOUR-IP]:5173`

## Common Mobile Issues Fixed

✅ **Text too small** - Now minimum 16px  
✅ **Horizontal scroll** - Completely prevented  
✅ **Buttons hard to tap** - Minimum 44x44px  
✅ **Images overflow** - Max-width: 100%  
✅ **Spacing too tight** - Proper padding added  
✅ **Layout broken** - All grids responsive  
✅ **Navbar cluttered** - Minimal on mobile  

## Pages to Test

1. **Home Page** (`/`)
   - Hero section
   - About preview
   - Works grid
   - Footer

2. **Work Page** (`/work`)
   - Case study cards
   - Navigation footer

3. **About Page** (`/about`)
   - Profile section
   - Experience list
   - Tools grid
   - Awards

4. **Contact Page** (`/contact`)
   - Form layout
   - Input fields
   - Submit button

5. **Case Study Pages**
   - Any protected case study
   - Image galleries
   - Content readability

## What to Look For

### ❌ Problems
- Text cut off or overlapping
- Need to scroll horizontally
- Buttons too small to tap
- Images larger than screen
- Too much crowding
- Hard to read text

### ✅ Good Signs
- Clean, organized layout
- Easy to scroll vertically
- Tappable buttons
- Readable text
- Proper spacing
- Professional appearance

## Browser Testing

Test in different mobile browsers:
- Chrome (Android/iOS)
- Safari (iOS)
- Firefox Mobile
- Samsung Internet

## Quick Test Checklist

```
□ Homepage loads correctly on mobile
□ Can scroll smoothly without horizontal scroll
□ All buttons are easily tappable
□ Text is readable (not too small)
□ Images fit within screen
□ Forms work properly
□ Navigation is accessible
□ Footer displays correctly
□ Case studies look good
□ About page is well-formatted
□ Contact form is mobile-friendly
```

---

**Your dev server is still running at**: `http://localhost:5173`

Simply open Chrome DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M) → Select a mobile device → Start testing!
