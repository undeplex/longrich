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

  // Construct cart items for the email body
  const cartSummary = cart.map((item) =>
    `- ${item.name}: ${item.quantity} x $${item.price}`
  ).join('\n');

  const orderSummary = `
    Name: ${name}
    Email: ${email}
    Address: ${address}
    Phone Number: ${number || 'Not provided'}
    
    Order Summary:
    ${cartSummary}
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
      text: `Hello ${name},\n\nThank you for your order!\n\n${orderSummary}\n\nBest regards,\nLongrich Store`,
    });

    // Send notification email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Order Received',
      text: `New order details:\n\n${orderSummary}`,
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
