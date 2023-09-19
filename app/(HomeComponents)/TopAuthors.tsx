import { postsData } from "@/data"

const TopAuthors = () => {
    return (
        <section>
            <h4 className='mb-[58px]'><span className='paint-green '>Top</span> Authors</h4>
            <div className="grid grid-cols-1 gap-y-[38px]">

                {postsData.map(post => (
                    <div className="flex gap-x-6 items-center">
                        <div className="rounded-full w-20 h-20 bg-gray-300"></div>
                        <div>
                            <h5>Jenny Kia</h5>
                            <span className="text-xs text-text-50">Fashion Designer, Blogger, Activist</span>
                            <div className="flex gap-x-[10px]">

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopAuthors