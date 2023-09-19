import FeaturedPost from "@/components/Posts/FeaturedPost"
import { postsData } from "@/data"

const Featured = () => {
    return (
        <section className='col-span-2 flex'>
            <div className='flex-1'>
                <h4 className='mb-[58px]'><span className='paint-green '>Featured</span> This month</h4>
                <div className="grid grid-cols-2 gap-x-[30px]">
                    {postsData.map(post => (
                        <FeaturedPost post={post} />
                    ))}
                </div>
            </div>
            <div className='h-[70%] relative my-auto ml-10 '>
                <div className='h-full w-[1px] bg-[#C4C4C4] rounded-[3px]'></div>
                <div className='h-[50%] w-[3px] bg-accent-70 rounded-[3px] absolute top-0 left-[50%] translate-x-[-50%]'></div>
            </div>
        </section>
    )
}

export default Featured