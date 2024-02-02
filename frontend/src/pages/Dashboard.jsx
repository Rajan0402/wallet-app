import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";

export function Dashboard() {
  return (
    <div>
      <AppBar />
      <Balance amount={10000} />
    </div>
  );
}
