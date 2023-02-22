import JSZip from "jszip"
import { useState } from "react"
import { FileUploader } from "../../components/FileUploader/FileUploader"
import { FileManager } from "../../services/filemanager"
import { MarkupPage } from "../Markup/mark"
import { UploadDiv } from "./styles"





export const UploadPage = (): JSX.Element => {

    const [loaded, setLoaded] = useState(false)
    const [files, setFiles] = useState(null as unknown as JSZip)
    const handleFile = (file: File) => {
        const zip = new JSZip();
        zip.loadAsync(file).then(
            (files) => {
                setFiles(files)
                setLoaded(true)
            }
        )

    }

    if (loaded) {
        return (
            <MarkupPage fileManager={new FileManager(files)}></MarkupPage>
        )
    }

    return (
        <UploadDiv>
            <FileUploader onFileSelect={(file: any) => { handleFile(file) }}></FileUploader>
        </UploadDiv>
    )
} 