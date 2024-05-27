import './home.css'
import chat_icon from '../../img/icon-chat.png'
import money_icon from '../../img/icon-money.png'
import security_icon from '../../img/icon-security.png'
import iconMoney from "../../img/icon-money.webp";
import iconSecurity from "../../img/icon-security.webp";
const Home = () => {
  const imageFeature = {
    "icon-chat.webp": iconChat,
    "icon-money.webp": iconMoney,
    "icon-security.webp": iconSecurity
  }

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

        {features.map((feature) => (
          <Feature
            key={feature.title}
            image={imageFeature[feature.image]}
            alt={feature.alt}
            title={feature.title}
            text={feature.text}
          />
        ))}

        </section>
      </main>
    </body>
  )
}

export default Home;
