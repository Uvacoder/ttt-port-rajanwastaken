import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Blog from './writings'

const callouts = [
  {
    name: 'Abstract Generative Art',
    description: 'Poem Synthesis & Visualization',
    imageSrc: 'https://cloud-r2onbrszd-hack-club-bot.vercel.app/0image.png',
    imageAlt: 'etheralism.',
    href: 'https://instagram.com/towards.etherealism',
  },
  {
    name: 'Open Letter',
    description: 'Equitable Food Security',
    imageSrc: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    imageAlt: 'food bank.',
    href: 'https://equity.towards.live',
  },
  {
    name: 'Data Aggregation',
    description: 'Decentralized Medical Network',
    imageSrc: 'https://cloud-cssrzjtwc-hack-club-bot.vercel.app/0screen_shot_2022-03-11_at_8.53.59_pm.png',
    imageAlt: 'bloom network.',
    href: 'https://github.com/rajanwastaken/bloom',
  },
  {
    name: 'Digital Communities',
    description: 'Indigenous Pipeline Infrastructure',
    imageSrc: 'https://cloud-ra5alevdj-hack-club-bot.vercel.app/0screen_shot_2022-03-11_at_8.56.49_pm.png',
    imageAlt: 'project hestia',
    href: 'https://youtu.be/inOwByW_ufs',
  },
  {
    name: 'Encryption Algorithms',
    description: 'Custom Blockchain in 100 Lines',
    imageSrc: 'https://file.heyrajan.com/workshop.png',
    imageAlt: 'project hestia',
    href: 'https://www.youtube.com/watch?v=3HZJ7ZoQIUE&ab_channel=RajanAgarwal',
  },
  {
    name: 'Flow Fields',
    description: 'Generative Art',
    imageSrc: 'https://file.heyrajan.com/art.png',
    imageAlt: 'project hestia',
    href: 'https://youtu.be/inOwByW_ufs',
  },
  {
    name: "Children's Novel",
    description: 'Autism Awareness',
    imageSrc: 'https://cloud-16c6pal7a-hack-club-bot.vercel.app/0bookpost.png',
    imageAlt: 'breaking barriers.',
    href: 'https://book.heyrajan.com',
  },
  {
    name: 'Gamifying Political Awareness',
    description: 'Policy Chat Rooms',
    imageSrc: 'https://user-images.githubusercontent.com/64426829/133933404-ff1e8f03-f689-4fba-a43a-bb1a4766540d.png',
    imageAlt: 'project hestia',
    href: 'https://github.com/diplomatica-htn',
  },
  {
    name: 'Reconciliation',
    description: '160km Run For Hope',
    imageSrc: 'https://cloud-e9m8zg3xl-hack-club-bot.vercel.app/0image.png',
    imageAlt: 'run for hope.',
    href: 'https://run.heyrajan.com',
  },
]

const technical = [
  {
    name: 'Data Aggregation',
    description: 'Decentralized Medical Network',
    imageSrc: 'https://cloud-cssrzjtwc-hack-club-bot.vercel.app/0screen_shot_2022-03-11_at_8.53.59_pm.png',
    imageAlt: 'bloom network.',
    href: 'https://github.com/rajanwastaken/bloom',
  },
  {
    name: 'Open Letter',
    description: 'Custom Blockchain',
    imageSrc: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    imageAlt: 'food bank.',
    href: 'https://equity.towards.live',
  },
  {
    name: 'Machine Learning',
    description: 'Poem Synthesis & Visualization',
    imageSrc: 'https://cloud-r2onbrszd-hack-club-bot.vercel.app/0image.png',
    imageAlt: 'etheralism.',
    href: 'https://instagram.com/towards.etherealism',
  },
  {
    name: 'Reconciliation',
    description: '160km Run For Hope',
    imageSrc: 'https://cloud-e9m8zg3xl-hack-club-bot.vercel.app/0image.png',
    imageAlt: 'run for hope.',
    href: 'https://youtu.be/lOFpyvGaCP8',
  },
  {
    name: "Children's Novel",
    description: 'Autism Awareness',
    imageSrc: 'https://cloud-16c6pal7a-hack-club-bot.vercel.app/0bookpost.png',
    imageAlt: 'breaking barriers.',
    href: 'https://book.heyrajan.com',
  },
  {
    name: 'Digital Communities',
    description: 'Indigenous Pipeline Infrastructure',
    imageSrc: 'https://cloud-ra5alevdj-hack-club-bot.vercel.app/0screen_shot_2022-03-11_at_8.56.49_pm.png',
    imageAlt: 'project hestia',
    href: 'https://youtu.be/inOwByW_ufs',
  },
]


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
    "i'm a 16 year old developer, author and researcher based in toronto. i'm rebuilding patient data aggregation & poetic expression through generative art. in my free time, i explore evolutionary game theory, actuarial science and political science.",
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
      <div className="lg:pt-6">
        

        {/* Image gallery */}
        <div className="lg:mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 sm:hidden">
          <div className="aspect-w-3 aspect-h-4 lg:rounded-lg overflow-hidden lg:block">
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
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
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
            <p className="text-2xl text-gray-100 font-bold hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">latest <u><Link href="writings">thoughts</Link></u></p>

            {/* Reviews */}
            <div className="mt-6 text-gray-200">
            <p className="text-xl text-gray-200 pb-1"><Link href="writings/soulbound">soulbound.</Link></p>
            <p className="text-md text-gray-300 pb-6">What if the world around us, and the things we do, could be soulbound?</p>

            <p className="text-xl text-gray-200 pb-1"><Link href="writings/surveillance-capitalism">surveillance capitalism.</Link></p>
            <p className="text-md text-gray-300 pb-6">How do we as ordinary people, take our self-determination back?</p>

            <p className="text-xl text-gray-200 pb-1"><Link href="writings/ethnocentrism">ethnocentrism.</Link></p>
            <p className="text-md text-gray-300 pb-6">The contextual debate of universalism vs relativism.</p>
            </div>

          </div>
          

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-800 lg:pr-8">
            <div>

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-4 sm:py-6 lg:py-6 lg:max-w-none">
            <h2 className="text-3xl font-bold text-gray-200"><b>towards</b> altruistic tech</h2><br/><br/>
  
            <div className="mt-3 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-400">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-200">{callout.description}</p>
                  <br/><br/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Blog/>
    </div>
  )
}
