import './profile.css'
import Account from '../../components/account/account'
import accountData from '../../data/account.json'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, editUsername } from '../../redux/actions';

const Profile = () => {
  const dispatch = useDispatch(); // 

  const user = useSelector((state) => state.auth.user); // Selectionne "user" dans le reducer
  const [editing, setEditing] = useState(false); // État pour gérer l'affichage du formulaire

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const edit = (e) => {
    e.preventDefault();
    setEditing(true); // Mettre à jour l'état pour afficher le formulaire
  };

  const cancel = (e) => {
    e.preventDefault();
    setEditing(false); // Mettre à jour l'état pour revenir au header
  };

  const save = async (e) => {
    e.preventDefault();
    const newUsername = e.target.elements.userName.value;
    dispatch(editUsername(newUsername));
    setEditing(false);
  };

  return (
    <main class="profile bg-dark">
      {!editing ? ( 
      <header>
        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
        <button onClick={edit}>Edit Name</button>
      </header>
      ) : (
        <form onSubmit={save}>
          <p>Edit user name</p>

          <label htmlFor="userName">User name :</label>
          <input
            type="text"
            id="userName"
            defaultValue={user.userName}
            required
          />
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            defaultValue={user.firstName}
            disabled
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            defaultValue={user.lastName}
            disabled
          />
          <section className='profil-buttons'>
            <button type="submit">Save</button>
            <button type="button" onClick={cancel}>Cancel</button>
          </section>
        </form>
      )}

      {accountData.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))} 
    </main>
  )
}

export default Profile;
