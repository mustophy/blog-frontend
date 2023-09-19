import RecentPost from "@/components/Posts/RecentPost"
import { postsData } from "@/data"

const Recent = () => {
    return (
        <section className="">
            <h4 className='mb-[58px]'><span className='paint-green '>Recently</span> Posted</h4>
            <div className="grid grid-cols-1 gap-y-12 pr-10">
                {postsData.map(post => (
                    <RecentPost post={post} />
                ))}
            </div>
        </section>
    )
}

export default Recent