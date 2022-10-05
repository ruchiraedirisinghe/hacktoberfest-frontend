import {
  TextField,
  Snackbar,
  Box,
  ListItem,
  ListItemButton,
  Button,
  Container,
  Paper,
  Typography,
  Divider,
  ListItemText,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { AppConfig } from "../config";

enum UserInformation {
  id = "id",
  FULL_NAME = "fullName",
  BATCH = "batch",
  STUDENT_ID = "studentId",
  PHONE = "phone",
  EMAIL = "email",
  GUARDIAN_NAME = "guardianName",
  GUARDIAN_PHONE = "guardianPhone",
}

const RegisterPage = () => {
  const [teamName, setTeamName] = useState("");
  const [showSnackBar, setShowSnakBar] = useState(false);
  const [message, setMessage] = useState("");
  const [members, setMembers] = useState([
    {
      id: 0,
      fullName: "test",
      batch: "",
      studentId: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    },

    {
      id: 1,
      fullName: "",
      batch: "",
      studentId: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    },

    {
      id: 2,
      fullName: "",
      batch: "",
      studentId: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    },

    {
      id: 3,
      fullName: "",
      batch: "",
      studentId: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    },
  ]);

  const createRegistration = useMutation((newRegistration: any) =>
    axios.post(`${AppConfig.api_url}/registration`, newRegistration)
  );

  const updateMemberValues = (
    index: number,
    value: string,
    propertyName: string
  ) => {
    setMembers(
      members.map((item) =>
        item.id === index ? { ...item, [propertyName]: value } : item
      )
    );
  };

  const submitForm = () => {
    const values = {
      teamName: teamName,
      members,
    };

    const data = createRegistration.mutate(values);
    console.log(data);
    setShowSnakBar(true);
    setMessage("Registration success");
  };

  return (
    <>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={() => setShowSnakBar(false)}
        message={message}
      />

      <Container sx={{ mt: 8 }}>
        <Paper square sx={{ mb: 5 }}>
          <Box
            component="img"
            alt="test"
            src="/cover.png"
            width="100%"
            sx={{
              borderRadius: 2,
            }}
          />
        </Paper>

        <Paper
          variant="outlined"
          square
          sx={{ p: 4, borderTop: (t) => `7px solid #170F1E` }}
        >
          <Typography variant={"h2"}>Registration Details</Typography>
          <Divider sx={{ mt: 4, mb: 2 }} />
          <Typography variant={"body1"} sx={{ mt: 3 }}>
            HACKTO-NIGHT is an overnight hackathon organized by the FOSS
            Community of NSBM to be held on the 14th and 15th of October 2022.
            This hackathon is only open for NSBM undergraduates, and we expect
            the participation of around 100 competitors.
          </Typography>
          <Typography variant={"body1"} sx={{ mt: 3 }}>
            The team spirit, technological knowledge, problem-solving skills,
            and coding skills of the participants will be put to the test during
            this hackathon. We hope to increase the contribution of NSBM
            undergraduates towards open source through this hackathon as well.
          </Typography>
          <Typography
            variant={"h5"}
            sx={{ mt: 5, textDecoration: "underline" }}
          >
            Event details are as follows:
          </Typography>
          <ListItem component="div" disablePadding sx={{ mt: 3 }}>
            <ListItemText
              primary={`Venue: Student Center, NSBM Green University `}
            />
          </ListItem>
          <ListItem component="div" disablePadding>
            <ListItemText primary={`Date: 14th & 15th October 2022 `} />
          </ListItem>
          <ListItem component="div" disablePadding>
            <ListItemText
              primary={`Time: 5.00 pm 14th October to 8.00 am 15th October`}
            />
          </ListItem>
          <Typography
            variant={"h5"}
            sx={{ mt: 5, textDecoration: "underline", mb: 5 }}
          >
            Please feel free to contact us for further inquiries.
          </Typography>
          <ListItem component="div" disablePadding>
            <ListItemText primary="Mr. Thaanu Perera (President - FOSS Community of NSBM): 077 329 8319" />
          </ListItem>

          <ListItem component="div" disablePadding>
            <ListItemText primary="Ms. Nethmi Kodikara (President - Women in FOSS NSBM): 070 388 0082" />
          </ListItem>
        </Paper>

        <Paper variant="outlined" square sx={{ p: 5, mt: 7, mb: 7 }}>
          <Typography variant={"h5"}>Team Details</Typography>

          <TextField
            id="outlined-basic"
            onChange={(e) => setTeamName(e.target.value)}
            label="Team Name"
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
          />
        </Paper>

        {members.map((member) => {
          return (
            <>
              <Paper variant="outlined" square sx={{ p: 5, mt: 7, mb: 7 }}>
                <Typography variant={"h5"}>
                  {member.id == 0 ? "Member One " : null}
                  {member.id == 1 ? "Member Two " : null}
                  {member.id == 2 ? "Member Three " : null}
                  {member.id == 3 ? "Member Four (optional)" : null}
                </Typography>

                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.FULL_NAME
                    )
                  }
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Batch"
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.BATCH
                    )
                  }
                  fullWidth
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Student ID"
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.STUDENT_ID
                    )
                  }
                  fullWidth
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.EMAIL
                    )
                  }
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.PHONE
                    )
                  }
                  fullWidth
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Guardian Name"
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.GUARDIAN_NAME
                    )
                  }
                  fullWidth
                  sx={{ mt: 4 }}
                />

                <TextField
                  id="outlined-basic"
                  label="Guardian’s Phone Number "
                  variant="outlined"
                  onChange={(e) =>
                    updateMemberValues(
                      member.id,
                      e.target.value,
                      UserInformation.GUARDIAN_PHONE
                    )
                  }
                  fullWidth
                  sx={{ mt: 4, mb: 4 }}
                />
              </Paper>
            </>
          );
        })}

        <Button
          variant="contained"
          sx={{ mb: 10 }}
          onClick={() => submitForm()}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default RegisterPage;
