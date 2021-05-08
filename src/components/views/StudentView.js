const StudentView = (props) => {
    const {student} = props;
    //waiting for students array to be populated
    // if (campus.students === undefined){
    //   return <div>Loading...</div>
    // }
    return (
      <div>      
        <h1>{student.firstname}</h1>
        <h1>{student.lastname}</h1>
        <p>{student.email}</p>
        <p>{student.gpa}</p>
        {/* { <ul>
        {student.students.map( studentx => {
          let name = studentx.firstname + " " + studentx.lastname;
          return (
            <li key={studentx.id}>{name}</li>
          );
        })}
        </ul> } */}
      </div>
    );
  
  };
  
  export default StudentView;