import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Switch,
} from "@mui/material";

export default function BranchTable({ data }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Select</TableCell>
          <TableCell>Branch</TableCell>
          <TableCell>CGPA</TableCell>
          <TableCell>Backlogs</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{row.branch}</TableCell>
            <TableCell>{row.cgpa}</TableCell>
            <TableCell>
              <Switch />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
