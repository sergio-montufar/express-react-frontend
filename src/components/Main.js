import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

export default (props) => {
const URL = "https://express-react-backend-app.herokuapp.com";
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const response = await fetch(URL)
    const data = await response.json();
    setPeople(data);
  }

  const createPeople = async (person) => {
    // const newPersonData = await fetch(URL, {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(person)
    // })
    // const newPerson = await newPersonData.json();
    // setPeople((prev) => prev.push(newPerson))

    await fetch(`${URL}/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    // update list of people
    getPeople();
  }

  const updatePeople = async(person, id) => {
    await fetch(`${URL}/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(person)
    })
    getPeople();
  }

  const deletePeople = async(id) => {
    await fetch(URL + id, {
      method: "delete"
    });
    getPeople();
  }

  useEffect(() => getPeople, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={
        <Index people={people} 
        createPeople={createPeople}/>
        } />

        <Route path="/people/:id" element={
        <Show 
          people={people} 
          updatePeople={updatePeople}
          deletePeople={deletePeople}
        />
        } />
      </Routes>
    </main>
  )
}