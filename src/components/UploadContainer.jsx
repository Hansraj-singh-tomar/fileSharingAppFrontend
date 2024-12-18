import { useState } from "react";
import FileUploadForm from "./FileUploadForm";
import ProgressBar from "./ProgressBar";
import SharingContainer from "./SharingContainer";
import uploadFile from "../utils/uploadFile";

const UploadContainer = () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadUrl, setUploadUrl] = useState('');
    const [loading, setLoading] = useState(null);

    const handleFileUpload = (file) => {
        uploadFile(file, setUploadProgress, setUploadUrl, setLoading);
    };

    return (
        <section className="w-full my-10 p-5 md:flex-1 md:m-10 md:p-10 bg-white rounded-xl">

            {loading && <h2 className="text-center font-semibold text-lg mb-2">Please wait...</h2>}

            {/* Handles the file upload form */}
            <FileUploadForm onFileUpload={handleFileUpload} />


            {/* Progress Container */}
            {
                uploadProgress > 0 && uploadProgress < 100 && (
                    <ProgressBar progress={uploadProgress} />
                )
            }

            {/* Sharing Container */}
            {
                uploadUrl && <SharingContainer uploadUrl={uploadUrl} />
            }
        </section>
    )
}

export default UploadContainer