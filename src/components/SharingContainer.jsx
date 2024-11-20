/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import copyIcon from "../assets/copyIcon.png"
import { toast } from 'react-toastify';

const SharingContainer = ({ uploadUrl }) => {

    const inputCopyRef = useRef(null);

    const [fromEmail, setFromEmail] = useState('');
    const [toEmail, setToEmail] = useState('');

    useEffect(() => {
        inputCopyRef.current.value = uploadUrl;
    }, [uploadUrl]);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(uploadUrl)
            .then(() => toast.info("Copied to clipboard"))
            .catch((err) => console.log("Failed to copy:", err));
    };

    function handleEmailChange() {
        const formData = {
            uuid: uploadUrl.split("/").splice(-1, 1)[0],
            emailTo: toEmail,
            emailFrom: fromEmail,
        };

        fetch("https://file-sharing-backend-khaki.vercel.app/api/files/send", {
            // fetch("http://localhost:3000/api/files/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success('🦄 Email send!');
                } else {
                    toast.error("something went wrong");
                }
            })
            .catch(() => toast.error("An error occurred"));
    }

    return (
        <>
            <div className="mt-4">
                <p className="text-sm font-semibold text-gray-600 text-center">Link expired in 24 hours</p>

                <div className="flex justify-between items-center border-dashed border-indigo-400 border-2 rounded-lg p-3 mt-2 cursor-pointer">
                    <input type="text" ref={inputCopyRef} readOnly className="outline-none flex-1 text-sm p-2" />
                    <img onClick={handleCopyClick} src={copyIcon} width={20} alt="copy icon" className="transition-transform duration-300 hover:scale-125" />
                </div>

                <p className="text-sm font-semibold mt-4 text-center">Or Send via Email</p>

                <div className="border-2 border-indigo-300 rounded-lg p-4 mt-4">
                    <div className="flex justify-evenly items-end p-4">
                        <label htmlFor="fromEmail" className="font-semibold">Your Email</label>
                        <input name="from-email" onChange={(e) => setFromEmail(e.target.value)} type="text" required className="outline-none border-b-2 border-gray-400 px-2" />
                    </div>
                    <div className="flex justify-evenly items-end p-4">
                        <label htmlFor="toEmail" className="font-semibold">Receiver Email</label>
                        <input name="to-email" onChange={(e) => setToEmail(e.target.value)} type="text" required className="outline-none border-b-2 border-gray-400 px-2" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <button onClick={handleEmailChange} className="px-7 py-2 bg-indigo-600 text-white rounded-lg">Send</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SharingContainer
