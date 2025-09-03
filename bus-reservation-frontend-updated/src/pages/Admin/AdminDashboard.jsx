import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="mb-4 text-start">Admin Dashboard</h2>
      <div className="row g-4">
        {/* Buses Card */}
        <div className="col-md-4">
          <div className="card card-elev p-3 h-100 d-flex flex-column">
            <div className="fw-semibold fs-5">Buses</div>
            <div className="text-muted small mb-3">Add, view, and manage buses in the fleet.</div>
            <Link to="/admin/buses" className="btn btn-brand btn-sm mt-auto">Manage Buses</Link>
          </div>
        </div>

        {/* Routes Card (New) */}
        <div className="col-md-4">
          <div className="card card-elev p-3 h-100 d-flex flex-column">
            <div className="fw-semibold fs-5">Routes</div>
            <div className="text-muted small mb-3">Define travel routes and their distances.</div>
            {/* This link will require a new route and component */}
            <Link to="/admin/routes" className="btn btn-brand btn-sm mt-auto">Manage Routes</Link>
          </div>
        </div>

        {/* Trips Card (New) */}
        <div className="col-md-4">
          <div className="card card-elev p-3 h-100 d-flex flex-column">
            <div className="fw-semibold fs-5">Trips</div>
            <div className="text-muted small mb-3">Schedule trips by assigning buses to routes.</div>
            {/* This link will require a new route and component */}
            <Link to="/admin/trips" className="btn btn-brand btn-sm mt-auto">Manage Trips</Link>
          </div>
        </div>
      </div>
    </div>
  );
}