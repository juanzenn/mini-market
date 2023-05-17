import { FileRouter } from "@/app/api/uploadthing/core";
import { useToast } from "@/components/ui/use-toast";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";

export function useProductForm(pending: boolean) {
  const { uploadFiles } = generateReactHelpers<FileRouter>();
  const { toast } = useToast();

  const [image, setUploadedFile] = useState<null | {
    fileUrl: string;
    fileKey: string;
  }>(null);
  const [loadingFile, setLoadingFile] = useState(false);

  async function onDrop(acceptedFiles: File[], rejectedFiles: FileRejection[]) {
    if (rejectedFiles.length > 0) {
      const [rejection] = rejectedFiles;
      toast({
        title: `Error (${rejection.errors?.[0]?.code})`,
        description: "Ocurrió un error al subir el archivo",
        variant: "destructive",
      });

      return;
    }
    if (acceptedFiles.length === 0) return;

    setLoadingFile(true);
    const res = await uploadFiles(acceptedFiles, "imageUploader");
    setUploadedFile(res[0]);
    toast({
      title: `Archivo subido`,
      description: "El archivo se ha subido correctamente",
    });
    setLoadingFile(false);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", ".jpg", ".jpeg"],
    },
    multiple: false,
    maxSize: 2 * 1024 * 1024,
    disabled: loadingFile || pending,
  });

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    image,
    loadingFile,
  };
}
