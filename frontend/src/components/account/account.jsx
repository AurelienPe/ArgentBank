import './account.css';

function Account({title, amount, description }) {
  return (
    <section class="account">
      <header class="account-content-wrapper">
        <h3>{title}</h3>
        <b>{amount}</b>
        <p>{description}</p>
      </header>
      <div class="account-content-wrapper cta">
        <button>View transactions</button>
      </div>
    </section>
  )
}

export default Account;
