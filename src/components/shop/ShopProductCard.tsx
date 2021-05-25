import { Link } from 'react-router-dom';
// material
import { Box, Card, Typography, Stack } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';
// routes
import { Product } from '../../@types/products';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
}));

// ----------------------------------------------------------------------

type ShopProductCardProps = {
  product: Product;
};

export default function ShopProductCard({ product }: ShopProductCardProps) {
  const { title, image, artist_name } = product;
  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ProductImgStyle alt={artist_name} src={image} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="subtitle2" noWrap>
          {title}
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            {artist_name}
          </Typography>
          <Typography variant="subtitle2">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'none'
              }}
            >
              <Link to="/stake" target="_blank">STAKE</Link>
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
