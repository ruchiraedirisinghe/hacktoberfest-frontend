import { Container, Typography, Paper } from "@mui/material";
import { Divider } from "../components/Divider";
import { AppConfig } from "../config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useLeaderboard from "../hooks/useLeaderboard";

const teams = [
  {
    name: "Team One",
    members: ["member one", "member two", "member three"],
  },
  {
    name: "Team Two",
    members: ["member one", "member two", "member three"],
  },
];

const LeaderBoard = () => {
  const { isLoading, error, data } = useLeaderboard();

  return (
    <>
      {AppConfig.leaderboard_closed ? (
        <>
          <Container sx={{ mt: 5 }} maxWidth="lg">
            <Divider />
            <Typography variant={"h2"} className="headerShadow" sx={{ mb: 4 }}>
              This Competition not started yet. Please wait
            </Typography>
          </Container>

          <Container sx={{ mt: 10, mb: 50 }}>
            <div className="large_divider" />
          </Container>
        </>
      ) : (
        <Container sx={{ mt: 5 }} maxWidth="lg">
          <Divider />
          <Typography variant={"h2"} className="headerShadow" sx={{ mb: 4 }}>
            Leaderboard
          </Typography>

          {isLoading ? (
            <>
              <Paper sx={{ mb: 3 }}>Loading...</Paper>
            </>
          ) : (
            <>
              {data.map((item: any) => {
                return (
                  <>
                    <Paper sx={{ mb: 3 }}>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            variant={"h5"}
                            className="headersmallShadow"
                          >
                            {item?.team?.teamName}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {item?.team ? (
                            <>
                              {item?.team?.members.map((member: any) => {
                                return (
                                  <>
                                    <Typography className="headersmallShadow">
                                      {member?.fullName}
                                    </Typography>
                                  </>
                                );
                              })}
                            </>
                          ) : (
                            <>no members found </>
                          )}
                        </AccordionDetails>
                      </Accordion>
                    </Paper>
                  </>
                );
              })}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default LeaderBoard;
