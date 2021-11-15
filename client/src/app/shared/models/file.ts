export class File {
    constructor(
        public id: number,
        public name: string,
        public contentType: string,
        public size: number,
        public data: ArrayBuffer
    ) {}
}
