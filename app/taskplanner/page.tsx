"use client";
import React from "react";
import { Box } from "@mui/system";
export default function TaskPlanner() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
        }}
      >
        {/* Columna izquierda */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#f5f5f5",
            padding: 2,
          }}
        >
          Contenido columna izquierda
        </Box>
        {/* Columna derecha */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#e0e0e0",
            padding: 2,
          }}
        >
          Contenido columna derecha
        </Box>
           
      </Box>
    </Box>
  );
}
