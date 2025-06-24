import React, { useState } from 'react'
import './Url.css';
const UrlShortener = () => {

    const [originalUrl, setOriginalUrl] = useState('');
    const [smallUrl, setSmallUrl] = useState('');
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${baseURL}/api/shorten`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ originalUrl })
            })

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Something went wrong');

            setSmallUrl(data.shortUrl);

        } catch (error) {
            console.error("Error shortening Url:", error)
        }
    }


    return (
        <div className=''>
            <div className='flex flex-col'>
                <h1>Url Shortener Service</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center justify-center'>
                    <input className='border-2 border-sky-300 rounded-md w-[350px] p-1 px-3 mb-4 bg-transparent placeholder-gray-400 placeholder-italic rounded' type="text" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} placeholder='Enter the original Url to shorten' required />
                    <button className='border-2 border-sky-200 w-[200px] bg-white px-4 py-2 hover:bg-indigo-700 transition' type='submit'>Shorten Url</button>
                    {smallUrl && <p>Short Url: <a href={smallUrl}>{smallUrl}</a></p>}
                </form>
            </div>

        </div>
    )
}

export default UrlShortener

