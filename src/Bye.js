function Bye(props) {
    const name = props.name,
          age = props.age,
          gender = props.gender;

    return (
        <div>Bye {name} {age} {gender}</div>
    )
}

export default Bye;