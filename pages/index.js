import { useState } from 'react'
import Head from 'next/head'

const product = {
  name: "Hey, I'm Rajan",
  price: '$192',
  href: '#',
  images: [
    {
      src: 'https://file.heyrajan.com/i-profile.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://file.heyrajan.com/staywoke2.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://file.heyrajan.com/ori3.png',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://file.heyrajan.com/clock.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    "i'm a 16 year old developer, author and researcher based in toronto. i'm rebuilding patient data aggregation & poetic expression through generative art. in my free time, u explore evolutionary game theory, actuarial science and political science.",
    follow:
    "Currently, ",
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-black">
      <Head><title>rajan.</title></Head>
      <div className="pt-6">
        

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 sm:overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-800 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">Hey, I&#39;m <b>Rajan</b></h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl text-gray-100 font-bold">thoughts</p>

            {/* Reviews */}
            <div className="mt-6 text-gray-200">
             failed to load
            </div>

          </div>
          

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-800 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-200">{product.description}<br/><br/>
                currently, i&#39;m working on a <u>path <a href="https://towards.live">towards</a> atruistic tech</u>. i envision a future of actionable software & reciprocal automation, through a transparent technical revolution. here, i have created public policy petitions, a new form of poetic expression and idyllic biotech.
                <br/><br/>
                within organizations, i write curriculum infrastructure, design mental health resource access, inspire youth to code and work on the international public health crisis. in my community, i wrote a childrens novel for autism awareness and running 160km for indigenous reconciliation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
