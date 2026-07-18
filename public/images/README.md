# Image Assets

Place the following images in this folder:

## Required Images

### 1. `joanna.jpg` or `joanna.png`
- **Purpose:** Hero section profile photo
- **Recommended size:** 800x1000px (portrait) or 800x800px (square)
- **Format:** JPG or PNG
- **Notes:** Professional headshot or lifestyle photo of Joanna

### 2. `joanna-kappele-og.jpg`
- **Purpose:** Social media sharing (Open Graph)
- **Required size:** 1200x630px
- **Format:** JPG
- **Notes:** Used when sharing on Facebook, LinkedIn, Twitter, etc.

### 3. `favicon.ico`
- **Purpose:** Browser tab icon
- **Size:** 32x32px or multi-size ICO
- **Location:** Move to `/public/favicon.ico`

### 4. `apple-touch-icon.png`
- **Purpose:** iOS home screen icon
- **Size:** 180x180px
- **Location:** Move to `/public/apple-touch-icon.png`

## Optional Images

- `logo.png` - Site logo if different from text
- `hippocrateas-logo.png` - For the teas section
- Additional photos for About page

## How to Add Joanna's Photo to Hero

Once you have `joanna.jpg`, edit `/src/app/page.js` and uncomment line 75:

```jsx
<img src="/images/joanna.jpg" alt="Joanna Kappele - Wholistic Health Coach" className="w-full h-full object-cover" />
```

And optionally uncomment line 87 for a gradient overlay:

```jsx
<div className="absolute inset-0 bg-gradient-to-t from-forest-green-dark/60 to-transparent"></div>
```
