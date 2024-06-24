import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
const FormSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loader, setloader] = useState(false)
  
  const handleSubmit = async (e) => {
    setloader(true)
    e.preventDefault();
    if(!name || !email || !message){
      setloader(false)
      return alert("Please fill all fields")
    }
    const mailtoLink = `mailto:info@siteocean.com?subject=Message from website &body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    setName("")
    setEmail("")
    setMessage("")
  };
  return (
    <div className="flex-1 flex flex-col items-center mt-3 sm:mt-0 justify-center">
      {/* <Head>
        <title>Contact Us | My Startup Business</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <h1 className="text-[16px] md:text-3xl font-bold mb-3 mt-3 md:mt-1 text-gray-900">Get in Touch</h1>

      <form onSubmit={handleSubmit} className="w-[70%] sm:w-full max-w-lg ">
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
          <button type="submit" className="bg-blue-500 w-[100px] mx-auto hover:bg-blue-700 justify-center flex text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        {/* {loader ? <span className="animate-spin rounded-full p-2 h-2 w-3 border-t-2 border-b-2 border-white"></span> : null}
              {!loader ? <span>Send</span> : null} */}
              <span>Send</span>
            </button>
        </div>
      </form>
    </div>
  )
}

export default FormSection
