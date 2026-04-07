"use client";
import { Card, CardContent, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ActionCard({ title, subtitle }) {
  return (
    <Card
      sx={{
        backgroundColor: "#00B4D8",
        color: "#000",
        width: "300px",
        cursor: "pointer",
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AddIcon />
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">({subtitle})</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
