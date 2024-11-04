'use server'

import AnimeCard from "../animecard"
import { animeProp } from "./types"



export const fetchAnimes = async(page: number) => {
    const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
    const data = await res.json()
   return data.map((item: animeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))

}