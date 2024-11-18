// src/utils/uploadFile.js
import axios from "axios";

const uploadFile = (file, setUploadProgress, setUploadUrl) => {
    const formData = new FormData();
    formData.append("myfile", file);

    axios.post("https://file-sharing-backend-gules.vercel.app/api/files", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
        },
    })
        .then((response) => {
            console.log("File uploaded successfully:", response);
            setUploadUrl(response.data.file);
            setUploadProgress(0); // Complete
        })
        .catch((error) => {
            console.error("Error uploading file:", error);
            setUploadProgress(0);
        });
};

export default uploadFile;
