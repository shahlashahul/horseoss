import { Box, Grid, Link, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const BackgroundImage = '/images/dw-bg.png';

const BreadcrumbComp = () => {
  const router = useRouter();
  const value = router.asPath.toLowerCase().split('/');

  const path = value.map(
    (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
  );

  return (
    <>
      <Link href="/">
        <Typography variant="body1" sx={{ display: 'inline', color: '#fff' }}>
          Home | {''}
        </Typography>
      </Link>
      <Typography variant="body1" sx={{ display: 'inline', color: '#D4B57E' }}>
        {path}
      </Typography>
    </>
  );
};

const PageBanner = (props) => {
  const theme = useTheme();

  return (
    <Grid container my={2} spacing={1}>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Box
          sx={{
            width: '100%',
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: theme.palette.primary.contrastText,
            ...theme.common.container
          }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: '700' }}>
            {props.title}
          </Typography>
          <BreadcrumbComp />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PageBanner;
