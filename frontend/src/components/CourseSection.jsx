import { Box, Checkbox, Typography } from "@mui/material";
import BranchTable from "./BranchTable";

export default function CourseSection({ title, data }) {
  return (
    <Box mt={4} p={2} boxShadow={2} borderRadius={2}>
      <Box display="flex" alignItems="center">
        <Checkbox />
        <Typography variant="h6">{title}</Typography>
      </Box>

      <BranchTable data={data} />
    </Box>
  );
}
