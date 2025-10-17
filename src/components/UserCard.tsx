import Image from "next/image"

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className="rounded-2xl odd:bg-kjcPurple even:bg-kjcYellow p-4 flex-1 min-w-[130px]">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2  py-1 text-green-600 rounded-full">2024/25</span> 
                <Image src="/more.png" alt="More" width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4">250</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        </div>
    )
}

export default UserCard