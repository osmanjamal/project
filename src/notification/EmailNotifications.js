import nodemailer from "nodemailer";

class EmailNotifications {
  constructor() {
    this.transporter = nodemailer.createTransport({
      // إعدادات SMTP هنا
    });
  }

  async send(message) {
    try {
      await this.transporter.sendMail({
        from: "your-trading-bot@example.com",
        to: "user@example.com",
        subject: "Trading Bot Notification",
        text: message,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
}

export default EmailNotifications;
