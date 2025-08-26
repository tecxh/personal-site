export default function Home() {
  return (
    <div className="">
      <header role="banner">
        <h1>alecx moritz</h1>
        <h2>accessible software engineer</h2>
        <nav>
          <ul>
            <li>site map</li>
            <li>to top</li>
          </ul>
        </nav>
      </header>
      <main role="main">
        <section aria-labelledby="about-header" role="region">
          <h3 id="about-header">About</h3>
          <p>short intro to me as a person, </p>
        </section>
        <section aria-labelledby="expertise-header" role="region">
          <h3 id="expertise-header">Expertise</h3>
          <p>this section highlights my skills and areas of expertise</p>
        </section>
        <section aria-labelledby="work-header" role="region">
          <h3 id="work-header">My Work</h3>
          <p>provide a brief intro to personal github, link a project maybe</p>
        </section>
      </main>
      <footer role="contentinfo">
        <p>link to email & other connection paths</p>
      </footer>
    </div>
  );
}
