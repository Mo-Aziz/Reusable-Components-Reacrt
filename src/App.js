import React from "react";

import "./styles.css";

import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
}
