export interface animeProp {
    id: number;
    name: string;
    image: {
        original: string;
    };
    kind: string;
    score: string,
    episodes: number;
    episodes_aired: number;
}

export interface Prop {
    anime: animeProp;
    index: number

}