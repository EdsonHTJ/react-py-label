import JSZip from "jszip"
import { useEffect, useState } from "react"
import { FileUploader } from "../../components/FileUploader/FileUploader"
import { FileManager } from "../../services/filemanager"
import { MarkJson, MarkJsonToSingleMarks } from "../../services/markups"
import { MarkupDiv, MarkupElementDiv } from "./styles"



export const MarkupPage = (props: any): JSX.Element => {
    const files = props.fileManager as FileManager
    const [json, setJson] = useState('')
    const [image, setImage] = useState('')
    const [h1, seth1] = useState(0)
    const [h2, seth2] = useState(0)

    if (json == '') {
        console.log('dep')
        files.getJson(0)?.then((f) => {
            setJson(f)
        })

        files.getImage(0)?.then((f) => {
            setImage("data:image/png;base64," + f)
        })
    }

    const getImgHW = () => {
        const imSrc: HTMLImageElement | null = document.querySelector("#markup")
        imSrc!.onload = () => {
            seth1(imSrc?.height!)
        }

        const newImageObj = new Image()
        newImageObj.src = image
        newImageObj.onload = () => {
            seth2(newImageObj?.height)
        }
    }

    useEffect(() => {
        getImgHW()
    })

    const showBoxes = () => {
        if (!h1 || !h2) {
            return <></>
        }

        const proportion = h2 / h1

        const obj: MarkJson = JSON.parse(json)
        const marks = MarkJsonToSingleMarks(obj)
        console.log(marks)
        return <></>
    }

    const markupElement = () => {
        return <>
            <MarkupElementDiv>
                <img id="markup" height="700" src={image}></img>
                {showBoxes()}
            </MarkupElementDiv>
        </>
    }

    return (
        <MarkupDiv>
            {markupElement()}
        </MarkupDiv>
    )
}