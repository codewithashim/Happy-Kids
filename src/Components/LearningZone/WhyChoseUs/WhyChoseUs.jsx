import React from 'react'
import Image from 'next/image'

const reasons = [
  {
    title: "Interactive and Hands-On Learning",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla elementum malesuada ullamcorper tellus dolor. Est facilisis vitae et nisl cras erat. Quam nulla mauris id amet dui vel. Cursus integer pulvinar dictum eros morbi dolor feugiat. Nulla senectus ultricies venenatis.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Regularly Updated Content",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla elementum malesuada ullamcorper tellus dolor. Est facilisis vitae et nisl cras erat. Quam nulla mauris id amet dui vel. Cursus integer pulvinar dictum eros morbi dolor feugiat. Nulla senectus ultricies venenatis.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    title: "Encouraging Creativity and Imagination",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla elementum malesuada ullamcorper tellus dolor. Est facilisis vitae et nisl cras erat. Quam nulla mauris id amet dui vel. Cursus integer pulvinar dictum eros morbi dolor feugiat. Nulla senectus ultricies venenatis.",
    image: "/placeholder.svg?height=200&width=200"
  }
]

export default function WhyChooseUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us ?</h2>
      <div className="space-y-16">
        {reasons.map((reason, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8`}>
            <div className="md:w-1/2">
              <Image
                src={reason.image}
                alt={reason.title}
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}