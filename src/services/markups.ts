




export class MarkJson {
    box: Array<Array<number>> = [];
    type: Array<string> = [];
    word: Array<string> = [];
}

export class SingleMark {
    box: Array<number> = [];
    type: string = '';
    word: string = '';
}

export const MarkJsonToSingleMarks = (obj: MarkJson) => {
    const marks: SingleMark[] = []

    for (let i = 0; i < obj.box.length; i++) {
        let auxMark: SingleMark = new SingleMark()
        auxMark.box = obj.box[i]
        auxMark.type = obj.type[i]
        auxMark.word = obj.word[i]

        marks.push(auxMark)
    }

    return marks
}