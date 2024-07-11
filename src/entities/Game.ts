import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Plublisher";

export default interface Game {
    description_raw: string;
    genres: Genre[];
    publishers: Publisher[];
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}
