import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default (props) => {
  const {id} = useParams();
  const navigate = useNavigate()
  const people = props.people
  const person = people.find((p) => p._id === id)

  const [editForm, setEditForm] = useState(person)

  const handleChange = (e) => {
    setEditForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updatePeople(editForm, id);
    navigate("/");
  }

  const handleDelete = () => {
    props.deletePeople(id);
    navigate("/")
  }

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />
      <button id="delete" onClick={handleDelete}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="image"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}
        />
        <input type="submit" value="Update Person"/>
      </form>

    </div>
    )
}