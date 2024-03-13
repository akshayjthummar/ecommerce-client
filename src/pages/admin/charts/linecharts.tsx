import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { LineChart } from "../../../components/admin/Charts";
import { Skeleton } from "../../../components/loader";
import { useLineQuery } from "../../../redux/api/dashboardAPI";
import { RootState } from "../../../redux/store";
import { getLastMonth } from "../../../utils/features";

const Linecharts = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const { isError, isLoading, data } = useLineQuery(user?._id!);

  const products = data?.charts.products! || [];
  const users = data?.charts.users! || [];
  const discounts = data?.charts.discount! || [];
  const revenues = data?.charts.revenue! || [];

  if (isError) {
    <Navigate to={"/admin/dashboard"} />;
  }
  const { last12Month } = getLastMonth();
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            {" "}
            <section>
              <LineChart
                data={users}
                label="Users"
                borderColor="rgb(53, 162, 255)"
                labels={last12Month}
                backgroundColor="rgba(53, 162, 255, 0.5)"
              />
              <h2>Active Users</h2>
            </section>
            <section>
              <LineChart
                data={products}
                backgroundColor={"hsla(269,80%,40%,0.4)"}
                borderColor={"hsl(269,80%,40%)"}
                labels={last12Month}
                label="Products"
              />
              <h2>Total Products (SKU)</h2>
            </section>
            <section>
              <LineChart
                data={revenues}
                backgroundColor={"hsla(129,80%,40%,0.4)"}
                borderColor={"hsl(129,80%,40%)"}
                label="Revenue"
                labels={last12Month}
              />
              <h2>Total Revenue </h2>
            </section>
            <section>
              <LineChart
                data={discounts}
                backgroundColor={"hsla(29,80%,40%,0.4)"}
                borderColor={"hsl(29,80%,40%)"}
                label="Discount"
                labels={last12Month}
              />
              <h2>Discount Allotted </h2>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Linecharts;
