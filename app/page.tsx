import FeaturedPost from '@/components/Posts/FeaturedPost'
import PopularPost from '@/components/Posts/PopularPost'
import { postsData } from '@/data'
import Image from 'next/image'
import Featured from './(HomeComponents)/Featured'
import Popular from './(HomeComponents)/Popular'
import Recent from './(HomeComponents)/Recent'
import TopAuthors from './(HomeComponents)/TopAuthors'
import Categories from './(HomeComponents)/Categories'
import TodaysUpdate from './(HomeComponents)/TodaysUpdate'

export default function Home() {
  return (
    <main className="">
      <section>

      </section>
      <div className='py-20 px-[153px] bg-accent-10 grid grid-cols-3 gap-x-10'>
        <Featured />
        <Popular />
      </div>
      <div className="px-[153px] grid grid-cols-3 gap-x-10 mt-20">
        <div className="col-span-2">
          <Recent />
        </div>
        <div>
          <TopAuthors />
          <Categories />
          <TodaysUpdate />
        </div>
      </div>
    </main>
  )
}
