
export type Pool = {
    name: string;
    points: string;
}

export type Attributes = {
    trait_type: string;
    value: string | number;
    display_type?: string;
}

export type CardType = {
    attributes: Array<Attributes>;
    description: string;
    external_url: string;
    image: string;
    name: string;
    pool: Pool
}