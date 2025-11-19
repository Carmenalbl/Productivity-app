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
        {/* Columna izquierda dividida en 4 Box */}
        <Box
          className="flex flex-col w-64 bg-gray-100 h-full"
          sx={{ flex: 1, padding: 2 }}
        >
          <Box
            className="mb-4 p-4 bg-white rounded shadow"
            sx={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            {/* Sección 1 */}
            Today
          </Box>

          <Box
            className="mb-4 p-4 bg-white rounded shadow"
            sx={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            {/* Sección 2 */}
            This week
          </Box>

          <Box
            className="mb-4 p-4 bg-white rounded shadow"
            sx={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            {/* Sección 3 */}
            This month
          </Box>

          <Box
            className="p-4 bg-white rounded shadow"
            sx={{
              flex: 5,
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            {/* Sección 4 */}
            Insights
          </Box>
        </Box>

        {/* Columna derecha */}
        <Box
          sx={{
            flex: 3,
            backgroundColor: "#e0e0e0",
            padding: 2,
          }}
        ></Box>
      </Box>
    </Box>
  );
}
