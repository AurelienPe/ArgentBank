import './home.css'
import chat_icon from '../../img/icon-chat.png'
import money_icon from '../../img/icon-money.png'
import security_icon from '../../img/icon-security.png'

const Home = () => {
  return (
    <body>
      <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p>No fees.</p>
            <p>No minimum deposit.</p>
            <p>High interest rates.</p>
            <p>Open a savings account with Argent Bank today!</p>
          </section>
        </div>

        <section class="features">
          <h2 class="sr-only">Features</h2>
          <figure>
            <img src={chat_icon}
              alt="Chat Icon"
            />
            <h3>You are our #1 priority</h3>
            <figcaption>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </figcaption>
          </figure>

          <figure>
            <img
              src={money_icon}
              alt="Chat Icon"
            />
            <h3>More savings means higher rates</h3>
            <figcaption>
              The more you save with us, the higher your interest rate will be!
            </figcaption>
          </figure>

          <figure>
            <img
              src={security_icon}
              alt="Chat Icon"
            />
            <h3>Security you can trust</h3> 
            <figcaption>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </figcaption>
          </figure>

        </section>
      </main>
    </body>
  )
}

export default Home;
