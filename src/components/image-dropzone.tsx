import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ImageDropzoneProps {
  photos: string[];
  onFilesAdded: (filesToUpload: string[]) => Promise<void>;
  onFileDelete: (url: string) => Promise<void>;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({ photos, onFilesAdded, onFileDelete }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("thelibrary")
      .upload(fileName, file);

    if (error) {
      console.error("Upload failed:", error.message);
    } else {
      const { data: publicUrlData } = supabase.storage
        .from("thelibrary")
        .getPublicUrl(fileName);
      await onFilesAdded([publicUrlData.publicUrl]);
    }

    setUploading(false);
  };

  return (
    <div className="p-4 border rounded-lg">
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={uploadImage}
        disabled={uploading}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {photos.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {photos.map((url, index) => (
            <div key={index} className="relative">
              <img
                src={url}
                alt={`Uploaded ${index + 1}`}
                className="w-48 h-48 object-cover"
              />
              <button
                onClick={() => onFileDelete(url)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
