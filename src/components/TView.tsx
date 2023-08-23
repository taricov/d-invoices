/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  MantineReactTable,
  type MRT_ColumnDef,
  type MRT_SortingState,
  type MRT_Virtualizer
} from "mantine-react-table";
// import type { booleanMap} from "@/types/types"
// import { makeData, Person } from "./makeData";

import { faker } from "@faker-js/faker";
import TStyles from "./TStyles";
// import { boolean } from "zod";

export type Person = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  petName: string;
  age: number;
  salary: string;
  dateOfBirth: string;
  dateOfJoining: string;
  isActive: string;
};

export const makeData = (numberOfRows: number) =>
  [...Array(numberOfRows).fill(null)].map(() => ({
    firstName: faker.name.firstName(),
    middleName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    address: faker.address.streetAddress(),
    zipCode: faker.address.zipCode(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    petName: faker.animal.cat(),
    age: faker.datatype.float({ min: 0, max: 100 }),
    salary: faker.datatype
      .float({ min: 0, max: 1000000 })
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      }),
    dateOfBirth: faker.date.past().toDateString(),
    dateOfJoining: faker.date.past().toDateString(),
    isActive: faker.datatype.boolean() ? "Active" : "Inactive"
  }));

const TstylingOptions = {
  enableEditing: false,
  enableColumnOrdering: false,
  enableBottomToolbar: false,
  enableColumnVirtualization: false,
  enableGlobalFilterModes: true,
  enablePagination: false,
  enablePinning: false,
  enableRowNumbers: false,
  enableColumnResizing: true,
  enableRowVirtualization: true
};

const TView = ({
  enableEditing = false,
  enableColumnOrdering = false,
  enableBottomToolbar = false,
  enableColumnVirtualization = false,
  enableGlobalFilterModes = true,
  enablePagination = false,
  enablePinning = false,
  enableRowNumbers = false,
  enableColumnResizing = true,
  enableRowVirtualization = true
}: any) => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150
      },
      {
        accessorKey: "middleName",
        header: "Middle Name",
        size: 150
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150
      },
      {
        accessorKey: "email",
        header: "Email Address",
        size: 300
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
        size: 250
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 300
      },
      {
        accessorKey: "zipCode",
        header: "Zip Code"
      },
      {
        accessorKey: "city",
        header: "City",
        size: 220
      },
      {
        accessorKey: "state",
        header: "State"
      },
      {
        accessorKey: "country",
        header: "Country",
        size: 350
      },
      {
        accessorKey: "petName",
        header: "Pet Name"
      },
      {
        accessorKey: "age",
        header: "Age"
      },
      {
        accessorKey: "salary",
        header: "Salary"
      },
      {
        accessorKey: "dateOfBirth",
        header: "Date of Birth"
      },
      {
        accessorKey: "dateOfJoining",
        header: "Date of Joining"
      },
      {
        accessorKey: "isActive",
        header: "Is Active"
      }
    ],
    []
    //end
  );

  //optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef =
    useRef<MRT_Virtualizer<HTMLDivElement, HTMLTableRowElement>>(null);

  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(makeData(100));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    rowVirtualizerInstanceRef.current?.scrollToIndex(0);
  }, [sorting]);

  return (
    <>
      {/* <TStyles /> */}

      <MantineReactTable
        mantineTableBodyProps={{
          sx: {
            //stripe the rows, make odd rows a darker color
            "& td": {
              backgroundColor: "rgba(221, 214, 254, 1)"
              // color: "white"
            },
            "& hbody": {
              backgroundColor: "rgba(221, 214, 254, 1)"
              // color: "white"
            }
          }
        }}
        mantinePaperProps={{
          sx: {
            //stripe the rows, make odd rows a darker color
            "& *": {
              backgroundColor: "rgba(221, 214, 254, 1)"
              // color: "white"
            }
          }
        }}
        mantineTableBodyRowProps={{
          sx: {
            "& tr:hover ": {
              backgroundColor: "rgba(22, 255, 30, 1) !important"
            }
          }
        }}
        columns={columns}
        data={data.slice(0, 100)} //10,000 rows
        enableEditing={enableEditing}
        enableColumnOrdering={enableColumnOrdering}
        enableBottomToolbar={enableBottomToolbar}
        enableColumnResizing={enableColumnResizing}
        enableColumnVirtualization={enableColumnVirtualization}
        enableGlobalFilterModes={enableGlobalFilterModes}
        enablePagination={enablePagination}
        enablePinning={enablePinning}
        enableRowNumbers={enableRowNumbers}
        enableRowVirtualization={enableRowVirtualization}
        mantineTableContainerProps={{ sx: { maxHeight: "600px" } }}
        onSortingChange={setSorting}
        state={{ isLoading, sorting }}
        rowVirtualizerInstanceRef={rowVirtualizerInstanceRef} //optional
        rowVirtualizerProps={{ overscan: 5 }} //optionally customize the row virtualizer
        columnVirtualizerProps={{ overscan: 1 }} //optionally customize the column virtualizer
      />
    </>
  );
};

export default TView;
