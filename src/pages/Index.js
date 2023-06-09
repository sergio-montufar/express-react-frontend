// import { useState, useMemo } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: ""
  });

  const handleChange = (e) => {
    setNewForm((prev) => ({
      ...prev, 
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPeople(newForm);
    setNewForm({
      name: "",
      image: "",
      title: ""
    });
  }

  
  const Loaded = () => {
    return (
      props.people.map((person) => (
        <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <img src={person.image} alt={person.name} />
        <h3>{person.title}</h3>
        </div>
      ))) 
    
  }

  const Loading = () => {
    return <h1>Loading...</h1>
  }

  // const MainScreenContent = useMemo(() => {
  //   console.log(props.people)
  //   return props.people ? <Loaded /> : <Loading />
  // })

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Person" />
      </form>
      {/* {MainScreenContent} */}
      {props.people ? <Loaded /> : <Loading />}
    </section>
    
  )
}