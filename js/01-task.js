
const person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    city: 'New York',
  };
  function personInfo(obj) {
    const { name, age, email, city } = obj;
     const contact = `${email}, ${city}`;
    const fullName = `${name}, ${age}`;
    return { contact, fullName  };
  }
  console.log(personInfo(person));