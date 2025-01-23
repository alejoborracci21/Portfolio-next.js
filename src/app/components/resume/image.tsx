import Image from 'next/image';

export const ProfileImage = () => {
    return(
        <div className="relative h-[70vh] w-[30vw] bg-[#131313] rounded-xl ml-40 shadow-black shadow-xl overflow-hidden">
            <div className="relative w-full h-full z-10">
                <Image src="/Alejo.png" alt="Alejo Borracci" layout="fill" objectFit="cover" objectPosition='bottom' className='rounded-xl' />
            </div>
        </div>
    )
}