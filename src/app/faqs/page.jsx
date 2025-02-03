'use client'
import { useState } from "react";
import styles from "./faqs.module.css";
import Image from "next/image";
import customerCare from '@/app/Customer-Service.png'

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We sell login credentials for various social media accounts, including Facebook, Instagram, and Twitter."
  },
  {
    question: "Is buying login information legal?",
    answer: "We strongly advise checking your local laws before purchasing, as legality varies by region."
  },
  {
    question: "How do I purchase an account?",
    answer: "Simply browse our listings, select an account, and complete payment. Credentials will be delivered instantly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept payments through Paystack and manual payment methods."
  },
  {
    question: "What if my purchased account doesn’t work?",
    answer: "If your purchased account doesn’t work, please contact our customer care on WhatsApp using the provided link and submit proof of the issue for assistance."
  }
];

const page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <div className={styles.mainContainer}>
     <div className={styles.container}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <p className={styles.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
        <div><a href="#"  className={styles.iconCustomercare}>
            <span className={styles.customerCareImage}>
            <Image src={customerCare} alt="Loading" className={styles.customerCare} />
            </span>
            Customer Care</a></div>
      </div>
    </div>
   </div>
  );
};

export default page;