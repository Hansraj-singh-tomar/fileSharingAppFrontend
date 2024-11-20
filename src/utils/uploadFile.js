// src/utils/uploadFile.js
import axios from "axios";

const uploadFile = (file, setUploadProgress, setUploadUrl, setLoading) => {
    const formData = new FormData();
    formData.append("myfile", file);
    setLoading(true);
    axios.post("http://localhost:3000/api/files", formData, {
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
            setLoading(false);
            setUploadUrl(response.data.url);
            setUploadProgress(0); // Complete
        })
        .catch((error) => {
            console.error("Error uploading file:", error);
            setUploadProgress(0);
            setLoading(false);
        });
};

export default uploadFile;
