import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [managementPersonnels, setManagementPersonnels] = useState([]);

  return (
    <div>

      <Form
        managementPersonnels={managementPersonnels}
        setManagementPersonnels={setManagementPersonnels}
      />
      <List
        managementPersonnels={managementPersonnels}
      />

    </div>
  );
}

export default App;
