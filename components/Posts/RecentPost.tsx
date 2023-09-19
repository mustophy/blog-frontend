import { PostType } from '@/types'
import { CalendarIcon, ClockIcon } from '../Icons'

interface ComponentType {
    post: PostType
}

const RecentPost = ({ post }: ComponentType) => {
    return (
        <div className='flex gap-[34px]'>
            <div className="bg-gray-300 rounded-[5px] h-[180px] w-[266px]">

            </div>
            <div>
                <span className="bg-accent-30 text-xs font-[400] leading-[100%] py-1 px-2 rounded-[3px]">{post.tag}</span>
                <h1 className="mt-2 mb-4 font-[600] text-text-80 ">{post.title}</h1>
                <div className="flex items-center mb-4 mt-6">
                    <div className="h-[18px] w-[18px] rounded-full bg-gray-300"></div>
                    <p className="text-text-50 text-xs font-[400] pr-[7px] ml-2 mr-[11px] border-r-2">{post.author.substring(0, 9)}</p>
                    <CalendarIcon />
                    <p className="text-text-50 text-xs font-[400] pr-[7px] ml-[6px] mr-3 border-r-2">{post.date.toUTCString()}</p>
                    <ClockIcon />
                    <p className="text-text-50 text-xs font-[400] ml-[6px]">03 Min. To Read</p>
                </div>
                <p className="text-[15px]">Did you come here for something in particular or just general Riker-bashing? And blowing into</p>

            </div>
        </div>
    )
}

export default RecentPost