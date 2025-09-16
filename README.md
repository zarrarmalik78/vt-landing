# VapeTrax Landing Page

A modern, professional landing page for VapeTrax - Professional Vape Store Management Software.

## 🚀 Features

- **Modern React/Next.js** - Built with the latest web technologies
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Professional UI** - Clean, modern design with Tailwind CSS
- **Fast Performance** - Optimized for speed and SEO
- **Netlify Ready** - Configured for easy deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Netlify

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your images:**
   - Copy images from `C:\Users\RGB\Pictures\New Screenshots\` to `public/images/`
   - Rename them according to the README in `public/images/`

3. **Add your installer:**
   - Copy `VapeTrax_Setup_1.6.11.exe` to `public/downloads/`

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment to Netlify

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build`
2. Zip the `out` folder
3. Drag and drop to netlify.com

### Option 2: Git Integration (Recommended)
1. Push to GitHub
2. Connect Netlify to your repository
3. Set build command: `npm run build`
4. Set publish directory: `out`
5. Deploy!

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── Screenshots.tsx     # Screenshots gallery
│   ├── DownloadSection.tsx # Download section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/
│   ├── images/             # Screenshots and logos
│   └── downloads/          # Installer files
├── netlify.toml            # Netlify configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- Primary: Blue gradient
- Secondary: Orange gradient
- Accent: Green gradient

### Content
Update the content in:
- `app/page.tsx` - Main page data
- `components/` - Individual component content

### Images
Replace images in `public/images/` with your own:
- `logo.png` - Company logo
- `dashboard.png` - Main screenshot
- Other screenshots as needed

## 📱 Features Highlighted

1. **Real-Time Dashboard** - Business analytics
2. **Inventory Management** - Stock tracking
3. **Refill Bottle Tracking** - Smart bottle management
4. **Sales Management** - Transaction tracking
5. **Advanced Reports** - Business insights
6. **Supplier Management** - Vendor relationships

## 🔧 Configuration

### Contact Form
The contact form is ready for Netlify Forms:
- Add `netlify` attribute to form
- Netlify will handle form submissions automatically

### Download Links
Update download links in `components/DownloadSection.tsx`:
- Change file path if needed
- Update version number
- Modify file size

## 📈 SEO Features

- Meta tags optimized
- Open Graph tags
- Twitter Card support
- Semantic HTML structure
- Fast loading times

## 🚀 Performance

- Next.js Image optimization
- Static site generation
- Minimal JavaScript bundle
- Optimized CSS with Tailwind
- Lazy loading animations

## 📞 Support

For questions about this landing page:
- Check the component files for customization
- Review Tailwind CSS documentation
- Check Framer Motion docs for animations

---

**Built with ❤️ for VapeTrax by Zyntra**
