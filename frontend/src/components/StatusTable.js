"use client";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Paper,
} from "@mui/material";

const data = [
  {
    id: "JNF-1234",
    title: "SDE-1",
    type: "JNF",
    date: "10-Nov-2023",
    status: "Submitted",
  },
  {
    id: "JNF-1235",
    title: "SDE-2",
    type: "JNF",
    date: "11-Nov-2023",
    status: "Under Review",
  },
  {
    id: "INF-5678",
    title: "Data Analyst Intern",
    type: "INF",
    date: "11-Nov-2023",
    status: "Approved",
  },
];

const getColor = (status) => {
  if (status === "Approved") return "success";
  if (status === "Under Review") return "warning";
  return "default";
};

export default function StatusTable() {
  return (
    <Paper sx={{ marginTop: 3 }}>
      <Table>
        <TableHead sx={{ backgroundColor: "#0d47a1" }}>
          <TableRow>
            <TableCell sx={{ color: "#fff" }}>ID</TableCell>
            <TableCell sx={{ color: "#fff" }}>Title</TableCell>
            <TableCell sx={{ color: "#fff" }}>Type</TableCell>
            <TableCell sx={{ color: "#fff" }}>Date Submitted</TableCell>
            <TableCell sx={{ color: "#fff" }}>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Chip label={row.status} color={getColor(row.status)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
