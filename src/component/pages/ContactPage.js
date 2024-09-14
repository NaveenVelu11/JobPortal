// src/pages/ContactPage.js
import React from 'react';
import Header from '../common/Header';
import ContactForm from '../contact/ContactForm';
import Footer from '../common/Footer';

function ContactPage() {
  return (
    <>
      <main className="bg-[#F5EDED] p-8">
        <h1 className="text-3xl font-bold text-[#13072e] mb-6">Contact Us</h1>
        <ContactForm />
      </main>
 
    </>
  );
}

export default ContactPage;
