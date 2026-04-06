import { Box, TextField, Switch, Typography } from "@mui/material";

export default function GlobalControls() {
  return (
    <Box p={3} boxShadow={3} borderRadius={2}>
      <Typography variant="h6">Global Controls</Typography>

      <TextField
        label="Min CGPA"
        defaultValue="7.5"
        fullWidth
        margin="normal"
      />

      <Box display="flex" alignItems="center">
        <Typography>Backlogs</Typography>
        <Switch />
      </Box>
    </Box>
  );
}
