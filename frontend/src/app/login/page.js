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
        router.push("/landing");
  };

  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      {/* 🌆 Background Image */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
          zIndex: -2,
        }}
      />

      {/* 🌫️ Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: -1,
        }}
      />

      {/* 🔝 Navbar */}
      <AppBar position="static" sx={{ background: "rgba(0,0,0,0.6)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">CDC Portal</Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About CDC</Button>
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
            background: "rgba(128,0,0, 0.3)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
          }}
        >
          <Typography variant="h5" textAlign="center" mb={3}>
            JNF Portal Login
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
              style: { color: "#fff" }, // label color
            }}
            InputProps={{
              style: { color: "#fff" }, // typed text color
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff", // default border
                },
                "&:hover fieldset": {
                  borderColor: "#fff", // hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff", // focus border
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
              style: { color: "#fff" }, // label color
            }}
            InputProps={{
              style: { color: "#fff" }, // typed text color
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff", // default border
                },
                "&:hover fieldset": {
                  borderColor: "#fff", // hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff", // focus border
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
