import { useState } from "react";
import FileUploadForm from "./FileUploadForm";
import ProgressBar from "./ProgressBar";
import SharingContainer from "./SharingContainer";
import uploadFile from "../utils/uploadFile";

const UploadContainer = () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadUrl, setUploadUrl] = useState('');

    const handleFileUpload = (file) => {
        uploadFile(file, setUploadProgress, setUploadUrl);
    };

    return (
        <section className="flex-1 m-10 p-10 bg-white rounded-xl">
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