# App Legal Pages (TikTok Developer Compliance)

This repository contains the static HTML pages required to comply with the terms and privacy policy requirements for third-party OAuth integrations, specifically tailored for the **TikTok for Developers** application approval process.

## 📂 Repository Structure

- `index.html` - The landing page acting as a portal.
- `privacy.html` - The Privacy Policy page (includes mandatory Data Deletion Instructions).
- `terms.html` - The Terms of Service page.

## 🚀 Built With
- **HTML5**
- **Tailwind CSS** (via CDN for zero-build configuration)
- **Google Fonts** (Inter)

## 🛠️ Setup & Customization

Before deploying, make sure to do a global Find & Replace in all HTML files for the following placeholders:
1. `[App Name]` -> Replace with your actual application name.
2. `[Your Contact Email]` -> Replace with your actual support/contact email (crucial for data deletion requests).

## 🌐 How to Deploy (GitHub Pages)

Since these are pure static files, the easiest way to host them for free with a secure HTTPS domain is via GitHub Pages:

1. Push this code to your GitHub repository.
2. Go to your repository's **Settings** tab.
3. On the left sidebar, click on **Pages**.
4. Under "Build and deployment", select **Deploy from a branch**.
5. Select the `main` (or `master`) branch and the `/ (root)` folder, then click **Save**.
6. Wait 1-2 minutes. GitHub will provide you with a live URL (e.g., `https://your-username.github.io/your-repo-name`).

## 🔗 TikTok Developer Setup

Once deployed, copy the generated links and paste them into your TikTok Developer console:
- **Terms of Service URL:** `https://your-username.github.io/your-repo-name/terms.html`
- **Privacy Policy URL:** `https://your-username.github.io/your-repo-name/privacy.html`

---
*Designed for seamless compliance and approval.*
