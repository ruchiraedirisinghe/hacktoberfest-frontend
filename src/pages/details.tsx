import { Container, Link, Typography, Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { Divider } from "../components/Divider";

export const DetailsPage = () => {
  return (
    <>
      <Container sx={{ mt: 8 }} className="bluebackground">
        <Typography variant={"h1"} className="headerShadow" sx={{ mb: 5 }}>
          Registration Details
        </Typography>

        <Divider />

        <Box>
          <Typography variant={"h2"} className="headerShadow" sx={{ mb: 5 }}>
            Team Members
          </Typography>

          <TeamMember />
          <TeamMember />
          <TeamMember />
        </Box>

        <Divider />

        <Typography variant={"h1"} className="headerShadow" sx={{ mb: 5 }}>
          Event Details
        </Typography>

        <div
          className="htb-button"
          style={{
            width: "100%",
          }}
        >
          <Button
            sx={{ mb: 10 }}
            component={Link}
            className="btn special"
            href={"/guidlines.pdf"}
          >
            Download Guidlines
          </Button>
        </div>
      </Container>
    </>
  );
};

const TeamMember = () => {
  return (
    <>
      <div className="team_top_header team_top_styles">
        <details className="team_member">
          <summary>
            <div>
              <p>[ GitHub Sponsors ]</p>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/34376516?u=ac71ee91613645be969896427c59754941d15e30&amp;v=4"
                  alt=""
                  width="64"
                  height="64"
                />
                <div>
                  <h3>deep-translator</h3>
                  <span>
                    A flexible free and unlimited python tool to translate
                    between different languages in a simple way using multiple
                    translators.
                  </span>
                </div>
              </div>
            </div>
          </summary>
          <div>
            <p>
              <div className="btn">Support @nidhaloff via GitHub Sponsors</div>
            </p>
          </div>
        </details>
      </div>
    </>
  );
};
