const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View all</span>
        </div>

        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-kjcSky rounded-md p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-10-17</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas veniam accusantium, fugit quo laborum!</p>
            </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-kjcPurpleLight rounded-md p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-10-17</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas veniam accusantium, fugit quo laborum!</p>
            </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-kjcYellowLight rounded-md p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-10-17</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas veniam accusantium, fugit quo laborum!</p>
            </div>
        </div>
        
    </div>
  )
}

export default Announcements