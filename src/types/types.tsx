export type Product = {
    id?:string,
    name: string,
    inStock?: boolean,
    gallery?: [string],
    description?: string,
    category?: string,
    attributes?: [Attributes]
    prices?: Price
    brand: string,
};

export type Attributes = {
    id: string,
    name: string,
    type: string,
    items: [Attribute]
}

export type Attribute = {
    displayValue: string
    value: string
    id: string
}

export type Price = {
    currency: Currency
    amount: number
}

export type Currency = {
    label: string,
    symbol: string,
}