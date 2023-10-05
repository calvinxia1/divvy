import React, { useState } from 'react';

const CreateUserForm: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can send the user data to your API or perform other actions
    console.log('User data:', user);
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;