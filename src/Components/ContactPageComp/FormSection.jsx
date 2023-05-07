import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
const FormSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("email sent failed")
    setName("")
    setEmail("")
    setMessage("")
    // const response = await fetch('/api/sendEmail', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, message }),
    // });

    // if (response.ok) {
    //   // Email sent successfully
    //   console.log('Email sent!');
    // } else {
    //   // Error sending email
    //   console.error('Error sending email:', response.statusText);
    // }
  };
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-screen">
      {/* <Head>
        <title>Contact Us | My Startup Business</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <h1 className="text-[16px] md:text-3xl font-bold mb-3 mt-3 md:mt-1 text-[#00cccc]">Get in touch</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:min-h-[150px]"
          />
        </div>
        <div className="flex items-center justify-between">
          <button disabled type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
        </div>
      </form>

    </div>
  )
}

export default FormSection
