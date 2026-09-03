import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
}

export function useUser() {
  return useContext(UserContext);
}
