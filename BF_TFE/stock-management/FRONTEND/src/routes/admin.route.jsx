import AdminDashboard from "../components/admin/dashboard/Dashboard"
import AdminRoute from "../components/protected-route/adminRoute.component"

const adminRoute = [
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
  },
]

export default adminRoute
