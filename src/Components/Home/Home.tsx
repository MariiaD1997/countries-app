import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../hooks/reactHooks";
import { fetchCountries } from "../../redux/reducers/countryReducer";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countriesReducer);
  console.log(countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Capital</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">Languages</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
