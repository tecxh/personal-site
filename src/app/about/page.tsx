import { PageContainer } from "~/components/common";

export default function About() {
  const paragraphClasses = 'text-base mb-4'
  return (
    <div className="">
      <PageContainer pageHeader="About">
        <p className={paragraphClasses}>
          I made my first website under the watchful eye of my third grade teacher. It was an ode to the Hondo robot Asimo. My class saved them to floppy disks, and for many of my classmates, their journey into building the web stopped there, but I was hooked. I'd wind up spending much of my time in my younger years and into my teens building websites using Geocities and Freewebs, or creating and editing maps for the online games I loved. Eventually moving on from only HTML and CSS to incorporate JavaScript to bring life to my Tumblr, MySpace and websites I'd create to promote my game maps.
        </p>
        <p className={paragraphClasses}>
          My times of tinkering eventually ended when I enrolled in a local coding bootcamp in Indy. I spent three months learning to tackle practical software issues and after graduation became an instructor; teaching the skills I'd learned over my life, and honed to a fine point. While teaching and sharing my love for personal creations on the web was something I enjoyed greatly, I wanted to solve bigger problems and write code that would be running on thousands of machines. After entering the workforce, I quickly found passions in accessibility, component composition, leadership and mentoring my fellow engineers. I've now spent the last handful of years building accessible, well maintained software, and delivering it to thousands of people, and helping my teammates do the same.
        </p>
        <p className={paragraphClasses}>
          When I'm not clacking away on my keyboard, you can find me enjoying time out with my friends or friends, getting carried away with my latest Minecraft build, hitting the archery range, or enjoying a quiet moment by the lake. I'm a Hoosier at heart, and still live in the greater Indianapolis area. I love cats, coffee, code and the wild invention that is the internet. I believe the internet and it's uncensored public works should be available and usable to all.
        </p>
      </PageContainer>
    </div>
  );
}
