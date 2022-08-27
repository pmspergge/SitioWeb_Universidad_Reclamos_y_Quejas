import * as React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";
// CABECERA DE LOS DATOS EDIT
const columns = [
  {
    field: "id",
    headerName: "ID",
    align: "center",
    headerAlign: "center",
    minWidth: 100,
    hideable: false,
  },
  {
    field: "email",
    headerName: "Correo Electrónico",
    align: "left",
    headerAlign: "left",
    minWidth: 300,
  },
  {
    field: "lastName",
    headerName: "Last name",
    align: "center",
    headerAlign: "center",
    minWidth: 170,
  },
  {
    field: "age",
    headerName: "Age",
    align: "center",
    headerAlign: "center",
    minWidth: 150,
  },
];
// PARA CAMBIAR DE IDIOMA
const theme = createTheme(esES);

// PARA OPTENER DATOS
const rows = [
  { id: 1, lastName: "Snow", email: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", email: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", email: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", email: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", email: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", email: null, age: 150 },
  { id: 7, lastName: "Clifford", email: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", email: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", email: "Harvey", age: 65 },
];

export default function StylingHeaderGrid() {
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <Box
      sx={{
        height: 450,
        width: "100%",
      }}
    >
      <ThemeProvider theme={theme}>
        <DataGrid
          components={{
            Toolbar: GridToolbar,
          }}
          sx={{ my: 2 }}
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
        {/* TODO: https://mui.com/x/react-data-grid/column-visibility/ */}
      </ThemeProvider>
    </Box>
  );
}
