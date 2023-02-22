import JSZip from "jszip"
import { useState } from "react"
import { FileUploader } from "../../components/FileUploader/FileUploader"
import { FileManager } from "../../services/filemanager"
import { MarkupDiv, MarkupElementDiv } from "./styles"



export const MarkupPage = (props: any): JSX.Element => {
    const files = props.fileManager as FileManager
    const [json, setJson] = useState('')
    const [image, setImage] = useState('')

    if (json == '') {
        console.log('dep')
        files.getJson(0)?.then((f) => {
            setJson(f)
        })

        files.getImage(0)?.then((f) => {
            setImage(f)
        })
    }

    const markupElement = () => {
        return <>
            <MarkupElementDiv>
                <img id="#markup" height="700" src={"data:image/png;base64," + image}></img>
            </MarkupElementDiv>
        </>
    }

    return (
        <MarkupDiv>
            {markupElement()}
        </MarkupDiv>
    )
}