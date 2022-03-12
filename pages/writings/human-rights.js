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
      <Head><title>human rights.</title></Head>
      <div className="pt-6">
        

        {/* Image gallery */}
        

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-10 lg:border-r lg:border-zinc-100 lg:pr-8">
          <h2 className="sm:text-xl font-bold tracking-tight text-gray-400 pb-6"><Link href="/">rajan</Link> / <Link href="/writings">writings</Link> / <Link href="/writings/human-rights">human rights</Link></h2>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Paradoxical Sovereignty.</h1>
          </div>

          

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-6 lg:pr-8">
            <div>

              <div className="space-y-6">
                <p className="text-serif text-gray-900">

                
			
Throughout contemporary global politics, human rights have sparked an era of globalization as a universal indicator for equality, justice and liberty within nation-states. States are sovereign when they maintain complete jurisdiction over their geographical area; in order for human rights laws and treaties to be effective, this sovereignty is unequivocally challenged. 
<br/><br/>
These rights, through international treaties, justice and multilateral organizations, introduce high accountability and the loss of domestic and extrinsic hegemony. The universal nature of human rights requires nation-states to give up sovereignty for the implementation of effective laws and treaties.
<br/><br/>
The implementation of universal treaties holds governments accountable. The fundamental idea of globalization and equality is that basic entitlements are ubiquitous; human rights treaties are created through this sense of universalism. By signing these treaties, states give up sovereignty by diminishing their decision-making capacity. The laws and policies, through multilateral consensus, become the basis of citizens’ liberties on a global scale. A prime example is the Universal Declaration of Human Rights (UDHR), which was founded on the basis of self-determination through indivisibility and autonomy. As a result of its universal nature, it has expanded nationally through the Canadian Charter of Rights and Freedom and internationally through covenants for Civil and Political Rights. In the third wave of democratization, as depicted by Francis Fukuyama, governments are globally accountable and must preserve their role on a global stage. This humanitarian treaty puts systematic infringements up for global scrutiny; nations no longer have complete jurisdiction, as autonomy and sovereignty are decentralized.
<br/><br/>
However, it can be argued that treaties are contextual to nations and preserve the primary objectives of a nation-state. Cultural relativism is the implementation of religious or circumstantial beliefs to change the perspective of societal norms. Social standards are analyze from where they are derived, which means different states have different perspectives on what is fundamentally ethical. As a result, universal treaties can lose legitimacy as they are merely guidance, not enforceable law. In Saudi Arabia, the guardian system demonstrates this principle such that negative rights are contextually implemented for men and positive liberties are restricted for women. <br/><br/>The religious power that has manifested within the nation has resulted in the restriction of equality, justice and liberties for women. The story of a young Saudi teen that sought asylum demonstrates that states can maintain their sovereignty by capitalizing on cultural power. Cultural relativism is, however, present in vulnerable states, rather than developed ones; this is only a representation of failing or highly autonomous states, not the world. Thus, in some parts of the world, cultural relativism can maintain a state’s sovereignty by taking universal treaties out of context.
<br/><br/>
Nation-states can lose their autonomy and jurisdiction through human rights laws. The implementation of human rights is an extensive process, that requires governments and populations to contribute towards the collective issue. The idea of justice revolves around cosmopolitanism and the expectations that a population can have towards their government. To maintain these expectations, states often give up their jurisdiction to maintain a specific system. Venezuela&#39;s migrant crisis is demonstrates this concept, as struggling families immigrate to Colombia in search of human rights and opportunities. Rather than giving up sovereignty to other nations, Columbia must give up some sovereignty to the people to implement these treaties and laws. The Maduro regime left Venezuelan populations on the brink of collapse, leaving thousands in search of justice. People rely on their governments, and governments rely on their people; in this sense, there must be moral and ethical consensus between the two. States that want to implement human rights often give up power to their people, in the hope of further effectiveness in laws and policy.
<br/><br/>
Nonetheless, it can be argued that governments continue to stay in control through positive rights. There is a fine line between human rights violations and enforced policy, which is often exploited by highly autonomous states. One cannot expect their nation to give power to the people, which often leads to oppression and the maintenance of complete sovereignty. Iran, a country filled with young rebels and social revolutions, continues to violate the liberties and justice of the population. For the past 17 years, Canada has worked with the UN to develop policies and arrange the deployment of diplomats for support. Iran has maintained their jurisdiction of laws, and choose not to put effort towards human rights development. Even when the nation lost international power through sanctions and global events, treaties and laws have remained ineffective. However, in the most recent Security Council meeting, Iran showed hopes of change towards their fundamental rights. Nations who violate human rights may not need to give up sovereignty or jurisdiction, but will face multilateral consequences. 
<br/><br/>
Finally, nations can often lose external sovereignty through international organizations. Multilateralism, through non-state actors (NSAs) and international governmental organizations (IGOs), is the foundation of the globalization of equalities and liberties. These institutions require international support, which means decision making for standard rights is a collective effort; the incentives of being a part of these organizations means governments must comply, and therefore lose their say in policy. 
<br/><br/>	
The United Nations is a great example, through the Security Council and Human Rights Council. Policies, laws and treaties are decided through appeals and votes, which means that most nations hand out sovereignty for international presence in return. Systems within the United Nations, such as the Permanent 5, also mean that external states give up sovereignty to the veto-power of more powerful states. The Human Rights Council follows up on policies by taking action in vulnerable and developed states; physical actions towards these nations also means less control of external influence. On a global scale, the policies and decisions for human rights are made by a highly-incentivized collective force, which means that nations are forced to give up external sovereignty in exchange for comprehensive stability.
<br/><br/>
In contrast, the majority of nation-states continue to implement unilateralism through censorship. One&#39;s liberties represent the individual and collective freedoms of an individual, through autonomy and self-determination. The sovereignty of a state, that may take part in international institutions, can still be preserved during the restriction of liberties. Machiavelli’s thesis, followed by Hobbes’s vision of the nature of the state, demonstrates that states will often do what is best for themselves, not for the people; the ambiguous nature of international organizations make this possible. 
<br/><br/>	
China&#39;s Digital Gulag is a strong representation of this concept, through the use of growing technology to detain ethnic Uyghur population and challenge the state of freedom and democracy. The nation exists on the P5 and contributes to human rights policy, without losing their sovereignty; the fundamental problem with international organizations is that they are very vague, which introduces new interpretations on policy. However, censorship and the restriction of liberties, as demonstrated in the case of Olympian Peng Shuai, often results in soft power strategies such as quiet diplomacy. The individual freedoms and liberties of individuals can still be restricted through unilateralism, but states may not have to give up as much sovereignty.
<br/><br/>
To ensure the effective implementation of human rights policies, laws and treaties, states must give up some sovereignty. The accountability of governments, application of justice and loss of participation in international organizations restrict the jurisdiction of a nation-state through the distribution of power. Although laws and treaties are often subjective to cultural relativism and populations can not depend on their governments, multilateral approaches through policy and interdependence provide resolutions to these global issues. 
<br/><br/>	
In the context of universalism, justice and multilateral systems, nation-states are required to lose some jurisdiction to play a more significant role internationally. Globalization has rendered the world increasingly interdependent, but international politics continues to rely on states&#39; sovereignty.
 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
