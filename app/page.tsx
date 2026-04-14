import BarraNavegacao from "./components/BarraNavegacao";
import LoginArea from "./components/LoginArea";

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif' }}>
      <BarraNavegacao />
      <LoginArea />
    </main>
  );
}