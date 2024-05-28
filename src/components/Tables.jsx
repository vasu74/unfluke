import React, { useState } from "react";
import { FcBullish } from "react-icons/fc";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

const invoices = [
  {
    Rank: "1",
    Name: "Vasu",
    Calmar_Ratio: "3.45",
    Overall_Profit: "4500",
    Avg_Daily_Profit: "500",
    Win: "0.56",
    Price: "67",
    Action: "view",
  },
  {
    Rank: "2",
    Name: "John",
    Calmar_Ratio: "2.75",
    Overall_Profit: "4000",
    Avg_Daily_Profit: "450",
    Win: "0.50",
    Price: "60",
    Action: "false",
  },
  {
    Rank: "3",
    Name: "Alice",
    Calmar_Ratio: "4.10",
    Overall_Profit: "5000",
    Avg_Daily_Profit: "550",
    Win: "0.60",
    Price: "70",
    Action: "view",
  },
  {
    Rank: "4",
    Name: "Bob",
    Calmar_Ratio: "1.90",
    Overall_Profit: "3000",
    Avg_Daily_Profit: "300",
    Win: "0.45",
    Price: "55",
    Action: "false",
  },
  {
    Rank: "5",
    Name: "Charlie",
    Calmar_Ratio: "3.00",
    Overall_Profit: "4200",
    Avg_Daily_Profit: "480",
    Win: "0.52",
    Price: "65",
    Action: "view",
  },
  {
    Rank: "6",
    Name: "David",
    Calmar_Ratio: "2.50",
    Overall_Profit: "3700",
    Avg_Daily_Profit: "400",
    Win: "0.48",
    Price: "58",
    Action: "false",
  },
  {
    Rank: "7",
    Name: "Eva",
    Calmar_Ratio: "3.20",
    Overall_Profit: "4600",
    Avg_Daily_Profit: "510",
    Win: "0.55",
    Price: "68",
    Action: "false",
  },
  {
    Rank: "8",
    Name: "Frank",
    Calmar_Ratio: "2.95",
    Overall_Profit: "3900",
    Avg_Daily_Profit: "420",
    Win: "0.50",
    Price: "61",
    Action: "view",
  },
  {
    Rank: "9",
    Name: "Grace",
    Calmar_Ratio: "3.10",
    Overall_Profit: "4400",
    Avg_Daily_Profit: "480",
    Win: "0.54",
    Price: "66",
    Action: "false",
  },
  {
    Rank: "10",
    Name: "Hank",
    Calmar_Ratio: "2.70",
    Overall_Profit: "3500",
    Avg_Daily_Profit: "380",
    Win: "0.47",
    Price: "59",
    Action: "view",
  },
  {
    Rank: "11",
    Name: "Ivy",
    Calmar_Ratio: "3.50",
    Overall_Profit: "4800",
    Avg_Daily_Profit: "520",
    Win: "0.57",
    Price: "69",
    Action: "view",
  },
  {
    Rank: "12",
    Name: "Jack",
    Calmar_Ratio: "2.80",
    Overall_Profit: "3600",
    Avg_Daily_Profit: "390",
    Win: "0.49",
    Price: "62",
    Action: "false",
  },
  {
    Rank: "13",
    Name: "Kate",
    Calmar_Ratio: "3.60",
    Overall_Profit: "4900",
    Avg_Daily_Profit: "530",
    Win: "0.58",
    Price: "70",
    Action: "view",
  },
  {
    Rank: "14",
    Name: "Leo",
    Calmar_Ratio: "2.60",
    Overall_Profit: "3400",
    Avg_Daily_Profit: "370",
    Win: "0.46",
    Price: "58",
    Action: "false",
  },
  {
    Rank: "15",
    Name: "Mia",
    Calmar_Ratio: "3.30",
    Overall_Profit: "4700",
    Avg_Daily_Profit: "500",
    Win: "0.55",
    Price: "67",
    Action: "view",
  },
  {
    Rank: "16",
    Name: "Nick",
    Calmar_Ratio: "2.50",
    Overall_Profit: "3300",
    Avg_Daily_Profit: "360",
    Win: "0.45",
    Price: "57",
    Action: "view",
  },
  {
    Rank: "17",
    Name: "Olivia",
    Calmar_Ratio: "3.20",
    Overall_Profit: "4600",
    Avg_Daily_Profit: "510",
    Win: "0.54",
    Price: "66",
    Action: "view",
  },
  {
    Rank: "18",
    Name: "Paul",
    Calmar_Ratio: "2.70",
    Overall_Profit: "3500",
    Avg_Daily_Profit: "380",
    Win: "0.47",
    Price: "60",
    Action: "false",
  },
  {
    Rank: "19",
    Name: "Quinn",
    Calmar_Ratio: "3.50",
    Overall_Profit: "4800",
    Avg_Daily_Profit: "520",
    Win: "0.57",
    Price: "69",
    Action: "view",
  },
  {
    Rank: "20",
    Name: "Rachel",
    Calmar_Ratio: "2.80",
    Overall_Profit: "3600",
    Avg_Daily_Profit: "390",
    Win: "0.49",
    Price: "62",
    Action: "view",
  },
  {
    Rank: "21",
    Name: "Steve",
    Calmar_Ratio: "3.40",
    Overall_Profit: "4700",
    Avg_Daily_Profit: "510",
    Win: "0.56",
    Price: "68",
    Action: "view",
  },
  {
    Rank: "22",
    Name: "Tom",
    Calmar_Ratio: "2.90",
    Overall_Profit: "3700",
    Avg_Daily_Profit: "400",
    Win: "0.48",
    Price: "61",
    Action: "false",
  },
  {
    Rank: "23",
    Name: "Uma",
    Calmar_Ratio: "3.60",
    Overall_Profit: "4900",
    Avg_Daily_Profit: "530",
    Win: "0.59",
    Price: "70",
    Action: "view",
  },
  {
    Rank: "24",
    Name: "Victor",
    Calmar_Ratio: "2.70",
    Overall_Profit: "3500",
    Avg_Daily_Profit: "380",
    Win: "0.47",
    Price: "60",
    Action: "view",
  },
];

const Tables = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = invoices.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(invoices.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Table className="mb-2 ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Calmar Ratio</TableHead>
            <TableHead>Overall Profit</TableHead>
            <TableHead>Avg Daily Profit</TableHead>
            <TableHead>Win</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{invoice.Rank}</TableCell>
              <TableCell>{invoice.Name}</TableCell>
              <TableCell className="flex gap-2 items-center">
                <span>
                  <FcBullish className="w-5 h-5" />
                </span>
                {invoice.Calmar_Ratio}
              </TableCell>
              <TableCell>{invoice.Overall_Profit}</TableCell>
              <TableCell>{invoice.Avg_Daily_Profit}</TableCell>
              <TableCell>{invoice.Win}</TableCell>
              <TableCell>{invoice.Price}</TableCell>
              <TableCell className="text-center">
                <button
                  className={`px-4 py-2 rounded ${
                    invoice.Action === "view"
                      ? "bg-blue-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {invoice.Action}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 bg-gray-300 rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tables;
