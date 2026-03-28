import React from "react";

export default function NotFound() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 style={{ fontSize: "6rem", fontWeight: 900 }}>404</h1>
      <p className="text-muted">Page not found.</p>
    </div>
  );
}
