# 🚀 Hostinger Deployment Guide - Layen Dental Clinic

## Quick Steps

### 1️⃣ Build Production Files
```bash
npm run build
```
This creates a `dist/` folder with optimized files.

### 2️⃣ Files to Upload
Upload **ONLY** the contents of the `dist/` folder:
- ✅ `index.html`
- ✅ `assets/` folder
- ✅ All image files (from `public/`)
- ✅ `.htaccess` (for routing)

### 3️⃣ Hostinger Upload Steps
1. **Login** to Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html/` (or your domain folder)
4. **Delete** any existing files in `public_html/`
5. **Upload** all files from your local `dist/` folder
6. Ensure `index.html` is at the root of `public_html/`

### 4️⃣ Verification
- Visit your domain: `https://yourdomain.com`
- Test navigation: Click "Services", "Contact", etc.
- All routes should work without 404 errors

## 📋 Checklist Before Upload
- [ ] Run `npm run build` successfully
- [ ] Check `dist/` folder exists
- [ ] Verify all images are in `public/` folder (not just `src/`)
- [ ] `.htaccess` file is in `public/` folder
- [ ] Test locally with `npm run preview` first

## ⚠️ Important Notes
- **Don't upload** `src/`, `node_modules/`, or any config files
- **Only upload** the `dist/` folder contents
- **Routing**: The `.htaccess` file ensures `/contact`, `/services` URLs work correctly
- **Images**: Make sure all images referenced in code are in `/public/` before building

## 🔧 If Something Goes Wrong
- **404 on routes?** → Check `.htaccess` is uploaded
- **Missing images?** → Ensure they're in `public/` before building
- **Blank page?** → Check browser console (F12) for errors
- **Old version showing?** → Clear browser cache (Ctrl+Shift+R)

## 📞 Need Help?
Contact Hostinger support or check their React deployment docs.
