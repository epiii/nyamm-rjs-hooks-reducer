// tutorial https://www.youtube.com/watch?v=RsjzlJu9q-4
import ContacForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Contact App</h1>
      <ContacForm />
      <ContactList />
    </div>
  );
}

export default App;
