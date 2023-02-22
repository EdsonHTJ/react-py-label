import JSZip from "jszip";

export class FileManager {
    files: JSZip | undefined

    constructor(files: JSZip) {
        this.files = files
    }

    getBaseFolder() {
        let filename = ""
        this.files?.forEach(
            (f) => {
                filename = f
            }
        )

        filename = filename.substring(0, filename.indexOf("/"))
        return filename
    }

    getFilenames() {
        let filenames: string[] = []
        this.files?.forEach(
            (f) => {
                filenames.push(f)
            }
        )

        return filenames
    }

    findMatchingFile(index: number, format: string) {
        let path = ""
        path += this.getBaseFolder() + "/" + index + "/"
        const fns = this.getFilenames()

        const filenames: string[] = []
        fns.forEach(
            f => {
                const n = f.search(path)
                const n2 = f.search(format)
                if ((n + n2) >= 0) {
                    filenames.push(f)
                }
            }
        )

        return filenames
    }

    getJson(index: number) {
        const name = this.findMatchingFile(index, '.json')
        return this.files?.files[name[0]].async('text')
    }

    getImage(index: number) {
        const name = this.findMatchingFile(index, '.png')
        return this.files?.files[name[0]].async('base64')

    }
}
