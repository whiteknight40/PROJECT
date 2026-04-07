"use client";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Grid,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



export default function Register() {
  const [form, setForm] = useState({
    email: "",
    otp: "",
    name: "",
    designation: "",
    phone: "",
    alt_phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };
useEffect(() => {
  if (timer > 0) {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }
}, [timer]);
  // ✅ Validation
  const validate = () => {
    let temp = {};

    if (!form.email) temp.email = "Email required";
    if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Invalid email";

    if (!form.otp) temp.otp = "Enter OTP";

    if (!form.name) temp.name = "Required";
    if (!form.designation) temp.designation = "Required";
    if (!form.phone) temp.phone = "Required";

    if (!form.password) temp.password = "Required";
    if (form.password !== form.confirmPassword)
      temp.confirmPassword = "Passwords do not match";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // ✅ Send OTP
  const sendOtp = async () => {
    try {
      await axios.post("http://localhost:8000/api/send-otp", {
        email: form.email,
      });

      setOtpSent(true);
      setTimer(30); // 30 sec timer
      alert("OTP sent!");
    } catch (err) {
      console.error(err);
    }
    };
    const verifyOtp = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/verify-otp", {
          email: form.email,
          otp: form.otp,
        });

        if (res.data.success) {
          setOtpVerified(true);
          alert("OTP Verified!");
        }
      } catch (err) {
        alert("Invalid OTP");
      }
    };
    

  // ✅ Register
    const handleRegister = async () => {
      if (!otpVerified) {
        alert("Verify OTP first!");
        return;
      }
    if (!validate()) return;

    try {
      await axios.post("http://localhost:8000/api/register", form);
      alert("Registered successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#fff" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ background: "#0b1f3a" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">IIT ISM Dhanbad</Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Admin Login</Button>
            <Button color="inherit">Student Login</Button>
            <Button color="inherit">Recruiter Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Layout */}
      <Grid container spacing={2} p={4}>
        {/* STEP 1 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Step 1 — Email Verification
            </Typography>

            <TextField
              label="Company Email"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={handleChange("email")}
              error={!!errors.email}
              helperText={errors.email}
            />

            <Button variant="outlined" onClick={sendOtp} disabled={timer > 0}>
              {timer > 0 ? `Resend OTP in ${timer}s` : "Send OTP"}
            </Button>

            {otpSent && (
              <>
                <TextField
                  label="Enter OTP"
                  fullWidth
                  margin="normal"
                  value={form.otp}
                  onChange={handleChange("otp")}
                />

                <Button variant="contained" sx={{ mt: 1 }} onClick={verifyOtp}>
                  Verify OTP
                </Button>
              </>
            )}
          </Paper>
        </Grid>

        {/* STEP 2 */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              opacity: otpVerified ? 1 : 0.5,
              pointerEvents: otpVerified ? "auto" : "none",
            }}
          >
            <Typography variant="h6" mb={2}>
              Step 2 — Recruiter Details
            </Typography>

            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              value={form.name}
              onChange={handleChange("name")}
              error={!!errors.name}
              helperText={errors.name}
            />

            <TextField
              label="Designation"
              fullWidth
              margin="normal"
              value={form.designation}
              onChange={handleChange("designation")}
              error={!!errors.designation}
              helperText={errors.designation}
            />

            <TextField
              label="Contact Number"
              fullWidth
              margin="normal"
              value={form.phone}
              onChange={handleChange("phone")}
              error={!!errors.phone}
              helperText={errors.phone}
            />

            <TextField
              label="Alternative Mobile"
              fullWidth
              margin="normal"
              value={form.alt_phone}
              onChange={handleChange("alt_phone")}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={form.password}
              onChange={handleChange("password")}
              error={!!errors.password}
              helperText={errors.password}
            />

            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              value={form.confirmPassword}
              onChange={handleChange("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, backgroundColor: "#0b1f3a" }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
