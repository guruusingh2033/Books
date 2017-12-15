export class Book{
    public id: number;
    public name: string;
    public author: string;
    public pages: number;
    public publicationDate: string;

    constructor(id: number, name: string, auth: string, pages: number, publicationDate: Date){
        this.id = id;
        this.name = name;
        this.author = auth;
        this.pages = pages;
        this.publicationDate = publicationDate.getFullYear() + '-' + publicationDate.getMonth()+1 + '-' + publicationDate.getDate();
    }
}