// utils/cloudinary.js
import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
    formData
  );

  return res.data.secure_url;
};
