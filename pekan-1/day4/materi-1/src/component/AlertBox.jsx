import React from "react";

function AlertBox({ type, message }) {
  const getStyle = () => {
    switch (type) {
      case "success":
        return {
          backgroundColor: "#d4edda",
          color: "#155724",
          border: "1px solid #c3e6cb",
          padding: "12px",
          borderRadius: "8px",
          margin: "10px 0",
        };
      case "warning":
        return {
          backgroundColor: "#fff3cd",
          color: "#856404",
          border: "1px solid #ffeeba",
          padding: "12px",
          borderRadius: "8px",
          margin: "10px 0",
        };
      case "error":
        return {
          backgroundColor: "#f8d7da",
          color: "#721c24",
          border: "1px solid #f5c6cb",
          padding: "12px",
          borderRadius: "8px",
          margin: "10px 0",
        };
      default:
        return {
          backgroundColor: "#e2e3e5",
          color: "#383d41",
          border: "1px solid #d6d8db",
          padding: "12px",
          borderRadius: "8px",
          margin: "10px 0",
        };
    }
  };

  return <div style={getStyle()}>{message}</div>;
}

export default AlertBox;
