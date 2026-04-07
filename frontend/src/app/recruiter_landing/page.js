"use client";

import { Box, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import ActionCard from "@/components/ActionCard";
import StatusTable from "@/components/StatusTable";

export default function Dashboard() {
  return (
    <Box sx={{ backgroundColor: "#0b1f3a", minHeight: "100vh", color: "#fff" }}>
      <Navbar />

      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Welcome back, Global Tech Solutions Inc.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Quick Actions
        </Typography>

        <Box sx={{ display: "flex", gap: 3, marginTop: 2 }}>
          <ActionCard title="Create JNF" subtitle="Job Notification Form" />
          <ActionCard
            title="Create INF"
            subtitle="Internship Notification Form"
          />
        </Box>

        <Typography variant="h6" sx={{ marginTop: 4 }}>
          Current Proposal Status
        </Typography>

        <StatusTable />
      </Box>
    </Box>
  );
}
