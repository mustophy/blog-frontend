import { postsData } from "@/data"
import PopularPost from "@/components/Posts/PopularPost"

const Popular = () => {
    return (
        <section className=''>
            <h4 className='mb-[58px]'><span className='paint-green '>Popular</span> Posted</h4>
            <div className='grid gap-y-12 grid-cols-1'>
                {postsData.map(post => (
                    <PopularPost post={post} />
                ))}
            </div>
        </section>
    )
}

export default Popular