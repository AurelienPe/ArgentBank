import './profile.css'
import Account from '../../components/account/account'
import accountData from '../../data/account.json'

const Profile = () => {
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1> 
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>

      {accountData.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
          transaction={account.transaction}
        />
      ))} 
    </main>
  )
}

export default Profile;
