'use client'
import Link from 'next/link'
import crmData from '../data/crm.json'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'
import imgPath from '../public/mainImage.jpeg'

interface Users {
    id: number,
    name: String,
    email: String,
    phone: String,
    company: String,
    jobTitle: String,
    address: String,
    lastContacted: String,
    profileImage: String,
    notes: String
}
function FeaturedCard() {

    return (
        <div
            className='py-12 bg-black'
        >
            <div>
                <div className="text-center text-xl font-serif font-semibold">
                    * User's Profile *
                </div>
            </div>
            <div>
                <div className='border-white mt-10 '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 justify-center'>

                        {crmData.users.map((user: Users) => (
                            <>
                                <div key={user.id} className='flex justify-center lg:m-3'>
                                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                        <Image
                                            src={imgPath}
                                            alt="jordans"
                                            height="300"
                                            width="300"
                                            className="object-contain"
                                        />
                                        <p className="text-base font-sans sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                            Name : {user.name}
                                        </p>
                                        <p>
                                            Email : {user.email}
                                        </p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3">
                                            {user.notes}
                                        </p>
                                        <button className="rounded-md pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                            <span>Hey, </span>
                                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                                {user.phone}
                                            </span>
                                        </button>
                                    </BackgroundGradient>
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/profiles"}
                    className='px-4 py-2 rounded-md hover:bg-white hover:text-black hover:font-blod transition duration-200 border '
                >
                    Get All Profile
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCard