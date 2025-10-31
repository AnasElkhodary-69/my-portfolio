# Email Contact Form Setup

Your portfolio now has a fully functional contact form with a popup modal!

## Current Status

✅ **Contact Form Modal** - Working
✅ **Form Validation** - Working
✅ **API Route** - Working
⚠️ **Email Delivery** - Needs Web3Forms setup (see below)

## How It Works

1. User clicks "Send Email" button
2. Beautiful modal popup appears with form fields:
   - Name
   - Email
   - Subject
   - Message
3. Form validates all fields
4. Submits to `/api/contact`
5. Sends email to **anaselkhodary69@gmail.com**

## Testing Right Now

**Without Web3Forms setup:**
- Form submissions are logged to your console
- You'll see all form data in terminal where `npm run dev` is running
- User still sees success message

**To test:**
1. Go to http://localhost:3000
2. Scroll to Contact section
3. Click "Send Email"
4. Fill out the form
5. Click "Send Message"
6. Check your terminal - you'll see the submission details!

## Setting Up Email Delivery (Web3Forms - FREE)

To receive actual emails, set up Web3Forms in 2 minutes:

### Step 1: Get Your Access Key

1. Visit: https://web3forms.com
2. Enter your email: **anaselkhodary69@gmail.com**
3. Click "Get Access Key"
4. Check your email and copy the access key

### Step 2: Add Key to Environment

1. Open `.env.local` file in your portfolio folder
2. Replace `your_access_key_here` with your actual key:
   ```
   WEB3FORMS_KEY=abc123xyz-your-actual-key-here
   ```

### Step 3: Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

That's it! Now all form submissions will be emailed to **anaselkhodary69@gmail.com**

## Features

### ✅ Form Fields
- **Name** - Required
- **Email** - Required, validated
- **Subject** - Required
- **Message** - Required, textarea

### ✅ UX Features
- Modal popup (not full page)
- Form validation
- Loading state ("Sending...")
- Success message (green)
- Error message (red)
- Auto-close modal on success (2 seconds)
- Cancel button
- Click outside to close
- Responsive design

### ✅ Security
- Email validation (regex)
- Required field validation
- API route protection
- No spam allowed

## Alternative: Use Your Own Email Service

If you want to use a different email service, you can modify `app/api/contact/route.ts`:

### Option 1: Gmail SMTP
Install nodemailer:
```bash
npm install nodemailer
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

### Option 3: Resend
```bash
npm install resend
```

But **Web3Forms is the easiest** - no dependencies, just an API key!

## Production Deployment

When deploying to Vercel/Netlify:

1. Add environment variable in hosting dashboard:
   - Key: `WEB3FORMS_KEY`
   - Value: Your access key

2. Redeploy

That's it!

## Testing Checklist

- [ ] Form opens when clicking "Send Email"
- [ ] All fields are required
- [ ] Email validation works
- [ ] Success message appears
- [ ] Modal closes automatically
- [ ] Can cancel form
- [ ] Form data logged to console (before Web3Forms setup)
- [ ] Emails received at anaselkhodary69@gmail.com (after Web3Forms setup)

## Support

Web3Forms is free for:
- Unlimited forms
- Unlimited submissions
- No credit card required
- 250 emails/month on free plan (more than enough!)

Need more? Upgrade to Pro ($7/month) for 50,000 emails/month

---

**Your Portfolio Email**: anaselkhodary69@gmail.com
**Web3Forms**: https://web3forms.com
**Documentation**: https://docs.web3forms.com
