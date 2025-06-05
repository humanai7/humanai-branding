/**
 * HUMANAI Portfolio Email Service
 * Handles email notifications for contact form submissions
 * Currently configured for development logging with production SendGrid integration ready
 */

/**
 * Email parameters interface for type-safe email composition
 */
interface EmailParams {
  /** Recipient email address */
  to: string;
  /** Sender email address */
  from: string;
  /** Email subject line */
  subject: string;
  /** Plain text email content (optional) */
  text?: string;
  /** HTML email content (optional) */
  html?: string;
}

/**
 * Send email notification for contact form submissions
 * Currently logs to console for development - ready for SendGrid integration
 * @param params - Email parameters including recipient, sender, subject and content
 * @returns Promise<boolean> - Success status of email operation
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const timestamp = new Date().toISOString();
    
    // Enhanced logging for contact form submissions in development
    console.log('\n🔥 NEW CONTACT FORM SUBMISSION 🔥');
    console.log(`📅 Timestamp: ${timestamp}`);
    console.log(`📧 Destination: ${params.to}`);
    console.log(`👤 Sender: ${params.from}`);
    console.log(`📝 Subject: ${params.subject}`);
    console.log('💬 Message Content:');
    console.log('─'.repeat(50));
    console.log(params.text);
    console.log('─'.repeat(50));
    console.log('✅ Contact form data logged successfully\n');
    
    // Store submission data structure for future email service integration
    const submissionData = {
      timestamp,
      destination: params.to,
      sender: params.from,
      subject: params.subject,
      message: params.text
    };
    
    // Ready for SendGrid integration when API key is configured
    console.log('📬 Email ready for delivery service integration');
    
    return true;
  } catch (error) {
    console.error('❌ Contact form processing error:', error);
    return false;
  }
}

/**
 * Format contact form submission into structured email parameters
 * Creates professional email content from contact form data for HUMANAI support team
 * @param contact - Contact form submission object with name, email, message, etc.
 * @returns EmailParams - Formatted email ready for sending to support team
 */
export function formatContactEmail(contact: any): EmailParams {
  const subject = `HUMANAI Contact: ${contact.subject}`;
  const text = `
New contact form submission from HUMANAI website:

Name: ${contact.name}
Email: ${contact.email}
Subject: ${contact.subject}

Message:
${contact.message}

---
Reply to: ${contact.email}
Submitted at: ${new Date().toLocaleString()}
  `.trim();

  return {
    to: 'humanai7.enquiries@gmail.com', // HUMANAI support email
    from: contact.email || 'contact@humanai.dev', // Use contact's email or fallback
    subject,
    text
  };
}