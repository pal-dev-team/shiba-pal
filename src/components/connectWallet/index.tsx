import { FC, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

// material
import {
    Box,
    List,
    Avatar,
    Dialog,
    ListItem,
    ListItemText,
    ListItemAvatar
} from '@material-ui/core';
// ----------------------------------------------------------------------

import { useStores } from '../../hooks/useStores';
import { useEagerConnect, useInactiveListener } from '../../hooks/useConnectWallet';
import { ConnectorNames, connectorsByName } from '../../lib/connectors';
import { getErrorMessage } from '../../lib/connect-error';

// ----------------------------------------------------------------------
const textButton: { [connectorName: string]: string } = {
    [ConnectorNames.Injected]: 'Metamask',
    [ConnectorNames.WalletConnect]: 'Wallet Connect',
};

const connectorsIcon: { [connectorName: string]: string } = {
    [ConnectorNames.Injected]: "assets/connect-wallet/metamask-wallet.png",
    [ConnectorNames.WalletConnect]: "assets/connect-wallet/wallet-connect.png"
};

interface Iprops {
    open: boolean,
    setOpen: (setOpne: boolean) => void
}

export const ConnectWallet: FC<Iprops> = ({ open, setOpen }) => {
    const { activate, error } = useWeb3React<Web3Provider>();

    const {
        applicationStore: { setErrorMessage },
    } = useStores();

    useEffect(() => {
        if (error) setErrorMessage({ message: getErrorMessage(error), type: 'warning' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    const triedEager = useEagerConnect();
    useInactiveListener(!triedEager as boolean);


    return (
        <Box sx={{ textAlign: 'center' }}>
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
                <List>
                    {Object.keys(connectorsByName).map((name) => (
                        <ListItem button onClick={() => activate(connectorsByName[name])} key={name}>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'info.main',
                                        backgroundColor: 'info.lighter'
                                    }}
                                >
                                    <img src={connectorsIcon[name]} alt={name} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={textButton[name]} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </Box>
    )
}