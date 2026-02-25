import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function TeamSection() {

    const t = useTranslations('team')

    const members = [
        {
            name: 'Frederico Garbuio',
            role: 'CEO',
            avatar: '/448832618_451431637507224_512941987555678585_n.jpg',
            link: 'https://www.linkedin.com/in/frederico-garbuio-61735b2b3/',
        },
        {
            name: 'Luiz Bordinhão',
            role: 'Gestor Operacional',
            avatar: '/588623049_18081001394131579_6336432814874488861_n.jpg',
            link: 'https://www.linkedin.com/in/luiz-henrique-bordinhão-b42a5644/',
        },
        {
            name: 'Helio Garbuio',
            role: 'Chief Commercial Officer',
            avatar: '/473820445_592434163406970_3119064783395383245_n.jpg',
            link: 'https://www.linkedin.com/in/helio-garbuio-521733188/',
        },
        // {
        //     name: 'Henry Lee',
        //     role: 'UX Engeneer',
        //     avatar: 'https://alt.tailus.io/images/team/member-four.webp',
        //     link: '#',
        // },
        // {
        //     name: 'Ava Williams',
        //     role: 'Interaction Designer',
        //     avatar: 'https://alt.tailus.io/images/team/member-five.webp',
        //     link: '#',
        // },
        // {
        //     name: 'Olivia Miller',
        //     role: 'Visual Designer',
        //     avatar: 'https://alt.tailus.io/images/team/member-six.webp',
        //     link: '#',
        // },
    ]

    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">{t('card')}</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">{t('title')}</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>{t('description')}</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden">
                                <img
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                    src={member.avatar}
                                    alt="team member"
                                    width="826"
                                    height="1239"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        {/* <span className="text-xs">_0{index + 1}</span> */}
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link
                                            href={member.link}
                                            target='_blank'
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            +
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
