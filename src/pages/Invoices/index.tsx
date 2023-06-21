/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Filters {
  perPage: string;
  page: string;
}

const GetInvoices = async (
  subdomain: string,
  apikey: string,
  perPage: string,
  page: string
): Promise<Response> => {
  const res = await fetch(
    `https://${subdomain}.daftra.com/v2/api/entity/invoice/list/1?per_page=${perPage}&page=${page}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        apikey
      }
    }
  );
  const json = await res.json();
  return json;
};

export default function Invoices(): React.ReactElement {
  const [perPage, setPerPage] = useState<string>("10");
  const [totalInvs, setTotalInvs] = useState<string>("0");

  const [totalPages, setTotalPages] = useState<number>(+totalInvs / +perPage);
  const [page, onChange] = useState("1");

  const [filters, setFilters] = useState<Filters>({ perPage, page });
  // const useGetInvs = (filters: Filters) => {
  //   return useQuery(["filtered-invs", filters], () =>
  //     // GetAllInvs(props.url, filters, props.headers)
  //   );
  // };

  const QueryHook = () => {
    useQuery({
      queryKey: ["get-invs"],
      queryFn: () =>
        GetInvoices(
          "taricov",
          "24b476fdd8aa43091e0963ba01b98762155c9dd4",
          "4",
          "1"
        ),
      enabled: true
    });
  };

  const { data, isLoading, isError, error, refetch } = QueryHook;
  console.log(data);

  return (
    <>
      <p>heere goess anything..</p>
    </>
  );
}
