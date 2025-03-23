import { supabase } from "../lib/supabaseClient";

export default function Home({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    console.error("Error fetching users:", error);
    return { props: { users: [] } };
  }

  return { props: { users } };
}