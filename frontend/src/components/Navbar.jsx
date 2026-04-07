"use client";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#06402B" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">IIT (ISM) Dhanbad</Typography>

        <Typography>John Doe | Logout</Typography>
      </Toolbar>
    </AppBar>
  );
}
