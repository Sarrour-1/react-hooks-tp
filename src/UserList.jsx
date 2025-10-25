import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]); // Stocke la liste des utilisateurs
  const [loading, setLoading] = useState(true); // Pour afficher "chargement..."
  const [error, setError] = useState(null); // Pour gérer les erreurs

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erreur lors du chargement des utilisateurs');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // [] = on exécute une seule fois au montage

  // Gestion des états de chargement et d'erreur
  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  // Affichage de la liste des utilisateurs
  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
