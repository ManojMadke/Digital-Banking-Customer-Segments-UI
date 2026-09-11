import React from 'react'
import Section1 from './components/Section1/Section1'
import photo1 from './assets/photo-1.avif';
import photo2 from './assets/photo-2.avif';
import photo3 from './assets/photo-3.avif';
import photo4 from './assets/photo-4.avif';
import photo5 from './assets/photo-5.avif';
import photo6 from './assets/photo-6.avif';

const App = () => {

  const users = [
    {
      img: photo1,
      intro: 'Young professionals looking for simple, affordable banking services with better digital access and flexible financial tools.',
      color: 'lightseagreen',
      tag: 'Underserved'
    },
    {
      img: photo2,
      intro: 'Customers who are happy with their current banking experience and value convenience, reliability, and personalized financial services.',
      color: 'royalblue',
      tag: 'Satisfied'
    },
    {
      img: photo3,
      intro: 'People who have limited access to suitable financial products and need easier ways to save, spend, and manage their money.',
      color: 'lightseagreen',
      tag: 'Underserved'
    },
    {
      img: photo4,
      intro: 'Customers who have a bank account but still rely heavily on cash and need better access to credit, payments, and digital banking.',
      color: 'orange',
      tag: 'Underbanked'
    },
    {
      img: photo5,
      intro: 'Customers who need more inclusive financial solutions designed around their everyday needs, spending habits, and long-term goals.',
      color: 'pink',
      tag: 'Inclusive'
    },
    {
      img: photo6,
      intro: 'Everyday banking customers with common financial needs who value straightforward services, easy access, and transparent pricing.',
      color: 'grey',
      tag: 'Average'
    },
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
