/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Group,
  NumberInput,
  type NumberInputHandlers,
  Pagination,
  Slider,
  Switch,
  Text
} from "@mantine/core";
import { useDisclosure, usePagination } from "@mantine/hooks";

import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import axios from "axios";
import ViewsHero from "@/components/ViewsHero";
import TView from "@/components/TView";

interface Filters {
  perPage: number;
  page: number;
}

const paymentsStatusColors: any = {
  paid: "bg-green-500/80",
  unpaid: "bg-red-500/80",
  "partially-paid": "bg-orange-500"
};

const GetInvoices = async (
  subdomain: string,
  apikey: string,
  perPage: string,
  page: string
): Promise<any> => {
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
  return await res.json();
};

export default function Invoices(): React.ReactElement {
  const location = useLocation();

  const [gutter, setGutter] = useState<number>(50);
  // const [padding, setPadding] = useState<number>(10); p-[${padding}px]
  const [spanning, setSpanning] = useState<number>(4);
  const [isGrow, setGrow] = useState(false);

  const [opened, { open, close }] = useDisclosure(false);

  const handlers = useRef<NumberInputHandlers>();

  const [subdomain, setSubdomain] = useState<string | undefined>(undefined);
  const [apikey, setApikey] = useState<string | undefined>(undefined);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalInvs, setTotalInvs] = useState<number>(0);

  const [totalPages, setTotalPages] = useState<number>(totalInvs / +perPage);
  const [page, onChange] = useState(1);
  const gridPagination = usePagination({ total: totalPages, page, onChange });
  const [filters, setFilters] = useState<Filters>({ perPage, page });

  // const useGetInvs = (filters: Filters) => {
  //   return useQuery(["filtered-invs", filters], () =>
  //     // GetAllInvs(props.url, filters, props.headers)
  //   );
  // };

  const FilterInvs = () => {};

  const useInvoices = () => {
    return useQuery({
      queryKey: ["get-invs"],
      queryFn: () =>
        GetInvoices(
          "taricov",
          "24b476fdd8aa43091e0963ba01b98762155c9dd4",
          "40",
          "1"
        ),
      enabled: true
    });
  };

  const { data, isLoading, isError, error, refetch } = useInvoices();
  console.log(data);

  if (isLoading) return <div>Loading.........</div>;
  if (error) return <div>An error has occurred: `${error}`</div>;
  return (
    <>
      {/* <p>heere goess anything..</p>
      <button type="button" onClick={() => refetch}>
        Fetch again
      </button> */}

      <Drawer
        closeOnClickOutside
        classNames={{
          title:
            "text-white  font-bold mb-3  px-6 py-4 bg-white/10 w-full text-center",
          body: "app-grad",
          header: "app-grad p-0"
        }}
        title="Change grid styles"
        position="bottom"
        size={"200px"}
        opened={opened}
        onClose={close}
        withCloseButton={false}
        className="p-0 "
      >
        <Box maw={400} mx="auto" className="space-y-4 pt-1">
          <Box className="relative flex items-center justify-between">
            <Text size="sm" className="m-0 text-white">
              <b>{isGrow ? "Stretched" : "Compact"}</b>
            </Text>
            <Switch
              className=""
              checked={isGrow}
              onChange={() => setGrow(!isGrow)}
            />
          </Box>

          <Box
            maw={400}
            mx="auto"
            className="flex-col items-center justify-center"
          >
            <Text size="sm" className="m-0 text-white">
              <b>{gutter}</b>
            </Text>
            <Slider
              className="transform after:absolute after:-right-10 after:-top-3 after:-translate-x-1/2 after:-translate-y-1/2 after:text-3xl after:font-semibold after:text-white/10 after:content-['Gutter']"
              labelAlwaysOn={false}
              value={gutter}
              onChange={setGutter}
            />
          </Box>
          <Box
            maw={400}
            mx="auto"
            className="flex-col items-center justify-center"
          >
            <Text size="sm" className="m-0 text-white">
              <b>{spanning}</b>
            </Text>
            <Slider
              className="transform after:absolute after:-right-14 after:-top-3 after:-translate-x-1/2 after:-translate-y-1/2 after:text-3xl after:font-semibold after:text-white/10 after:content-['Spanning']"
              labelAlwaysOn={false}
              value={spanning}
              onChange={setSpanning}
              max={12}
            />
          </Box>

          {/* <Text mt="md" size="sm">
          Padding: <b>{padding}</b>
        </Text>
        <Slider labelAlwaysOn value={padding} onChange={setPadding} max={20} /> */}
        </Box>
      </Drawer>

      <Container className="mx-5 mb-10 mt-32 flex items-center justify-center overflow-hidden rounded-lg bg-violet-200/10 p-0 text-center md:mx-3 md:mt-[4rem] lg:mx-auto">
        {/* <div className="flex items-center justify-center py-5">
      </div> */}
        {/* <ViewsHero /> */}
      </Container>

      <Container className="mx-5 mb-10 overflow-hidden rounded-lg bg-violet-200/10 p-0 text-center md:mx-3 lg:mx-auto">
        <form className="w-full">
          <Container className="mb-10 flex w-full items-start  rounded-lg p-0 px-5 text-center md:mx-3 lg:mx-auto">
            <NumberInput
              hideControls
              label="Invoices Per Page"
              classNames={{ label: "text-white", input: "text-center" }}
              value={perPage}
              onChange={(val) => setPerPage(+val)}
              handlersRef={handlers}
              min={2}
              step={2}
            />
          </Container>
          <div className="flex justify-end px-5">
            <Button className="app-btn" onClick={() => FilterInvs()}>
              Filter
            </Button>
          </div>
        </form>
        <div className="flex w-full">
          <Button
            classNames={{ label: "!p-0" }}
            className="trasform relative inline-block h-fit w-full rounded-none rounded-tr-md bg-green-500/80 px-1 py-1 text-center text-[10px] font-medium text-violet-900 outline-sky-400 transition duration-200 hover:scale-105 hover:bg-green-500/90 focus-visible:outline-2  md:w-fit"
            onClick={open}
          >
            Adjust the layout
          </Button>
        </div>
      </Container>
      {location.hash === "#grid-view" && (
        <>
          <Container className="md:mx-3 lg:mx-auto">
            <Grid grow={isGrow} gutter={gutter}>
              {data.data.map((inv: any) => (
                <Grid.Col
                  className={`min-h-max`}
                  key={Math.random() * 1000}
                  span={spanning}
                >
                  {/* <AppCard data={inv}/> */}

                  {/* Cards start from here */}
                  <div
                    key={inv?.id}
                    data-g={inv.id + 11}
                    className={`h-full overflow-hidden rounded-lg bg-white/80 shadow-xl`}
                  >
                    <div
                      className={`relative flex h-3 items-center justify-end bg-cover bg-center ${
                        paymentsStatusColors[
                          inv.payment_status === 2
                            ? "paid"
                            : inv.payment_status === 1
                            ? "unpaid"
                            : "partially paid"
                        ]
                      }`}
                    ></div>

                    <div className="flex items-center justify-between border-b border-violet-200 bg-violet-100/20 px-4 pb-3 pt-4">
                      <div className="flex items-center space-x-2">
                        <a
                          href={
                            "https://taricov.daftra.com/owner/staff/" +
                            inv.sales_person_id
                          }
                          rel="noreferrer"
                          target="_blank"
                          className="flex items-center text-xs transition hover:underline sm:text-sm"
                        >
                          <span className="md:line-clamp-0 line-clamp-1">
                            {inv.sales_person_id === 0
                              ? "Admin"
                              : inv.sales_person > 0
                              ? "No Sales Person"
                              : "Admin"}
                          </span>
                          <span className="hidden md:inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              className="ml-1"
                              viewBox="0 0 15 15"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="cursor-pointer text-gray-500 transition duration-100 hover:text-gray-500/80">
                          <a
                            href={
                              "http://taricov.daftra.com/owner/invoices/view/" +
                              inv.id
                            }
                            rel="noreferrer"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="cursor-pointer text-gray-500 transition duration-100 hover:text-gray-500/80">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M10 17c0-3.31 2.69-6 6-6h3V5h-2v3H7V5H5v14h5v-2z"
                              opacity=".3"
                            />
                            <path
                              fill="currentColor"
                              d="M10 19H5V5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2zm2-16c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"
                            />
                            <path
                              fill="currentColor"
                              d="m18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full justify-between border-b border-gray-300 bg-gray-100 px-4 pb-3 pt-4">
                      <div className="text-xs font-bold uppercase tracking-wide text-gray-600">
                        Invoice: <div className="font-normal">{inv.no}</div>
                      </div>
                      <div className="text-right text-xs font-bold uppercase tracking-wide text-gray-600">
                        Payment Status:{" "}
                        <div
                          className={`font-normal ${
                            paymentsStatusColors[
                              inv.payment_status === 2
                                ? "paid"
                                : inv.payment_status === 1
                                ? "unpaid"
                                : "partially paid"
                            ]
                          } bg-clip-text text-transparent`}
                        >
                          {inv.payment_status === 2
                            ? "paid"
                            : inv.payment_status === 1
                            ? "unpaid"
                            : "partially paid"}
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-start justify-between p-4 text-gray-700">
                      <div>
                        <p className="my-1 text-3xl leading-none text-gray-900">
                          {inv.summary_total + " " + inv.currency_code}
                        </p>
                        <p className="flex w-full items-center text-xs">
                          <span className="">Client:&nbsp;</span>
                          <a
                            target="_blank"
                            href={
                              "https://" +
                              "taricov" +
                              ".daftra.com/owner/clients/view/" +
                              inv.clients?.id
                            }
                            rel="noreferrer"
                            className="flex items-center text-xs transition hover:underline sm:text-sm"
                          >
                            <span className="md:line-clamp-0 line-clamp-1">
                              {inv.clients?.business_name}
                            </span>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                className="ml-1 hidden md:inline-block"
                                viewBox="0 0 15 15"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </p>
                        <p className="w-full text-xs">
                          <span>Issued at:&nbsp;</span>

                          <span>{inv.date}</span>
                        </p>
                      </div>
                      <div className="rounded-lg bg-gray-500/10 p-1 px-2 text-xs uppercase leading-loose tracking-wider text-gray-900/50">
                        {inv.clients?.follow_up_status || "No Status"}
                      </div>
                    </div>
                    <div className="flex items-center justify-around border-t border-gray-300 p-4 text-center text-gray-600">
                      <p className="">
                        <span className="pr-1 text-sm">Discount</span>
                        <span className="block font-bold text-gray-900">
                          {inv.summary_discount}
                        </span>
                      </p>

                      <p className="">
                        <span className="pr-1 text-sm">Tax</span>
                        <span className="block font-bold text-gray-900">
                          {inv.tax1}
                        </span>
                      </p>
                      <p className="">
                        <span className="pr-1 text-sm">Items:</span>
                        <span className="block font-bold text-gray-900">
                          {2}
                        </span>
                      </p>
                    </div>
                  </div>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
          <Container className="mx-5 mt-10 flex items-center justify-center overflow-hidden rounded-lg bg-violet-200/10 p-0 py-5 text-center md:mx-3 lg:mx-auto">
            {/* <Pagination withEdges total={totalPages} siblings={2} defaultValue={1} classNames={{dots:"text-white", control:"text-white !bg-violet-300/20 hover:!bg-violet-300/50 transition duration-400 border-none"}}/> */}

            <Pagination.Root
              total={totalPages}
              siblings={2}
              defaultValue={1}
              classNames={{
                dots: "text-white",
                control:
                  "text-white !bg-violet-300/20 hover:!bg-violet-300/50 transition duration-400 border-none"
              }}
            >
              <Group spacing={5} position="center">
                <Pagination.First />
                <Pagination.Previous />
                <Pagination.Items />
                <Pagination.Next />
                <Pagination.Last />
              </Group>
            </Pagination.Root>
          </Container>
        </>
      )}
      {location.hash === "#table-view" && (
        <>
          <div className="mx-auto h-full w-11/12 py-5">
            <TView />
          </div>
        </>
      )}
    </>
  );
}
