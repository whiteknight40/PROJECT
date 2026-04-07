"use client";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
    let tempErrors = {};

    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Enter a valid email";
    }

    if (!password) {
      tempErrors.password = "Password is required";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
    };
    
    const handleLogin = () => {
      if(validate())
        router.push("/recruiter_landing");
  };

  return (
    <Box
      sx={{ position: "relative", height: "100vh", backgroundColor: "#ffffff" }}
    >
      {/* 🔝 Navbar */}
      <AppBar position="static" sx={{ background: "#0b1f3a" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">IIT ISM Dhanbad</Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Admin Login</Button>
            <Button color="inherit">Student Login</Button>
            <Button color="inherit">Recruiter Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 💳 Login Card */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 64px)"
      >
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            width: 350,
            borderRadius: 4,
            backdropFilter: "blur(15px)",
            background: "rgba(100, 149, 237, 0.3)",
            border: "1px solid rgba(0,0,0,0.3)",
            color: "#000",
          }}
        >
          <Typography variant="h5" textAlign="center" mb={3}>
            Recruiter Login
          </Typography>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            InputLabelProps={{
              style: { color: "#000" }, // label color
            }}
            InputProps={{
              style: { color: "#000" }, // typed text color
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#000", // default border
                },
                
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            InputLabelProps={{
              style: { color: "#000" }, // label color
            }}
            InputProps={{
              style: { color: "#000" }, // typed text color
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#000", // default border
                },
              },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "rgba(0, 25, 128)",
              color: "#fff", // text color
              "&:hover": {
                backgroundColor: "rgba(10, 50, 140)", // darker on hover
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
