import { ContactSubSection } from "./ContactSubSection"
import { Viz } from "./viz"

export const Hero = () => {

    const text = {
        name: 'Alecx Moritz',
        title: 'Software Engineer',
        intro: [
            'I am an Indianapolis, US based engineer specialized in interactive, data intensive software and atomic UI components with a strong emphasis on accessibility.',
            'I thrive in environments that allow me not only to create incredible software and lead teams through complex feature development, but to use my education skill set to support and assist in my team mates development.',
            'Outside of software I am an avid enjoyer of video games, baking, a good cocktail, music in all forms, and a good laugh.',
            // 'I build interactive, data intensive software with a strong emphasis on accessibility.',
            // 'Outside of software I love video games, sourdough baking, my two cats, a crisp lake breeze, and a dry cabernet shared with friends.'
        ]
    }


    return (
        <div className="center">
            <div className="flex flex-row gap-10 items-center mb-10">
                <div className="w-fit">
                    <h1 className="text-5xl sm:text-9xl font-bold text-fuchsia-400">{text.name}</h1>
                    <h2 className="text-3xl sm:text-7xl text-fuchsia-200">{text.title}</h2>
                </div>
            </div>
            <p className="text-2xl sm:text-2xl mb-8">{text.intro.join(' ')}</p>
            <p className="text-2xl sm:text-2xl">I'm actively looking for my next role, let's connect and see if we're moving in the same direction.</p>
            <ContactSubSection />
        </div>
    )
}