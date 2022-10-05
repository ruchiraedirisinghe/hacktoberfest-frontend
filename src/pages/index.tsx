import { useTheme } from "@emotion/react";
import { Container, Box, Button, Stack, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Container>
        <Box pt={{ xs: 11.5, md: 0 }} sx={{ position: "relative", mt: 15 }}>
          <Typography variant={"h2"} textAlign="center">
            The Home page stuff
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
