import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";

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

    console.log(JSON.stringify(values));
  };

  return (
    <>
      <Container sx={{ mt: 8 }}>
        <Paper
          variant="outlined"
          square
          sx={{ p: 4, borderTop: (t) => `7px solid #170F1E` }}
        >
          <Typography variant={"h2"}>Registration Details</Typography>
          <Divider sx={{ mt: 4, mb: 2 }} />
          <Typography variant={"body1"} sx={{ mt: 3 }}>
            Please enter your team member details to register
          </Typography>
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
