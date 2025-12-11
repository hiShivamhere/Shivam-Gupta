import React from 'react';

const contacts = [
  { label: 'Email', value: 'hishivamhere@gmail.com', href: 'mailto:hishivamhere@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/hishivamhere', href: 'https://www.linkedin.com/in/hishivamhere' },
  { label: 'GitHub', value: 'github.com/hiShivamhere', href: 'https://github.com/hiShivamhere' },
  { label: 'Twitter', value: '@hiShivamhere', href: 'https://twitter.com/hiShivamhere' },
];

function Contact() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something meaningful.</h2>
        <p className="lede">Reach out for collaboration, mentorship, or just to trade ideas.</p>
      </div>
      <div className="card contact-card">
        <div className="pill">Open to chats</div>
        <ul className="list">
          {contacts.map((contact) => (
            <li key={contact.label} className="contact-row">
              <span>{contact.label}</span>
              <a href={contact.href} target="_blank" rel="noreferrer" className="text-link">
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
