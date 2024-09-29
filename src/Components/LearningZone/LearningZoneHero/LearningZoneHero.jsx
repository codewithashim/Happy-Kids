// import Image from 'next/image'
// import { ArrowRight } from 'lucide-react'
// import { LearningHero_1, LearningHero_2, LearningHero_3, LearningHero_4, LearningHero_5 } from '@/src/Assets'


// export default function LearningZoneHero() {
//     return (
//         <div className="container mx-auto px-4 py-8 sm:py-12">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                 <div className='flex flex-col gap-6'>
//                     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//                         DIVE INTO THE<br />
//                         GREATNESS OF<br />
//                         LEARNING.
//                     </h1>

//                     <p className="text-gray-600 mb-6 text-sm sm:text-base">
//                         Lorem ipsum dolor sit amet consectetur. Nisl consequat sit risus lobortis magnis quis orci et. Donec neque nibh sit sed sit mi ipsum gravida fames.
//                     </p>

//                     <button className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full flex items-center text-sm sm:text-base">
//                         Know more <ArrowRight className="ml-2" size={20} />
//                     </button>

//                     <div className="flex justify-between gap-3 items-center">
//                         <div className="flex border-r-2 p-4">
//                             <Image src={LearningHero_5} alt="Creator 1" width={150} height={150} className="w-full h-full border-2 border-white" />
//                         </div>
//                         <div className="ml-4">
//                             <h3 className="text-lg sm:text-xl font-bold">Become a <br/> Creator</h3>
//                             <p className="text-xs sm:text-sm text-gray-600 md:w-[70%]">Lorem ipsum dolor sit amet consectetur. Cras nullam accumsan.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
//                     <div>
//                         <Image src={LearningHero_1} alt="Child reading" width={350} height={350} className="w-full h-full" />
//                     </div>
//                     <div  >
//                         <Image src={LearningHero_2} alt="Child with clipboard" width={350} height={350} className="w-full h-full" />
//                     </div>
//                     <div >
//                         <Image src={LearningHero_3} alt="Child with laptop" width={350} height={350} className="w-full h-full" />
//                     </div>
//                     <div  >
//                         <Image src={LearningHero_4} alt="Child with books" width={350} height={350} className="w-full h-full" />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { LearningHero_1, LearningHero_2, LearningHero_3, LearningHero_4, LearningHero_5 } from '@/src/Assets'
import Button from '../../UI/Button/Button'

export default function LearningZoneHero() {
    return (
        <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className='flex flex-col gap-6'>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        DIVE INTO THE<br className="hidden sm:inline" />
                        GREATNESS OF<br className="hidden sm:inline" />
                        LEARNING.
                    </h1>

                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur. Nisl consequat sit risus lobortis magnis quis orci et. Donec neque nibh sit sed sit mi ipsum gravida fames.
                    </p>

                    <Button variant='primary' className='flex items-center gap-4 w-fit'>
                        Know more <ArrowRight className="ml-2" size={20} />
                    </Button>

                    <div className="flex flex-col sm:flex-row justify-between gap-3 items-center mt-6 sm:mt-0">
                        <div className="flex border-r-2 p-4 w-full sm:w-auto">
                            <Image src={LearningHero_5} alt="Creator 1" width={150} height={150} className="w-full h-full border-2 border-white" />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                            <h3 className="text-lg sm:text-xl font-bold">Become a <br className="hidden sm:inline" />Creator</h3>
                            <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:w-[70%]">Lorem ipsum dolor sit amet consectetur. Cras nullam accumsan.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
                    {[LearningHero_1, LearningHero_2, LearningHero_3, LearningHero_4]?.map((src, index) => (
                        <div key={index} className="aspect-square">
                            <Image
                                src={src}
                                alt={`Child image ${index + 1}`}
                                layout="responsive"
                                width={350}
                                height={350}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}