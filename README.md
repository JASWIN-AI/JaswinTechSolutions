# JASWIN AI Solution Website


To publis website from local
1. Chckin your code on github and pull request on github_pages
2. npm run build
3. npm run deploy
A professional corporate website built with React TypeScript, featuring modern design with navy blue, white, and gold branding.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **Professional Branding**: Navy blue, white, and gold color scheme
- **Contact Form**: EmailJS integration for sending inquiries to enquiry@jas.com
- **SEO Optimized**: Meta tags and semantic HTML structure

## Pages

- **Home**: Welcome section with hero banner and company introduction
- **About Us**: Mission, values, and team member profiles
- **Services**: Three core service offerings with detailed descriptions
- **Projects**: Gallery of six recent client projects
- **Contact**: Contact form and business information

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jaswin-tech-website.git
cd jaswin-tech-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables for EmailJS (optional):
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/public` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository
   - Initialize it with this code

2. **Configure Repository Settings**:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"

3. **Add EmailJS Secrets** (if using contact form):
   - Go to Settings > Secrets and variables > Actions
   - Add these repository secrets:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

4. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

The website will automatically deploy to `https://yourusername.github.io/repository-name/`

## EmailJS Setup (Optional)

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{company}}` - Company name
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (enquiry@jas.com)
4. Get your Service ID, Template ID, and Public Key
5. Add them to your environment variables

## Tech Stack

- **Frontend**: React 18, TypeScript, Wouter (routing)
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Email**: EmailJS for contact form
- **Deployment**: GitHub Pages with GitHub Actions

## Project Structure

```
├── client/src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions
│   └── hooks/         # Custom React hooks
├── server/            # Express server (development only)
├── .github/workflows/ # GitHub Actions deployment
└── dist/public/       # Built static files
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2025 JASWIN AI Solutions. All rights reserved.