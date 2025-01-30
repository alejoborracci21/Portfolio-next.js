import Image from 'next/image';

export const ProfileImage = () => {
    return(
        <div className="relative h-[60vh] w-[28vw] items-center content-center bg-[#131313] rounded-lg ml-40 mt-10 max-md:hidden max-lg:hidden">
            <div className="relative w-full h-full border-[1px] border-[#1b1c1e] rounded-lg">
                <Image src="/foto4.png" alt="Alejo Borracci" fill className='rounded-xl object-cover object-bottom' />
            </div>
        </div>
    )
}