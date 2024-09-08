import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone";

export const FileInput = () => {
    const [ file, setFile ] = useState<File | null>(null);

    const onDrop = useCallback((files: File[]) => {
        setFile(files[0]);
    }, []);

    const dropzone = useDropzone({
        onDrop, 
        accept: {
            "application/pdf": [".pdf"],
        }
    });

    if (file) return null;

    return(
        <div
        {...dropzone.getRootProps()}
        className="w-1/2 h-full rounded-lg border-dashed border-4 border-gray-600 hover:border-gray-500 bg-gray-700 hover:bg-gray-600 transition-all">
            <label htmlFor="dropzone-file" className="cursor:pointer w-full h-full">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                    <p className="mb-2 text-lg text-gray-400"><span className="font-bold">Clique para enviar</span>ou arraste até aqui</p>
                    <p className="text-gray-400 text-sm">PDF</p>
                </div>
            </label>
            <input {...dropzone.getInputProps()} className="hidden" />
        </div>
    )
}