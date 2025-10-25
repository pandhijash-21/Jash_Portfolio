import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, to } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message || !to) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const emailContent = `
New message from your portfolio contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your portfolio website at ${new Date().toLocaleString()}
    `.trim();

    // Send email using Nodemailer (you'll need to set up SMTP)
    // For now, we'll use a simple approach with EmailJS
    const emailData = {
      service_id: process.env.EMAILJS_SERVICE_ID || 'service_portfolio',
      template_id: process.env.EMAILJS_TEMPLATE_ID || 'template_contact',
      user_id: process.env.EMAILJS_USER_ID || 'user_portfolio',
      template_params: {
        to_email: to,
        from_name: name,
        from_email: email,
        subject: `Portfolio Contact: ${subject}`,
        message: message,
        reply_to: email
      }
    };

    // For development/testing, we'll just log the email
    console.log('Email would be sent:', emailData);

    // In production, you would send the actual email here
    // For now, we'll simulate success
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
