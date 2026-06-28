import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          {user.id} - {user.name}
        </div>
      ))}
    </>
  );
}

export default App;
