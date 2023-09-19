

const Navbar = () => {
  return (
    <nav className="bg-accent-20 py-6 px-[150px] flex items-center">
        <ul className="text-[15px] font-[500] flex gap-x-14">
            <li className="">Homepage</li>
            <li className="">About</li>
            <li className="">Categories</li>
            <li className="">Pages</li>
        </ul>
        <div className="flex items-end">
          <h1 className="paint-green">Note</h1>
          <h5>Book</h5>
        </div>
    </nav>
  )
}

export default Navbar