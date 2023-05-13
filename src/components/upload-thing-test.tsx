"use client";

import "@uploadthing/react/styles.css";

import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton, UploadDropzone } from "@uploadthing/react";

export default function UploadThingButton() {
  return (
    <UploadDropzone<OurFileRouter>
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
