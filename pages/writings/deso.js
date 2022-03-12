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
    <div className="bg-zinc-100">
      <Head><title>decentralized social.</title></Head>
      <div className="pt-6">

        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-10 lg:border-r lg:border-zinc-100 lg:pr-8">
          <h2 className="sm:text-xl font-bold tracking-tight text-gray-400 pb-6"><Link href="/">rajan</Link> / <Link href="/writings">writings</Link> / <Link href="/writings/deso">deso</Link></h2>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Startup Case Study, a DAO for Decentralized Social.</h1>
          </div>

          

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-6 lg:pr-8">
            <div>

              <div className="space-y-6">
                <p className="text-serif text-gray-900">

                
<br/>
The rise of technology in the early 2000s changed our lives, where every company and organization had a website or blog for people to read. As time progressed, Web2 transformed these readers into creators through large social media networks across the world; the only problem was that large companies like Facebook and Google owned and controlled our data. This is where Web3 was introduced, creating a community-first approach through a decentralized network, governed by smart contracts and developed on the blockchain. People can truly own their data, and make meaningful connections without the influence of companies or countries&#39; high maintenance.
<br/><br/>
This is a democratized social media network that operates as a decentralized autonomous organization (DAO). As an internet-native business, our network is collectively owned and managed by our members. This network will consist of a marketplace for NFTs and collectibles, user-first media control, app stores and anything voted on by the public; all decisions will be governed by our users, and all transactions, votes and signatures will be verified by the blockchain. In this process, decision making and control is transferred to the users, rather than the owners. Specifically, this avoids central governance by allowing members to securely interact and share; this is the first time a consumer can truly voice their concerns.
<br/><br/>
As of now, two of the most valuable phenomena are data and social validation. Corrupted companies and authoritarian practices restrict expression while harming the mental and physical stability of populations. The new vision of the metaverse, offered by Meta, introduces new possibilities for digital connections, however there are severe implications with their objectives. Every action online is controlled, and it is critical that we break this pattern. We are firm believers that decentralization and community will take precedence in our community.
<br/><br/>
From a bureaucratic perspective, the media and our surroundings determine the outcome of our world leaders. The news we see and the political opinions we developed rely on the vastly different media networks we watch. The world hasn not seen true democracy yet, whether in a national election or a startup&#39;s conference room. 
<br/><br/>
The vision is simple: to change the perspective of the internet. The overwhelming control by large companies forces us to move to decentralized software, but these organizations and protocols often require a lot of code and cryptocurrencies that the general population finds confusing. Our simple approach to a social media-like network brings a consistent and easy transition. By decentralizing data, the ownership of organization is transferred to the population; for the first time, the people are in control. 
<br/><br/>
As cryptocurrencies and the metaverses&#39; ideologies changed the purpose of digital expression, the political landscape surrounding these areas swiftly changed. As new tax implications, privacy laws, and legislations surrounding crypto platform regulation on a federal scale are being introduced, changes and variances in federal legislation are rapidly affecting companies and consumers involved within this space. As the political landscapes change within countries of establishment, this can impose potential inefficiencies and difficulties for our business. 
<br/><br/>
The Digital Economy contributed over $109B to the Canadian economy in 2017, making up over 5.5% of total economic activity. As it is rapidly changing, businesses must adapt in order to remain profitable and to be able to grow. Unemployment rates, Gross Domestic Product, and household incomes, can have their respective effects on our business. 
<br/><br/>
As social attitudes shift and the digital space becomes more and more populated, consumers and their lifestyle, income, and various other social factors can have various outcomes for a business; increased revenues, increased technological usage, and much more. 
<br/><br/>
Being an internet-native business, changing technologies and attitudes are the backbone of our company. Operating on the blockchain, technological advancements and changes can have severe effects on how our company runs our operations. Changes surrounding the blockchain and how the blockchain operates can ensue in having to adapt and change our manner of operations. 
<br/><br/>
Operating as a Canadian corporation registered with the Canadian Revenue Agency, we will have to be sure of abiding with all Canadian corporation and financial laws. Additionally, potential legal issues may arise such as lawsuits from third parties. Change in legislation and laws can have effects on how operations and can result in the change of business. 
<br/><br/>
Being a platform where all transactions, votes, and signatures are verified on the blockchain, this can prove to be extremely energy intensive. Similar to many large cryptocurrencies, such as Bitcoin and Ethereum, this will require large amounts of energy in order to perform the computation associated with blockchain verifications. High energy usages can prove to be harmful towards the environment.
<br/><br/>
The approach consists of democratization, decentralization and design.
<br/><br/>
Democratizing Interactions & Decisions: In contrast to the standard control of high-level executives in Silicon Valley corporations, the new era of organizations begins with decision-making power in the hands of autonomous systems, blockchain verification and crowdfunded processes. This is a true form of transparency, such that every decision, pitch, town hall and documentation is voted on, and published to the community. 
<br/><br/>
Decentralizing Marketplaces: By bringing marketplaces to the blockchain, users can obtain true ownership of their digital assets. There is a direct creator to consumer relationship, where collectibles and digital art can obtain significant value. By implementing marketplaces, we allow traders, investors and collectors to trade with each other while eliminating middlemen. They are available globally and require no intermediaries to make trades possible. By reducing the control of monopolies and redesigning the infrastructure of the metaverse, we can create a new way for people to connect.
<br/><br/>
Designing High Scalability: The community contributes towards products and growth. Designers can create NFTs to deploy onto the marketplace, while developers can integrate software on top of the blockchain protocol for enhanced user features. As decisions and development are controlled by the members, the application can truly be developed based on community needs and desires. Further, implementing blockchain allows for the encryption of data into blocks, which can significantly reduce the potential for hacking and corruption of code. 
<br/><br/>
If our systematic approach does not yield our projected outcomes, we will invest the rest of our overall profits back into the business whilst modifying our business operations in order to turn it into a profitable business; for both our Venture Capital investors and our community. Additionally, we can mint more tokens that would allow for capital.
<br/><br/>
In our polarized world, security and safe access on the internet is a privilege that most users do not have. This introduces a medium of expression, interaction and secure transactions for individuals to safe interdependence. Through methods of aggregation, decentralization and feature implementation, our company revolutionizes consumer interaction; this is the only social network that truly accounts for consumer needs and wants, without violating their digital privacy. 
<br/><br/>
Software has changed the world, we&#39;re using it to change the way we interact. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
