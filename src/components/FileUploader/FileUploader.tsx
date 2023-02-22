import React, { ChangeEvent, useRef } from 'react'
import { FileInput, LabelInput } from './styles'

export const FileUploader = ({ onFileSelect }: any): JSX.Element => {

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        // handle validations
        onFileSelect(e.target.files![0])
    }

    return (
        <div>
            <FileInput id="upload" type="file" onChange={handleFileInput} hidden />
            <LabelInput htmlFor="upload">Click Here to Upload</LabelInput>

        </div>
    )
}


