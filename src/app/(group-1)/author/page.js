import React from 'react'
import CardTwo from '@/components/sections/blogs/cardTwo'
import PageTitle from '@/components/sections/pageTitle'
import SideBar from '@/components/sections/sideBar'
import { blogData } from '@/lib/fackData/blogData'
import Title from '@/components/ui/title'
import Image from 'next/image'
import SocialIcons from '@/components/ui/socialIcons'

const Author = () => {
    return (
        <main>
            <PageTitle pageName={"Author"} breadcrumbLink={"Author"} />
            <div className='lg:py-15 py-10'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <div className='bg-destructive dark:bg-[rgba(46,77,254,0.05)] py-10 px-20 rounded-[30px]'>
                        <div className='grid grid-cols-[18%_1fr] items-center'>
                            <div>
                                <Image src={"/images/blog/author-bg.jpg"} width={150} height={150} alt='author' className='rounded-full w-[150px] h-[150px] object-cover border-4 border-white' />
                            </div>
                            <div>
                                <Title size={"4xl"} className={"pb-3"}>Agatha Christie</Title>
                                <hr className='text-[rgb(224,224,224)] dark:text-[rgb(114,114,114)]' />
                                <p className='mt-3'>Hello, Agatha Christie, a passionate travel author with a heart full of wanderlust. Armed with a camera and a curiosity for the unknown, I traverse the globe, seeking out hidden gems and sharing the stories they hold. From remote landscapes to bustling cityscapes, my goal is to inspire others to embark on their own adventures and embrace the beauty of diverse cultures. Join me as I explore the world one destination at a time, capturing moments and weaving tales that ignite the spirit of exploration. Let's wander together through the pages of my travel chronicles!</p>
                                <div className='mt-7.5 flex justify-between items-center'>
                                    <SocialIcons />
                                    <p className='text-xs border border-[rgb(224,224,224)] dark:border-[rgb(114,114,114)] rounded-md px-2.5 py-1'>6 Article</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:py-15 py-10'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5 justify-between'>
                        {
                            blogData.slice(0, 6).map(({ id, author, date, thumb, title, category }) => {
                                return <CardTwo key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Author