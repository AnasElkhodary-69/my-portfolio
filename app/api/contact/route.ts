import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Use Web3Forms API
    const formData = new FormData();
    formData.append('access_key', process.env.WEB3FORMS_KEY || '');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', `Portfolio Contact: ${subject}`);
    formData.append('message', `
From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `);

    // If no Web3Forms key, log and return success for testing
    if (!process.env.WEB3FORMS_KEY) {
      console.log('\n📧 Contact Form Submission:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log(`Time: ${new Date().toLocaleString()}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      return NextResponse.json({
        success: true,
        message: 'Message logged to console. Set up Web3Forms for email delivery.'
      });
    }

    // Send via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: 'Email sent successfully to anaselkhodary69@gmail.com!'
      });
    } else {
      throw new Error(data.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
