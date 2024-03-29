import * as React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// PARA CAMBIAR DE IDIOMA
const theme = createTheme(esES);

export default function StylingHeaderGrid({ data, textModal }) {
  // PARA OPTENER DATOS
  const rows = data;
  // CABECERA DE LOS DATOS EDIT
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 70,
      hideable: false,
    },
    {
      field: "name",
      headerName: "Nombre",
      align: "center",
      headerAlign: "center",
      minWidth: 130,
    },
    {
      field: "lastnameP",
      headerName: "Ap. Paterno",
      align: "center",
      headerAlign: "center",
      minWidth: 130,
    },
    {
      field: "lastnameM",
      headerName: "Ap. Materno",
      align: "center",
      headerAlign: "center",
      minWidth: 130,
    },
    {
      field: "email",
      headerName: "Correo Electrónico",
      align: "left",
      headerAlign: "left",
      minWidth: 250,
      hideable: false,
    },
    {
      field: "type",
      headerName: "Tipo",
      type: "boolean",
      align: "center",
      headerAlign: "center",
      minWidth: 110,
      renderCell: (value) => {
        return value?.row?.type ? "Reclamo" : "Queja";
      },
    },
    {
      field: "date",
      headerName: "Fecha",
      type: "date",
      align: "center",
      headerAlign: "center",
      minWidth: 110,
    },
    {
      field: "state",
      headerName: "Estado",
      align: "center",
      headerAlign: "center",
      minWidth: 110,
      type: "singleSelect",
      renderCell: (value) => {
        const number = value?.row?.state;
        if (number === 1) {
          return <p className="badge text-bg-secondary">Pendiente</p>;
        }
        if (number === 2) {
          return <p className="badge text-bg-success">Resuelto</p>;
        }
        if (number === 3) {
          return <p className="badge text-bg-danger">Rechazado</p>;
        }
      },
      valueOptions: [1, 2, 3],
    },
    {
      field: "details",
      headerName: "Detalles",
      headerAlign: "center",
      align: "center",
      sortable: false,
      minWidth: 100,
      filterable: false,
      renderCell: (value) => {
        return (
          <button
            type="button"
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalScrollable"
            onClick={() => textModal(value?.row?.details)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          </button>
        );
      },
    },
  ];
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <Box
      sx={{
        height: 410,
        width: "100%",
      }}
    >
      <ThemeProvider theme={theme}>
        <DataGrid
          components={{
            Toolbar: GridToolbar,
          }}
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
