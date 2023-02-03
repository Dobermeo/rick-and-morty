import {fetchRickAndMorty, rickAndMortyLocalizations} from "../service/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'

interface LocalizationsData {
    results: Array<{
        image: string;
        id: number;
        name: string;
        type:string;
    }>;
}

const Localizations: React.FC = () => {
    const { data } = useSWR<LocalizationsData>(rickAndMortyLocalizations, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Localizations</h1>

            <div className={styles.container}>
                {data?.results.map((localizations) => (
                    <AntCard  key={localizations.id} name={localizations.name} description={localizations.type} image={localizations.image}></AntCard>
                ))}
            </div>


        </>
    );
};

export default Localizations;
