import React from 'react'
import { Box, Card, Grid, Container } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import StakeAction from '../components/stake/Action';

const mock = [
    {
        title: "New school",
        image: "https://dontbuymeme.com/_next/image?url=https%3A%2F%2Fmedia.dontbuymeme.com%2Fcreators%2Fasimsart%2Fmedia%2Fdrop-card-3ltHLD1sJpKtnEUTHGw8j&w=1920&q=75",
        artist_name: "Anthony Sims",
        url: "https://dontbuymeme.com/asimsart"
    }
]

const ProductImgStyle = styled('img')(({ theme }) => ({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    position: 'absolute'
}));

function Stake() {
    const { image, artist_name } = mock[0];
    return (
        <Container>
            <>
                <Card>
                    <Grid container>
                        <Grid item xs={12} md={6} lg={7}>
                            <Card>
                                <Box sx={{ pt: '100%', position: 'relative' }}>
                                    <ProductImgStyle alt={artist_name} src={image} />
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={5}>
                            <StakeAction />
                        </Grid>
                    </Grid>
                </Card>
            </>
        </Container>
    )
}

export default Stake
