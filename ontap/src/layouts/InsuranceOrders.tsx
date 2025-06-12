import React, { useEffect, useState } from "react";
import axios from "axios";

const InsuranceOrders = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://dev-api-insurance.baohiemtasco.vn/insur-policy/vetc-callcenter/v2/insur-order?ts_implement_user=tester1&key_search=&limit=25&offset=0",
          {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,vi;q=0.8",
              authorization:
                "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3d1pHZmJDWlQxUGg1YVNzSXF1NkN4TWpIa3NmZE5Qa0FLb3doLUlnY0FNIn0.eyJleHAiOjE3ODExNDkyODEsImlhdCI6MTc0OTYxMzI4MSwianRpIjoiNzlkMDAzZjYtMjcyZi00NjdjLWFiYTQtZDE3MDI4MzE5M2Y0IiwiaXNzIjoiaHR0cHM6Ly9kZXYtc3NvLmJhb2hpZW10YXNjby52bi9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk5NWRmYjEyLWE0NWItNDE0Yy1hZjU4LTZmNjgyODk2NmQ5ZCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJjYy1jbGllbnQtZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6IjNhMGRjZTBlLWFjMjUtNDRjOC1hOGU1LTdmOTZhYjdmNGY4YyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInNpZCI6IjNhMGRjZTBlLWFjMjUtNDRjOC1hOGU1LTdmOTZhYjdmNGY4YyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwidXNlcl9pZCI6Ijk5NWRmYjEyLWE0NWItNDE0Yy1hZjU4LTZmNjgyODk2NmQ5ZCIsIm5hbWUiOiJUcnVuZyBUYW0gVGVsZXNhbGUgSE4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZWxlc2FsZSIsImdpdmVuX25hbWUiOiJUcnVuZyBUYW0gVGVsZXNhbGUgSE4iLCJlbWFpbCI6InRlbGVzYWxlQHRhc2NvLnZuIn0.aOJ66s_KUU_XzDXuN4V6rRp0y-e1FyipS43_4fG0Qm8b8qF-FzythFdXo-GnSFbq8e1TPid6E_1LavDcrFeXLS7YVHaTgvWs3G5xZ-FPPGr0oTNr3FXmBHagIluxtLHWvipkzJXpFakduIn_8YSM5m1HrDqFjTCtggvpiQ7I9R4nvgQzB4pN4DvWzldgZqBYVG_yJ77jqZci28uO6eG5cMMkhIpA58yaTV6ybGjYyo8cbpCSahyKWggT_5jQPowwzxNOi1gs8TalXqP3EDzYjPVHIrVKtihQe3BSIwNR0e3xNhN0BUEFnGiGlNs_yHUAZjwo827XCkma_ZzI9PNpeA",
  
              "x-access-token":
                "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3d1pHZmJDWlQxUGg1YVNzSXF1NkN4TWpIa3NmZE5Qa0FLb3doLUlnY0FNIn0.eyJleHAiOjE3ODExNDkyODEsImlhdCI6MTc0OTYxMzI4MSwianRpIjoiNzlkMDAzZjYtMjcyZi00NjdjLWFiYTQtZDE3MDI4MzE5M2Y0IiwiaXNzIjoiaHR0cHM6Ly9kZXYtc3NvLmJhb2hpZW10YXNjby52bi9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk5NWRmYjEyLWE0NWItNDE0Yy1hZjU4LTZmNjgyODk2NmQ5ZCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJjYy1jbGllbnQtZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6IjNhMGRjZTBlLWFjMjUtNDRjOC1hOGU1LTdmOTZhYjdmNGY4YyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInNpZCI6IjNhMGRjZTBlLWFjMjUtNDRjOC1hOGU1LTdmOTZhYjdmNGY4YyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwidXNlcl9pZCI6Ijk5NWRmYjEyLWE0NWItNDE0Yy1hZjU4LTZmNjgyODk2NmQ5ZCIsIm5hbWUiOiJUcnVuZyBUYW0gVGVsZXNhbGUgSE4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZWxlc2FsZSIsImdpdmVuX25hbWUiOiJUcnVuZyBUYW0gVGVsZXNhbGUgSE4iLCJlbWFpbCI6InRlbGVzYWxlQHRhc2NvLnZuIn0.aOJ66s_KUU_XzDXuN4V6rRp0y-e1FyipS43_4fG0Qm8b8qF-FzythFdXo-GnSFbq8e1TPid6E_1LavDcrFeXLS7YVHaTgvWs3G5xZ-FPPGr0oTNr3FXmBHagIluxtLHWvipkzJXpFakduIn_8YSM5m1HrDqFjTCtggvpiQ7I9R4nvgQzB4pN4DvWzldgZqBYVG_yJ77jqZci28uO6eG5cMMkhIpA58yaTV6ybGjYyo8cbpCSahyKWggT_5jQPowwzxNOi1gs8TalXqP3EDzYjPVHIrVKtihQe3BSIwNR0e3xNhN0BUEFnGiGlNs_yHUAZjwo827XCkma_ZzI9PNpeA",
            },
          }
        );
        setData(response.data);
      } catch (err) {
        console.error(err);
        setError("Lỗi khi gọi API");
      }
    };

    fetchOrders();
  }, []);
  useEffect(() => {
    console.log("Dữ liệu mới từ API:", JSON.stringify(data, null, 2));
  }, [data]);
  return (
    
    <div>
      <h1>Danh sách đơn bảo hiểm</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>

      </div>
    </div>
  );
};

export default InsuranceOrders;
