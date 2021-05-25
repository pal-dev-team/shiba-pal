// material
import { Container, Grid, CardHeader } from '@material-ui/core';
// components
import Page from '../components/Page';
import ShopProductList from '../components/shop/ShopProductList';

const mock = [
    {
        title: "New school",
        image: "https://dontbuymeme.com/_next/image?url=https%3A%2F%2Fmedia.dontbuymeme.com%2Fcreators%2Fasimsart%2Fmedia%2Fdrop-card-3ltHLD1sJpKtnEUTHGw8j&w=1920&q=75",
        artist_name: "Anthony Sims",
        url: "https://dontbuymeme.com/asimsart"
    },
    {
        title: "Largest donation",
        image: "https://dontbuymeme.com//_next/image?url=https%3A%2F%2Fmedia.dontbuymeme.com%2Fcreators%2Fthe-block-times%2Fmedia%2Fdrop-card-c8satt8n131_mHr0v5sA5&w=1920&q=75",
        artist_name: "The Block Times",
        url: "https://dontbuymeme.com/the-block-times"
    },
    {
        title: "Meme cats",
        image: "https://dontbuymeme.com/_next/image?url=https%3A%2F%2Fmedia.dontbuymeme.com%2Fcreators%2FKristyGlas%2Fmedia%2Fdrop-card-6nCh0ynJqgDtMVxIC_jhv&w=1920&q=75",
        artist_name: "Kristy Glas",
        url: "https://dontbuymeme.com/KristyGlas"
    },
    {
        title: "Meme heroes",
        image: "https://dontbuymeme.com/_next/image?url=https%3A%2F%2Fmedia.dontbuymeme.com%2Fcreators%2FDominicGlover%2Fmedia%2Fdrop-card-EHOc37N6yPJ1HqTF3idAu&w=1920&q=75",
        artist_name: "Dominic Glover",
        url: "https://dontbuymeme.com/DominicGlover"
    }
]

// ----------------------------------------------------------------------

export default function Collections() {
    return (
        <Page title="Dashboard: App | Minimal-UI">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <CardHeader title="Your collections" />
                        <ShopProductList products={mock} isLoad={false} />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}
