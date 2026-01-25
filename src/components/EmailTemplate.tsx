interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate = ({ name, email, subject, message }: EmailTemplateProps) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <div style={{ borderTop: '1px solid #eee', marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '5px' }}>
      <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
  </div>
);