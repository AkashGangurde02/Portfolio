# EmailJS Setup Guide for Contact Form

Follow these steps to configure EmailJS for your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in the EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in the EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key
1. Go to "Account" > "General" in the EmailJS dashboard
2. Find your **Public Key** (e.g., "abc123XYZ")

## Step 5: Update Your Code
Open `src/components/ContactForm.jsx` and replace these values around line 16:

```javascript
const serviceId = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

## Step 6: Test Your Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message
4. If you don't receive it, check your EmailJS dashboard logs

## Email Template Variables
The form sends these variables to EmailJS:
- `from_name` - Sender's name
- `from_email` - Sender's email
- `subject` - Message subject
- `message` - Message content

## Free Plan Limits
- 200 emails per month
- Good for personal portfolios
- Upgrade if you need more

## Troubleshooting
- Make sure all IDs are correct
- Check EmailJS dashboard for error logs
- Verify your email service is connected
- Test with EmailJS's built-in test feature first

## Security Note
The Public Key is safe to use in frontend code - it's designed for client-side use.
