let person = {
  name: "Admin",
  age: 21,
};
console.log(person);
console.log(person.name);

let person2 = {};
person2.name = "Administrator";
person2.age = 22;
console.log(person2);

let classroom = [];
classroom.push(person);
classroom.push(person2);
console.log(classroom);

function printName(name) {
  console.log(name);
  return 123;
}

const printName2 = function (name) {
  console.error(name);
};

const printName3 = (name) => {
  // arrow fn
  console.error(name);
};

function isExist(name, callbackFn) {
  console.log("My Name is: ", name);
  //   for (let i = 0; i < classroom.length; i++) {
  //     const element = classroom[i];
  //     if (name == element.name) {
  //         callbackFn();
  //         return
  //     }
  //   }
//   let totalAge = 0
//   classroom.forEach((dataPerson) => {
//     if (dataPerson.name == name) {
//         totalAge += dataPerson.age
//       callbackFn();
//       return;
//     }
//   });
//   console.log(totalAge);
    const statusSome = classroom.some(dataPerson => dataPerson.name == name)
    console.log("statusSome: " + statusSome);

    const statusFilter = classroom.filter(dataPerson => dataPerson.age > 16)
    console.log("statusFilter: ");
    console.log(statusFilter);

    const statusMap = classroom.map(dataPerson => {
        return {
            nama: dataPerson.name,
            umur: dataPerson.age,
            sisaUmur: 60 - dataPerson.age
        }
    })
    console.log("statusMap: ");
    console.log(statusMap);

  callbackFn();
}

printName2("administrator");
printName3("administrator3");
const test = printName("admin");
console.warn(test + 5);

const exist = isExist("Admin", () =>
  console.log("ini dirunning setelah exist dijalankan, dengan status: ")
);
console.log(exist);

/*
TUGAS:
Editlah aplikasi karyawan menggunakan metode:
    - Object & array
    - localStorage
Data karyawan harus sesuai KTP dan karyawan tidak boleh memiliki NIK yang sama
Page terdiri dari:
    - login
    - Input Karyawan
    - Daftar Karyawan (Grouping berdasarkan Divisi => selectbox)
    - Input Divisi
    - Daftar Divisi
    - Assignment Divisi (menu tersendiri)
*/