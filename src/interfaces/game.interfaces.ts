export interface Game {
    name: string;
    type: string;
    image: string;
    description: string;
    is_open: boolean;
    link?: string;
    is_done: boolean;
    id: number;
}