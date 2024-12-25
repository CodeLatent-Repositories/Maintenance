import { useState } from 'react'
import './App.css'
import CountdownTimer from "./CountdownTimer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*header section*/}
    <header>
      <div>
        <p id="companyName">CodeLatent</p>
      </div>
      <div class="rightHeader">
        <a>Home</a>
        <a>About</a>
        <a>Reach Out</a>
        <button>Get Started</button>
      </div>
    </header>

    {/*----main section-----*/}

    <main>
        {/*---Text Section---*/}
        <div class="textDiv">
          <h3>Website Is Under</h3>
          <h1>Maintenance</h1>
          <p>"Hang tight! We’re making some updates to serve you better. Be right back!"</p>
        </div>
        {/*---image Section---*/}
        <div>
          <img src="/laptop.svg" alt="System Update"/>
        </div>
        <div>
        <CountdownTimer initialTime={259200} />
        </div>
        <div class="textDiv">
        <p id="info-main">"We are currently performing scheduled maintenance to enhance your experience. The website will be back online shortly. Thank you for your patience and understanding!"</p>
        <p></p>
        </div>
    </main>


    {/*----footer section-----*/}

    <footer>
      <p>Connect Us</p>
      <div>
      <a class="footerLogo" href='https://www.instagram.com/codelatent?igsh=d24zcHo0ODB1MG1l' target='_blank'>
        <img src="/insta.png" alt="Instagram"/>
      </a>

      <a href='mailto:aashuchoudhary52@gmail.com' target='_blank'>
        <img src="/gmail.png" alt="Gmail"/>
      </a>

      <a href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A105728565&keywords=code%20latent&origin=RICH_QUERY_SUGGESTION&position=0&searchId=d52ff825-cb2d-48c3-b255-3a2736b03787&sid=N~9&spellCorrectionEnabled=false' target='_blank'>
        <img src="/linkedin.png" alt="Linkedin"/>
      </a>

      <a href='' target='_blank'>
        <img src="/twitter.png" alt="Twitter"/>
      </a>
      </div>
      <p>© 2024 codelatent.com</p>
    </footer>
    </>
  )
}

export default App
