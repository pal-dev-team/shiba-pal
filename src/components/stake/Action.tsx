import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import minusFill from '@iconify/icons-eva/minus-fill';
import { useFormik, Form, FormikProvider, useField } from 'formik';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Divider, Typography, FormHelperText } from '@material-ui/core';
import { MIconButton, MButton } from '../@material-extend';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(3),
    [theme.breakpoints.up(1368)]: {
        padding: theme.spacing(5, 8)
    }
}));
// ----------------------------------------------------------------------
const Incrementer = ({ name, available }: { name: string; available: number }) => {
    const [field, , helpers] = useField(name);
    const { value } = field;
    const { setValue } = helpers;

    const incrementQuantity = () => {
        setValue(value + 1);
    };
    const decrementQuantity = () => {
        setValue(value - 1);
    };

    return (
        <Box
            sx={{
                py: 0.5,
                px: 0.75,
                border: 1,
                lineHeight: 0,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                borderColor: 'grey.50032'
            }}
        >
            <MIconButton size="small" color="inherit" disabled={value <= 1} onClick={decrementQuantity}>
                <Icon icon={minusFill} width={16} height={16} />
            </MIconButton>
            <Typography
                variant="body2"
                component="span"
                sx={{
                    width: 40,
                    textAlign: 'center',
                    display: 'inline-block'
                }}
            >
                {value}
            </Typography>
            <MIconButton
                size="small"
                color="inherit"
                disabled={value >= available}
                onClick={incrementQuantity}
            >
                <Icon icon={plusFill} width={16} height={16} />
            </MIconButton>
        </Box>
    );
};

export default function StakeAction() {
    const isMaxQuantity = 2 >= 2;
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            quantity: 2 < 1 ? 0 : 1
        },
        onSubmit: async () => {
            console.log('hello');
        }
    });
    const { touched, errors } = formik;
    return (
        <RootStyle>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate>
                    <Box
                        sx={{
                            mb: 3,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                            Max
                        </Typography>

                        <div>
                            <Incrementer name="quantity" available={2} />
                            <Typography
                                variant="caption"
                                sx={{
                                    mt: 1,
                                    display: 'block',
                                    textAlign: 'right',
                                    color: 'text.secondary'
                                }}
                            >
                                Available: {2}
                            </Typography>

                            <FormHelperText error>{touched.quantity && errors.quantity}</FormHelperText>
                        </div>
                    </Box>

                    <Divider sx={{ borderStyle: 'dashed' }} />

                    <Box sx={{ mt: 5 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <MButton
                                    fullWidth
                                    disabled={isMaxQuantity}
                                    size="large"
                                    type="button"
                                    color="warning"
                                    variant="contained"
                                    startIcon={<Icon icon={minusFill} />}
                                    onClick={() => console.log('')}
                                    sx={{ whiteSpace: 'nowrap' }}
                                >
                                    UnStake
                                </MButton>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    startIcon={<Icon icon={plusFill} />}
                                >
                                    Stake
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Form>
            </FormikProvider>
        </RootStyle>
    );
}
