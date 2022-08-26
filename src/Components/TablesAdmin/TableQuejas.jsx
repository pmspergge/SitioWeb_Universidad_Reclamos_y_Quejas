import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { styled } from "@mui/material/styles";
import ButtonDetails from "../ButtonDetails/ButtonDetails";
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const rows = [
  {
    email: "mlinstead0@wikispaces.com",
    type: false,
    date: "10/25/2021",
    state: true,
  },
  {
    email: "dledwitch1@cyberchimps.com",
    type: false,
    date: "7/24/2022",
    state: true,
  },
  {
    email: "ppiper2@cisco.com",
    type: false,
    date: "1/29/2022",
    state: false,
  },
  {
    email: "bwilkison3@msu.edu",
    type: false,
    date: "8/5/2022",
    state: false,
  },
  {
    email: "npeckitt4@aboutads.info",
    type: false,
    date: "8/30/2021",
    state: true,
  },
  {
    email: "sendon5@usnews.com",
    type: false,
    date: "11/9/2021",
    state: false,
  },
  {
    email: "cpearse6@ocn.ne.jp",
    type: false,
    date: "6/24/2022",
    state: false,
  },
  {
    email: "jlepiscopi7@washington.edu",
    type: false,
    date: "10/12/2021",
    state: true,
  },
  {
    email: "dglaysher8@theatlantic.com",
    type: false,
    date: "5/8/2022",
    state: false,
  },
  {
    email: "nimbrey9@google.com.br",
    type: false,
    date: "12/15/2021",
    state: true,
  },
  {
    email: "cmckinnella@scientificamerican.com",
    type: false,
    date: "4/4/2022",
    state: true,
  },
  {
    email: "gomarab@ehow.com",
    type: false,
    date: "4/17/2022",
    state: false,
  },
  {
    email: "acorderoc@photobucket.com",
    type: false,
    date: "6/8/2022",
    state: true,
  },
  {
    email: "afonteld@npr.org",
    type: false,
    date: "10/19/2021",
    state: false,
  },
  {
    email: "dtailbye@npr.org",
    type: false,
    date: "8/2/2022",
    state: false,
  },
  {
    email: "cschwandf@marketwatch.com",
    type: false,
    date: "2/6/2022",
    state: false,
  },
  {
    email: "lforting@ebay.co.uk",
    type: false,
    date: "8/20/2022",
    state: false,
  },
  {
    email: "clowseleyh@census.gov",
    type: false,
    date: "6/7/2022",
    state: false,
  },
  {
    email: "gfarresi@goo.gl",
    type: false,
    date: "5/12/2022",
    state: false,
  },
  {
    email: "skliementj@nps.gov",
    type: false,
    date: "2/13/2022",
    state: false,
  },
  {
    email: "kbernardk@theatlantic.com",
    type: false,
    date: "10/30/2021",
    state: true,
  },
  {
    email: "kbaptistel@xing.com",
    type: false,
    date: "7/30/2022",
    state: true,
  },
  {
    email: "hpithiem@instagram.com",
    type: false,
    date: "1/28/2022",
    state: true,
  },
  {
    email: "mstandagen@joomla.org",
    type: false,
    date: "5/5/2022",
    state: true,
  },
  {
    email: "mangrico@a8.net",
    type: false,
    date: "9/21/2021",
    state: false,
  },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              Correo Electrónico
            </TableCell>
            <TableCell style={{ fontWeight: 700 }} align="center">
              Tipo
            </TableCell>
            <TableCell style={{ fontWeight: 700 }} align="center">
              Fecha
            </TableCell>
            <TableCell style={{ fontWeight: 700 }} align="center">
              Estado
            </TableCell>
            <TableCell style={{ fontWeight: 700 }} align="center">
              Detalles
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow
              key={row.email}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="center">
                {row.type ? "Reclamo" : "Queja"}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                {row.state ? "Resuelto" : "Pendiente"}
              </TableCell>
              <TableCell align="center">
                <ButtonDetails />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "Todos", value: -1 }]}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "Filas por página",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
