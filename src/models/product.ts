export class Product {
    private _name: string;
    private _price: number;
    private _description: string;
    private _image: string;

    constructor(name: string, price: number, description: string, image: string) {
        this._name = name;
        this._price = price;
        this._description = description;
        this._image = image;
    }

    get name(): string { return this._name; }

    get price(): number { return this._price; }

    get description(): string { return this._description; }

    get image(): string { return this._image; }


    toString(): string {
        return `Product: ${this._name} \nPrice: ${this._price} \nDescription: ${this._description} \nImage: ${this._image}`;
    }
}