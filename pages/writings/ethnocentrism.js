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
      <Head><title>ethnocentrism.</title></Head>
      <div className="pt-6">
        

        {/* Image gallery */}
        

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-10 lg:border-r lg:border-zinc-100 lg:pr-8">
          <h2 className="sm:text-xl font-bold tracking-tight text-gray-400 pb-6"><Link href="/">rajan</Link> / <Link href="/writings">writings</Link> / <Link href="/writings/ethnocentrism">ethnocentrism</Link></h2>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Culture is at the core of individualism.</h1>
          </div>

          

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-6 lg:pr-8">
            <div>

              <div className="space-y-6">
                <p className="text-serif text-gray-900">

                
Mental health is growing faster than ever, but these beliefs are rooted with relativism and generational social dynamics. Mental health is primarily a western concept, introducing ethnocentric perspectives between nations, groups and individuals. From a psychodynamic and sociocultural perspective, this paradigm is closely aligned with prejudice and cross-cultural psychology.
<br/><br/>
So where does culture meet globalization? The Western conception of the person as a bounded, unique, more or less integrated motivational and cognitive universe, a dynamic center of awareness, emotion, judgment, and action, organized into a distinctive whole and set contrastively.
<br/><br/>
Against social and natural background is, however incorrigible it may seem to us, a rather peculiar idea within the context of culture. The vastness of cross-cultural psychology can be supported by Hofstede&#39;s cultural dimensions, or more specifically Power Distribution, Indulgence and Collectivsm. Together, these contextually tackle the debate of universalism against relativism.
<br/><br/>
<b>Power Distance & Distribution</b>
<br/><br/>
From egalitarian to hierarchal standpoints, there is a definite degree of people that are comfortable with upwards influence. This revolves around the acceptance of inequality in the mainstream distribution of power in society. Psychologically, this distribution of power represents wellbeing and the support for mental health. Globalization is not just an indicator of growth, but also the inchoate development of stable solutions for the betterment of a nation.
<br/><br/>
<b>Indulgence & Restraint</b>
<br/><br/>
Societies exist in one of two realms: gratification or structural violence. When comparing centralized satisfaction to normative repression, the ideologies of relativists really shine. The inverse relationship between these two terms normally contrasts basic entitlements to restrictions via social norms, but this can be taken one step further with psychological context.
<br/><br/>
A nation&#39;s top priority will always be to maintain the wellbeing of citizens, often measured by its capacity. In terms of mental health, this is no longer a case against restraint, but rather ignorance. Globalization through internal suppresion strongly reflects the current ideals by the majotity of modern countries, where stability is no longer accounted for. The question is no longer why are there restraints, but rather how can we have self-determination without sufficient governance?
<br/><br/>
<b>Collectivism</b>
<br/><br/>
Self-determination is the new definition of freedom; unfortunately, this sense of freedom is corrupted by the seemingly indifferent individualism and collectivism. Unification often puts omre emphasis on relationships, loyalty and support for wellbeing, while individualist societies proceed in their own affiliations. Seems like a pretty simple choice, right? Individualism is so attractice because of its self-sufficiency, autonomy and independence—the socioeconomic growth is undeniably greater; this time, however, it is not at the hands of globalization, but rather the ravenous desire for sovereignty.
<br/><br/>
Even in the best of both worlds, mental health remains insignificant. One of the largest factors for the lack of funding is not a financial deficit, but rather the chronic prioritization of internal sovereignty: control is more valuable than development.
<br/><br/>
We return to the big question: universalism vs relativism. Historically, culture has played a critical role mental health, through hierarchal support, the loss of self-determination and boundless individualism. This pervasive paradigm will continue to affect populations for the rest of our lives, for it is societal diversity that reminds us what is happening, and our mental health that tells us what is not.
           </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}