
import AdminMenu from "../../components/nav/AdminMenu.js";

 function AdminDashboard() {
  // context


  return (
    <>


      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Information</div>

            <ul className="list-group">
              <li className="list-group-item"></li>
              <li className="list-group-item"></li>
              <li className="list-group-item">Admin</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminDashboard