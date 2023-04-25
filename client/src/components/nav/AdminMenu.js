import React from 'react'
import { NavLink } from "react-router-dom";
function AdminMenu() {
  return (
    <>
      <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Links</div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item" to="/admin/category">
            Create category
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/admin/product">
            Create product
          </NavLink>
        </li>

        <li>
          <NavLink className="list-group-item" to="/admin/products">
            Products
          </NavLink>
        </li>

        
      </ul>
    </>
  );
}

  
export default AdminMenu