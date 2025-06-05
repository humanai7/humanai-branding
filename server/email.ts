interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  // Log contact form submission to server console
  console.log('\n=== NEW CONTACT FORM SUBMISSION ===');
  console.log(`To: ${params.to}`);
  console.log(`From: ${params.from}`);
  console.log(`Subject: ${params.subject}`);
  console.log(`Message:\n${params.text}`);
  console.log('================================\n');
  
  return true;
}

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
    to: 'humanai7.enquiries@gmail.com',
    from: contact.email || 'contact@humanai.dev',
    subject,
    text
  };
}