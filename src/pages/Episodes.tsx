import {fetchRickAndMorty, rickAndMortyEpisodes} from "../service/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
//import AntCard from "../components/AntCard";
import styles from './character.module.css'
import Card from "antd"

interface EpisodesData {
    results: Array<{
        id: number;
        name: string;
        air_date: string;
        episode:string;
    }>;
}

const Episodes: React.FC = () => {
    const { data } = useSWR<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Episodes</h1>

            <div className={styles.container}>
                {data?.results.map((episode) => (
                    <Card  key={episode.id} name={episode.name} air_date={episode.air_date}  episode={episode.episode}></Card>

                ))}
            </div>


        </>
    );
};
export default Episodes;


  