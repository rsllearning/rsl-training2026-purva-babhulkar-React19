import { useUser } from "../context/UserContext";

function UserProfile() {
  const { user } = useUser();

  if (!user) {
    return (
      <section>
        <h2>User Profile</h2>
        <p>No user registered yet.</p>
      </section>
    );
  }

  return (
    <section className="profile-section">
      <h2>Registered User</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </section>
  );
}

export default UserProfile;
