// Web3Forms service - completely free alternative
// Sign up at https://web3forms.com to get access key

export const sendWeb3FormEmail = async (formData: any, accessKey: string) => {
  const formDataToSend = new FormData();
  
  // Add Web3Forms required fields
  formDataToSend.append('access_key', accessKey);
  formDataToSend.append('subject', 'New Contact from Saibaitour Website');
  formDataToSend.append('from_name', `${formData.name} ${formData.last}`);
  formDataToSend.append('email', formData.email);
  
  // Add your custom fields
  formDataToSend.append('name', formData.name);
  formDataToSend.append('last', formData.last);
  formDataToSend.append('country', formData.country || '');
  formDataToSend.append('tour', formData.tour || '');
  formDataToSend.append('number', formData.number);
  formDataToSend.append('message', formData.message);
  
  // Optional: redirect after submission
  formDataToSend.append('redirect', 'https://yourdomain.com/thank-you');
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    });
    
    const result = await response.json();
    
    if (result.success) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      return { success: false, error: result.message };
    }
  } catch (error) {
    return { success: false, error: 'Network error occurred' };
  }
};



