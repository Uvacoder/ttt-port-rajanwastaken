import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const product = {
  name: "Hey, I'm Rajan",
  price: '$192',
  href: '#',
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
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-zinc-100">
      <Head><title>soulbound.</title></Head>
      <div className="pt-6">
        

        {/* Image gallery */}
        

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-12 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-10 lg:col-start-3 lg:border-r lg:border-zinc-100 lg:pr-8">
          <h2 className="sm:text-xl font-bold tracking-tight text-gray-400 pb-6"><Link href="/">rajan</Link> / <Link href="/writings">writings</Link> / <Link href="/writings/soulbound">soulbound</Link></h2>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Soulbound Networks.</h1>
          </div>

          

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-3 lg:col-span-8 lg:pr-8">
            <div>

              <div className="space-y-6">
                <p className="text-serif text-gray-900">

                
                What if the world around us, and the things we do, could be <b>soulbound?</b> This is the notion that Vitalik Buterin, the creator of Ethereum, has proposed: personal connection, often through accountability, in digital spaces. You can find this full post <Link href="https://vitalik.ca/general/2022/01/26/soulbound.html"><u>here.</u></Link>
<br/><br/>
Being soulbound is a concept that he has been working on for a while. The soulbound network is a network of people who are connected to each other through their actions. <i>{' '}Soulbound items, once picked up, cannot be transferred or sold to another player.</i> Just like in World Of Warcraft, in order to get your character anywhere close to having the best weapons and armor, you have no choice but to take action.
<br/><br/>
<i>Proof of Attendance Protocol</i>
<br/><br/>
POAP is a standard by which projects can send NFTs that represent the idea that the recipient personally participated in some event. As Vitalik puts it, <i>if someone shows you that they have an NFT that is obtainable by doing X, you can&#39;t tell whether they did X themselves or whether they just paid someone else to do X.</i> By doing an action, your effort becomes tied to what you receive; when you work in a job, the financial outcome becomes associated with your work, increasing its value. When you are in a group of people who are all doing the same thing, you can use POAP to show that you are all doing the same thing.
<br/><br/>
By becoming attached to the world around you, you can be better attached to your assets. Simply put, this heavily increases the social signaling value: people who have them can show them off, and there are more and more tools precisely to help users do that. While transferable NFTs have their place and can be really valuable on their own for supporting artists and charities, there is also a large and underexplored design space of what non-transferable NFTs could become.
<br/><br/>
<i>The Transferability Dilemma</i>
<br/><br/>
One of the largest values of the soulbound network is the ability to transfer NFTs. By increasing the value it has to you, its foreign value is dissipated. One of the largest purposes of NFT holdings is to flip it for more money, if its value is dependant on your personal connection, then what value does it serve to others? Essentially, they would be much less valuable if someone who doesn&#39;t meet the condition themselves could just go buy one from someone who does. 
<br/><br/>
Alas, we return to the pervasive paradigm of purpose. Just like abstract art, NFTs reflect the value that it gives you. While transferable NFTs have their place and can be really valuable on their own for supporting artists and charities, there is also a large and underexplored design space of what non-transferable NFTs could become.
<br/><br/>
<i>Soulbound Governance</i>
<br/><br/>
As Vitalik puts it, lightly, <i>there are very bad things that can easily happen to governance mechanisms if governance power is easily transferable</i>. Essentially, what if DAO governance of blockchain protocols could somehow make governance power conditional on participation? Once again, a large and fruitful design space opens up that today is difficult to access.
<br/><br/>
No matter what we do, it will always come down to the money. People celebrate the ownership, and outright waste, of large amounts of wealth, and this limits the appeal and the long-term sustainability of the culture that emerges around these items. The objective is not to limit usage, but put the blockchain at the centre of ecosystems promotes collective effort.
 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}