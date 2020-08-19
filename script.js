let employeeUpdate = null;

let responseEmployee = {
  status: "success",
  code: 200,
  data: [
    {
      name: "Employee 1",
      age: 21,
      division: "Employee",
    },
    {
      name: "Employee 2",
      age: 22,
      division: "HRD",
    },
    {
      name: "Employee 3",
      age: 23,
      division: "Employee",
    },
    {
      name: "Employee 4",
      age: 24,
      division: "Manager",
    },
    {
      name: "Employee 5",
      age: 25,
      division: "Employee",
    },
  ],
};
let filteredEmployee = responseEmployee.data;

let responseDivision = {
  status: "success",
  code: 200,
  data: {
    Employee: "Employee",
    HRD: "HRD",
    Manager: "Manager",
  },
};

const showDataEmployee = () => {
  let row = document.querySelector("table tbody");
  let rows = "";
  for (let i = 0; i < responseEmployee.data.length; i++) {
    const employee = responseEmployee.data[i];
    // rows += "<tr><td>" + i+1 + "</td><td>" + employee.name + "</td><td>" + employee.age + "</td><td>" + employee.division + "</td></tr>"
    rows += `<tr><td align=right>${i + 1}</td><td>${employee.name}</td><td>${
      employee.age
    }</td><td>${
      employee.division
    }</td><td align=center><button onclick="updateDataEmployee(${i})">Edit</button> <button onclick="removeDataEmployee(${i})">Delete</button></td></tr>`;
  }
  row.innerHTML = rows;
};
showDataEmployee();

const showFilterDivision = () => {
  let select = document.querySelector("select[name='division']");

  let i = 1;
  for (const division in responseDivision.data) {
    const currentDivision = responseDivision.data[division];
    select.options[i] = new Option(currentDivision, division);
    i++;
  }
};
showFilterDivision();

const saveDataEmployee = (e) => {
  e.preventDefault();

  if (employeeUpdate) editDataEmployee();
  else addDataEmployee();
};

const editDataEmployee = () => {
  const form = document.employee;
  const name = form.name.value;
  const age = form.age.value;
  const division = form.division.value;

  //   responseEmployee.data[employeeUpdate].name = name
  //   responseEmployee.data[employeeUpdate].age = age
  //   responseEmployee.data[employeeUpdate].division = division

//   filteredEmployee = filteredEmployee.map((employee) => {
//     if (employee.name == responseEmployee.data[employeeUpdate].name) {
//       return { name, age, division };
//     }

//     return employee;
//   });

  let tempFilteredEmployee = [];
  for (let i = 0; i < filteredEmployee.length; i++) {
    const employee = filteredEmployee[i];
    if (employee.name == responseEmployee.data[employeeUpdate].name) {
        tempFilteredEmployee.push({ name, age, division });
    } else tempFilteredEmployee.push(employee);
  }
  filteredEmployee = tempFilteredEmployee

  responseEmployee.data[employeeUpdate] = {
    name,
    age,
    division,
  };
  showDataEmployee();

  form.reset();
  employeeUpdate = null;
};

const addDataEmployee = () => {
  const form = document.employee;
  const name = form.name.value;
  const age = form.age.value;
  const division = form.division.value;

  // let statusDuplicate = false
  for (let i = 0; i < responseEmployee.data.length; i++) {
    const employee = responseEmployee.data[i];

    if (employee.name == name) {
      alert("Data sudah tersedia!!");
      return;
      // statusDuplicate = true
      // break
    }
  }

  // if (!statusDuplicate){
  responseEmployee.data.push({
    name,
    age,
    division,
  });

  showDataEmployee();
  // }
};

const updateDataEmployee = (i) => {
  const employee = responseEmployee.data[i];
  const form = document.employee;
  form.name.value = employee.name;
  form.age.value = employee.age;
  form.division.value = employee.division;

  employeeUpdate = i;
};

const removeDataEmployee = (i) => {
  filteredEmployee = filteredEmployee.filter(
    (employee) => employee.name != responseEmployee.data[i].name
  );
  responseEmployee.data.splice(i, 1);
  showDataEmployee();
};

const filterEmployee = (self) => {
  const valueFilter = self.value;

  if (valueFilter) {
    const dataFilter = filteredEmployee.filter(
      (employee) => employee.division == valueFilter
    );
    // let dataFilter = [];
    // for (let i = 0; i < filteredEmployee.length; i++) {
    //   const employee = filteredEmployee[i];

    //   if (employee.division == valueFilter) {
    //     dataFilter.push(employee);
    //   }
    // }

    responseEmployee.data = dataFilter;
  } else responseEmployee.data = filteredEmployee;
  showDataEmployee();
};

/*
TUGAS:
Buatlah semuah aplikasi yang digunakan untuk sistem parkir, dengan ketentuan:
    - Halaman generate karcis parkir (generate id parkir - otomatis, tampilkan jam masuk)
    - Halaman keluar parkir input id parkir, tipe kendaraan & plat no (menghitung total biaya)
    - motor: 2 menit pertama 3000, permenit berikutnya 1000
    - mobil: 2 menit pertama 5000, permenit berikutnya 3000
*/