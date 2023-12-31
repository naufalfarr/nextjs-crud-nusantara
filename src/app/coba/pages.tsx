import axios from 'axios';
import React from 'react';

async function csrf() {
  try {
    const csrfRes = await axios.get('https://book-crud-service-6dmqxfovfq-et.a.run.app/sanctum/csrf-cookie');
    console.log('CSRF Response:', csrfRes.data);
    
    // Rest of your code goes here...
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
  }
}
csrf();
const Pages = () => {
  return (
    <div>halo</div>
  );
}

// Call the function to fetch data


export default Pages;
