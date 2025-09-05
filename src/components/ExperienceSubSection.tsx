export const ExperienceSubSection = () => {
    const text = {
        mainCopy: `
            I have over six years of experience with enterprise grade React, JavaScript and accessibility compliance under WCAG 2.x guidelines. I've moved beyond core IC work to stand up testing systems to curb bugs and UI regressions before they happen, cut lead time for CI/CD pipelines, lead platform wide audits, written all matters of engineering documents, and worked across teams to lead product development. Throughout all of my technical achievements, I've been committed to mentoring and empowering my teammates.
        `
    }
    return (
        <div className="mb-60">
            <h3 className="text-5xl mb-10 text-fuchsia-400">Experience</h3>
            <div className="flex flex-col-reverse sm:flex-row gap-10">
                <div className="sm:w-120">
                    <ul className="text-2xl">
                        <li className="text-fuchsia-300">2019 - 2025, Software Engineer II, Augeo</li>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam commodi illum deserunt quod, ad voluptas blanditiis! Suscipit voluptates, inventore, reiciendis explicabo ullam qui velit libero, eaque mollitia repellendus facere nisi?</p>
                        <li className="text-fuchsia-300 mt-12">2018 - 2019, Instructor, 1150 Academy</li>
                        <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nobis eum voluptatibus, ipsum iste deserunt similique consequuntur quos rerum distinctio voluptate, nam impedit quibusdam fugit. Quos neque quam repellendus possimus!</p>
                    </ul>
                </div>
                <div className="flex-1">
                    <p className="text-2xl">
                        {text.mainCopy}
                    </p>
                    <p className="text-2xl mt-2">To view my wider accomplishments, my resume is available <a className="text-fuchsia-300">here</a>.</p>
                </div>
            </div>
        </div>
    )
}