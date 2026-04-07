"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#f6fff6", minHeight: "100vh" }}>
      {/* 🌿 NAVBAR */}
      <AppBar position="static" sx={{ bgcolor: "#06402B" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            IIT (ISM) Dhanbad
          </Typography>

          <Box>
            <Button color="inherit" onClick={() => router.push("/")}>
              Home
            </Button>

            <Button color="inherit" onClick={() => router.push("/admin_login")}>
              Admin Login
            </Button>

            <Button
              color="inherit"
              onClick={() => router.push("/student_login")}
            >
              Student Login
            </Button>

            <Button
              color="inherit"
              onClick={() => router.push("/recruiter_login")}
            >
              Recruiter Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 🌿 HERO SECTION */}
      <Box
        sx={{
          bgcolor: "#00A300",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold"  sx={{color: "rgba(0,0,0)"}} gutterBottom>
            Recruit India's Best Engineers
          </Typography>

          <Typography variant="h6" sx={{ mb: 4, color: "#555" }}>
            IIT (ISM) Dhanbad — Join 500+ Companies Hiring Every Year
          </Typography>

          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#43a047",
                px: 4,
                py: 1.5,
                mr: 2,
                "&:hover": { bgcolor: "#388e3c" },
              }}
              onClick={() => router.push("/recruiter_login")}
            >
              Register Now
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#43a047",
                color: "#43a047",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "#c8e6c9",
                  borderColor: "#2e7d32",
                },
              }}
              onClick={() => router.push("/recruiter_login")}
            >
              Recruiter Login
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 🌿 RECRUITERS SECTION */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#2e7d32" }}
        >
          Prominent Recruiters
        </Typography>

        <Grid container spacing={3}>
          {["Google", "Microsoft", "Amazon", "Salesforce", "Flipkart"].map(
            (company, index) => (
              <Grid item xs={6} md={2.4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    bgcolor: "#ffffff",
                  }}
                >
                  <Typography>{company}</Typography>
                </Paper>
              </Grid>
            ),
          )}
        </Grid>
      </Container>

      {/* 🌿 WHY RECRUIT SECTION */}
      <Box sx={{ bgcolor: "#e8f5e9", py: 6 }}>
        <Container>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#2e7d32" }}
          >
            Why Recruit at IIT (ISM)?
          </Typography>

          <Typography sx={{ mb: 1, color: "rgba(0,0,0)" }}>
            🌟 99+ year legacy of excellence
          </Typography>
          <Typography sx={{ mb: 1, color:"rgba(0,0,0)" }}>
            🌍 Unique mining, energy & geoscience talent
          </Typography>
          <Typography sx={{color:"rgba(0,0,0)"}}>
            🎓 Multi-disciplinary programmes: B.Tech to PhD
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
