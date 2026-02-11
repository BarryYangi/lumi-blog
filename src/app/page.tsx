import ClientHome from './ClientHome';
import { getAllLogs } from './logs/logs';

export default function Home() {
  const logs = getAllLogs();
  return <ClientHome logs={logs} />;
}
