import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, address, number, cart } = req.body;

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  // Company logo URL
  const logoUrl = 'https://i.ibb.co/L8CdNDj/doic.png'; // Replace with your actual logo URL

  // Construct HTML for cart items
  const cartItemsHtml = cart.map((item) => `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #ddd; background: white;">

        <img src="${item.image}" alt="${item.name}" width="50" height="50" style="display: block; margin: auto;">
      </td>
      <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: left;">${item.name}</td>
      <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
      <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">$${item.price}</td>
    </tr>
  `).join('');

  const orderSummaryHtml = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <div style="text-align: center;">
        <img src="${logoUrl}" alt="Company Logo" style="width: 150px; margin-bottom: 10px;">
        <h2>Thank You for Your Purchase!</h2>
      </div>
      <p>Hello ${name},</p>
      <p>Thank you for your order! Below is a summary of your purchase:</p>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd; background-color: #f8f8f8;">Image</th>
            <th style="padding: 8px; border: 1px solid #ddd; background-color: #f8f8f8;">Item Name</th>
            <th style="padding: 8px; border: 1px solid #ddd; background-color: #f8f8f8;">Quantity</th>
            <th style="padding: 8px; border: 1px solid #ddd; background-color: #f8f8f8;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${cartItemsHtml}
        </tbody>
      </table>
      <p><strong>Shipping Address:</strong> ${address}</p>
      <p><strong>Phone Number:</strong> ${number || 'Not provided'}</p>
      <p>Best regards,<br>Longrich Store</p>
<p>Contact us :+243990664406<br>By DOIC Llc</p>
    </div>
  `;

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,  // Use the app password here
    },
  });

  try {
    // Send confirmation email to the client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Order Confirmation - Thank You for Your Purchase!',
      html: orderSummaryHtml, // Use HTML template for the email body
    });

    // Send notification email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Order Received',
      html: orderSummaryHtml, // Send the same HTML email to yourself
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}