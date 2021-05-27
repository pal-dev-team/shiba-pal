import { useState, useEffect } from 'react';

import { CardType } from '../types/cardInfo';
export const useCardInfo = () => {
    const [cardInfo, setCardInfo] = useState<CardType[]>();
    useEffect(() => {
        const totalCard: number = 2
        const promiseData = [];
        const baseMetadataURI: string = "https://api.dontbuymeme.com/memes/";
        for (let i = 1; i <= totalCard; i++) {
            const uri = baseMetadataURI + i;
            promiseData.push(fetch(uri));
        }
        Promise.all(promiseData).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setCardInfo(data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);
    return { cardInfo }
}
