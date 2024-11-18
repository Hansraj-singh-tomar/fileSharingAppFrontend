/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import fileImg from "../assets/fileImg.png";

const FileUploadForm = ({ onFileUpload }) => {
    const fileInputRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) onFileUpload(file);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    // Handle drag over event
    const handleDragOver = (event) => {
        event.preventDefault(); // Prevent default to allow drop
    };

    // Handle file drop event
    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0]; // Get the first file
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <form
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {/* drop zone */}
            <div
                className={`w-full flex flex-col justify-center items-center border-dashed border-indigo-600 border-2 rounded-lg p-10 cursor-pointer transition-colors duration-300 ${isDragging ? 'bg-indigo-500' : 'bg-white'}`}
            >
                <img src={fileImg} width={200} alt="file image icon" className={`transition-transform duration-300 ${isDragging ? 'scale-110' : 'scale-100'}`} />
                <input ref={fileInputRef} onChange={handleFileChange} type="file" hidden />
                <h2 className="text-lg font-semibold">
                    Drop your Files here or, <span onClick={handleBrowseClick} className="text-indigo-600 cursor-pointer hover:text-indigo-400">browse</span>
                </h2>
            </div>
        </form>
    )
}

export default FileUploadForm