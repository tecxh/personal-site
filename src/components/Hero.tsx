import { Viz } from "./viz"

export const Hero = () => {

    const text = {
        name: 'Alecx Moritz',
        title: 'Software Engineer',
        intro: [
            'I am an Indianapolis, US based engineer specialized in interactive, data intensive software and atomic UI components with a strong emphasis on accessibility.',
            // 'I build interactive, data intensive software with a strong emphasis on accessibility.',
            'Outside of software I love video games, sourdough baking, my two cats, a crisp lake breeze, and a dry cabernet shared with friends.'
        ]
    }


    return (
        <div className="h-screen mb-20 center">
            <div className="flex flex-row gap-20 items-center mb-10">
                <div>
                    <h1 className="text-5xl sm:text-9xl font-bold text-fuchsia-400">{text.name}</h1>
                    <h2 className="text-3xl sm:text-7xl text-fuchsia-200">{text.title}</h2>
                </div>
                <div className="h-40 w-40 rounded-full bg-fuchsia-400 pt-20 pl-2">cheeky avatar here</div>
            </div>
            <p className="text-2xl sm:text-2xl">{text.intro.join(' ')}</p>
            <Viz />
        </div>
    )
}