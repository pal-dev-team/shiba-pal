import { useState, useEffect, useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { CardType } from '../types/cardInfo';
export const useCardInfo = () => {
    
    const { library, chainId } = useWeb3React<Web3Provider>();
    const [cardInfo, setCardInfo] = useState<CardType[]>();

    useEffect(() => {
        if (!library || !chainId) return;
        useCardInfo();
    }, [library, chainId]);

    const useCardInfo = useCallback(async () => {
        const totalCard: number = 2
        const promiseData = [];
        const baseMetadataURI: string = "https://api.dontbuymeme.com/memes/";
        for (let i = 1; i <= totalCard; i++) {
            const uri = baseMetadataURI + i
            promiseData.push(fetch(uri))
        }
        Promise.all(promiseData).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setCardInfo(data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [chainId])

    return { cardInfo }
}
