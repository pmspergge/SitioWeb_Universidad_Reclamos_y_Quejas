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
    minWidth: 185,
    hideable: false,
  },
  {
    field: "fecha",
    headerName: "Fecha",
    align: "left",
    headerAlign: "left",
    minWidth: 300,
    hideable: false,
  },
  {
    field: "tipo",
    headerName: "Tipo",
    align: "center",
    headerAlign: "center",
    minWidth: 300,
    hideable: false,
  },
  {
    field: "estado",
    headerName: "Estado",
    align: "center",
    headerAlign: "center",
    minWidth: 300,
    hideable: false,
  },
  {
    field: "descripcion",
    headerName: "Descripcion",
    align: "center",
    headerAlign: "center",
    minWidth: 300,
    hideable: false,
  },
];
// PARA CAMBIAR DE IDIOMA
const theme = createTheme(esES);

// PARA OPTENER DATOS
const rows = [
  {
    id: 1,
    fecha: "22/08/2022",
    tipo: "Reclamo",
    estado: "Rechazado",
    descripcion: "Lorem Ipsum",
  },
  {
    id: 2,
    fecha: "22/08/2022",
    tipo: "Queja",
    estado: "Pendiente",
    descripcion: "lorem",
  },
  {
    id: 3,
    fecha: "22/08/2022",
    tipo: "Reclamo",
    estado: "Finalizado",
    descripcion: "lorem",
  },
  {
    id: 4,
    fecha: "22/08/2022",
    tipo: "Reclamo",
    estado: "Finalizado",
    descripcion: "lorem",
  },
  {
    id: 5,
    fecha: "22/08/2022",
    tipo: "Queja",
    estado: "Pendiente",
    descripcion: "lorem",
  },
  {
    id: 6,
    fecha: "22/08/2022",
    tipo: "Queja",
    estado: "Pendiente",
    descripcion: "lorem",
  },
  {
    id: 7,
    fecha: "22/08/2022",
    tipo: "Reclamo",
    estado: "Rechazado",
    descripcion: "lorem",
  },
  {
    id: 8,
    fecha: "22/08/2022",
    tipo: "Queja",
    estado: "Rechazado",
    descripcion: "lorem",
  },
  {
    id: 9,
    fecha: "22/08/2022",
    tipo: "Reclamo",
    estado: "Finalizado",
    descripcion: "lorem",
  },
  {
    id: 10,
    fecha: "22/08/2022",
    tipo: "Reclamo",
    estado: "Pendiente",
    descripcion: "lorem",
  },
];

export default function StylingHeaderGrid() {
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <Box
      sx={{
        height: 408,
        width: "100%",
      }}
    >
      <ThemeProvider theme={theme}>
        <DataGrid
          components={{
            Toolbar: GridToolbar,
          }}
          sx={{ my: 5 }}
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </ThemeProvider>
    </Box>
  );
}
