class Student {
  fullName: string

  constructor (public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

let user = new Student('a', 'M.', 'c')

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello,' + person.firstName + ' ' + person.lastName
}

document.body.innerHTML = greeter(user)
