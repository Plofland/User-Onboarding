import "./App.css";
import Form from "./components/Form";

const initialValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: false,
};

function App() {
  const [user, setUser] = useState(initialValues);

  return;
  <div>
    <Form />
  </div>;
}

export default App;
