import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, announcementsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Announcement = {
  id:number,
  title: string;
  class: string;
  date: string;
}

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell"
  },
]

const AnnouncementsListPage = () => {

  const renderRow = (item: Announcement) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-kjcPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <span className="font-medium">{item.title}</span>
      </td>

      <td> {item.class} </td>
      <td className="hidden md:table-cell"> {item.date} </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/announcements/${item.id}`} className="">
            <button className="w-7 h-7 flex justify-center items-center rounded-full bg-kjcSky">
              <Image src="/edit.png" alt="View detais" width={16} height={16}/>
            </button>
          </Link>
          {
            role === "admin" && (
                <button className="w-7 h-7 flex justify-center items-center rounded-full bg-kjcPurple">
                  <Image src="/delete.png" alt="View detais" width={16} height={16}/>
                </button>
            )
          }
        </div>
      </td>
    </tr>
  );


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* TOP SECTION */}
        <div className="flex justify-between items-center">
          <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
          <div className="flex flex-col md:flex-row itemps-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
             <button className="w-8 h-8 flex justify-center items-center rounded-full bg-kjcYellow">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
             </button>
             <button className="w-8 h-8 flex justify-center items-center rounded-full bg-kjcYellow">
              <Image src="/sort.png" alt="Filter" width={14} height={14} />
             </button>
             { role === "admin" && (
                 <button className="w-8 h-8 flex justify-center items-center rounded-full bg-kjcYellow">
                <Image src="/plus.png" alt="Filter" width={14} height={14} />
                </button>) 
             }
          </div> 
          </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={announcementsData} />
        {/* PAGINATION */}
            <Pagination />

    </div>
  )
}

export default AnnouncementsListPage