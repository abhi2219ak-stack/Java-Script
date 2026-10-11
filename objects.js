

function operation1() {
    // 1.============================ OBJECT CREATION============================


    console.log("\n===== 1. OBJECT CREATION =====");

    let student = {
        name: "Abhi",
        age: 20,
        course: "BTech",
        branch: "Computer Science"
    };

    console.log(student);


    // Different Data Types in an Object

    let user = {
        name: "Abhi",
        age: 20,
        isStudent: true,
        skills: ["Java", "HTML", "CSS"],
        address: {
            city: "Prayagraj",
            state: "UP"
        },
        result: null
    };

    console.log(user);



    // 2.======================== ACCESSING OBJECT PROPERTIES ========================


    console.log("\n===== 2. ACCESSING PROPERTIES =====");

    let student2 = {
        name: "Abhi",
        age: 20,
        marks: 85
    };

    // Dot Notation
    console.log(student2.name);
    console.log(student2.age);
    console.log(student2.marks);

    // Bracket Notation
    console.log(student2["name"]);
    console.log(student2["age"]);

    // Property Name with Spaces
    let person = {
        "full name": "Abhi Patel",
        age: 20
    };

    console.log(person["full name"]);

    // Accessing Properties Using Variables
    let key = "name";

    console.log(student2[key]);    // Abhi
    console.log(student2.key);     // undefined



    // 3. =========================== ADDING, UPDATING AND DELETING PROPERTIES===========================
    console.log("\n===== 3. ADD, UPDATE AND DELETE =====");

    let student3 = {
        name: "Abhi",
        age: 20
    };

    // Adding
    student3.city = "Prayagraj";

    // Updating
    student3.age = 21;

    // Deleting                                                        
    delete student3.city;

    console.log(student3);

    // Adding Using a Variable
    let property = "course";                                              

    student3[property] = "BTech";

    console.log(student3);

    // Deleting a Property
    let user2 = {
        name: "Abhi",
        age: 20,
        city: "Prayagraj"
    };

    delete user2.age;

    console.log(user2);
    console.log(user2.age);  // undefined



    // 4.=========================== OBJECT METHODS AND THIS KEYWORD===========================


    console.log("\n===== 4. OBJECT METHODS =====");

    let student4 = {
        name: "Abhi",
        age: 20,

        greet: function () {
            console.log("Hello bro!");
        },

        show() {
            console.log("Hello " + this.name);
        }
    };

    student4.greet();
    student4.show();

    // Calculator Object
    let calculator = {           
        a: 10,
        b: 5,

        add() {
            return this.a + this.b;
        },

        subtract() {
            return this.a - this.b;
        },

        multiply() {
            return this.a * this.b;
        },

        divide() {
            return this.a / this.b;
        }
    };

    console.log(calculator.add());       // 15
    console.log(calculator.subtract());  // 5
    console.log(calculator.multiply());  // 50
    console.log(calculator.divide());    // 2



    // 5. ===========================LOOPING THROUGH OBJECTS===========================


    console.log("\n===== 5. LOOPING THROUGH OBJECTS =====");

    let student5 = {
        name: "Abhi",
        age: 20,
        marks: 85
    };

    // for...in
    for (let key in student5) {
        console.log(key, student5[key]);
    }

    // Object.keys()
    console.log(Object.keys(student5));

    // Object.values()
    console.log(Object.values(student5));

    // Object.entries()
    console.log(Object.entries(student5));

    // Object.entries() with Destructuring
    for (let [key, value] of Object.entries(student5)) {
        console.log(key, value);
    }



    // 6. =========================== CHECKING OBJECT PROPERTIES ===========================


    console.log("\n===== 6. CHECKING PROPERTIES =====");

    let student6 = {
        name: "Abhi",
        age: 20
    };

    console.log("name" in student6);  // true
    console.log("marks" in student6); // false

    console.log(student6.hasOwnProperty("name"));
    console.log(Object.hasOwn(student6, "name"));

    console.log(student6.marks); // undefined

    let student7 = {
        age: undefined
    };

    console.log("age" in student7);              // true
    console.log(Object.hasOwn(student7, "age")); // true



    // 7. =========================== NESTED OBJECTS AND OPTIONAL CHAINING ===========================


    console.log("\n===== 7. NESTED OBJECTS =====");

    let student8 = {
        name: "Abhi",

        address: {
            city: "Prayagraj",
            state: "Uttar Pradesh",
            pinCode: 211001
        }
    };

    console.log(student8.name);
    console.log(student8.address.city);
    console.log(student8.address.state);

    // Updating Nested Property
    student8.address.city = "Lucknow";

    console.log(student8.address.city);

    // Adding Nested Property
    student8.address.country = "India";

    console.log(student8.address.country);

    // Optional Chaining
    let student9 = {
        name: "Abhi"
    };

    console.log(student9.address?.city); // undefined



    // 8. =========================== OBJECT DESTRUCTURING ===========================

    console.log("\n===== 8. OBJECT DESTRUCTURING =====");

    let student10 = {
        name: "Abhi",
        age: 20,
        marks: 85
    };

    // Basic Destructuring
    let { name, age, marks } = student10;

    console.log(name);
    console.log(age);
    console.log(marks);

    // Renaming Variables
    let { name: studentName } = student10;

    console.log(studentName);

    // Default Values
    let student11 = {
        name: "Abhi"
    };

    let { age: studentAge = 18 } = student11;

    console.log(studentAge);

    // Destructuring in Function Parameters
    function displayStudent({ name, age }) {
        console.log(name);
        console.log(age);
    }

    displayStudent(student10);



    // 9.=========================== SPREAD OPERATOR===========================


    console.log("\n===== 9. SPREAD OPERATOR =====");

    let student12 = {
        name: "Abhi",
        age: 20
    };

    // Shallow Copy
    let newStudent = { ...student12 };

    newStudent.age = 25;

    console.log(student12.age);  // 20
    console.log(newStudent.age); // 25

    // Adding Properties
    let updatedStudent = {
        ...student12,
        city: "Prayagraj"
    };

    console.log(updatedStudent);

    // Overriding Properties
    let updatedStudent2 = {
        ...student12,
        age: 21
    };

    console.log(updatedStudent2);

    // Shallow Copy with Nested Object
    let student13 = {
        name: "Abhi",
        address: {
            city: "Prayagraj"
        }
    };

    let copy = { ...student13 };

    copy.address.city = "Lucknow";

    console.log(student13.address.city); // Lucknow


    // 10. =========================== REST OPERATOR ===========================


    console.log("\n===== 10. REST OPERATOR =====");

    let student14 = {
        name: "Abhi",
        age: 20,
        branch: "CSE",
        city: "Prayagraj"
    };

    let { name: name2, ...otherDetails } = student14;

    console.log(name2);
    console.log(otherDetails);



    // 11. =========================== BUILT-IN OBJECT METHODS ===========================


    console.log("\n===== 11. BUILT-IN METHODS =====");

    // Object.assign()
    let student15 = {
        name: "Abhi"
    };

    let details = {
        age: 20,
        branch: "CSE"
    };

    Object.assign(student15, details);

    console.log(student15);

    // Object.freeze()
    let frozenStudent = {
        name: "Abhi",
        age: 20
    };

    Object.freeze(frozenStudent);

    frozenStudent.age = 25;
    frozenStudent.city = "Delhi";

    console.log(frozenStudent);

    // Object.seal()
    let sealedStudent = {
        name: "Abhi",
        age: 20
    };

    Object.seal(sealedStudent);

    sealedStudent.age = 21;
    sealedStudent.city = "Delhi";
    delete sealedStudent.name;

    console.log(sealedStudent);

    // Object.fromEntries()
    let entries = [
        ["name", "Abhi"],
        ["age", 20],
        ["branch", "CSE"]
    ];

    let student16 = Object.fromEntries(entries);

    console.log(student16);



    // 12. =========================== COMPARING OBJECTS ===========================


    console.log("\n===== 12. OBJECT COMPARISON =====");

    let a = {
        name: "Abhi"
    };

    let b = {
        name: "Abhi"
    };

    let c = a;

    console.log(a === b); // false
    console.log(a === c); // true

    // Comparing Individual Properties
    let obj1 = {
        name: "Abhi",
        age: 20
    };

    let obj2 = {
        name: "Abhi",
        age: 20
    };

    console.log(
        obj1.name === obj2.name &&
        obj1.age === obj2.age
    ); // true



    // 13. =========================== COMPUTED PROPERTY NAMES ===========================


    console.log("\n===== 13. COMPUTED PROPERTY NAMES =====");

    let propertyName = "name";

    let student17 = {
        [propertyName]: "Abhi",
        age: 20
    };

    console.log(student17);

    let subject = "JavaScript";
    let subjectMarks = 90;

    let result = {
        [subject]: subjectMarks
    };

    console.log(result);



    // 14. =========================== PROPERTY SHORTHAND AND METHOD SHORTHAND ===========================


    console.log("\n===== 14. SHORTHAND SYNTAX =====");

    let studentName2 = "Abhi";
    let studentAge2 = 20;

    // Property Shorthand
    let student18 = {
        studentName2,
        studentAge2
    };

    console.log(student18);

    // Method Shorthand
    let calculator2 = {
        add(a, b) {
            return a + b;
        }
    };

    console.log(calculator2.add(10, 20));



    // 15.  =========================== OBJECTS WITH ARRAYS ===========================

    console.log("\n===== 15. OBJECTS AND ARRAYS =====");

    // Array of Objects
    let students = [
        {
            name: "Abhi",
            marks: 85
        },
        {
            name: "Rahul",
            marks: 90
        },
        {
            name: "Aman",
            marks: 75
        }
    ];

    console.log(students[0].name);
    console.log(students[1].marks);

    // Loop Through Array of Objects
    for (let student of students) {
        console.log(student.name, student.marks);
    }

    // filter()
    let passedStudents = students.filter(student => student.marks > 80);

    console.log(passedStudents);

    // map()
    let studentNames = students.map(student => student.name);

    console.log(studentNames);

    // Object Containing an Array
    let student19 = {
        name: "Abhi",
        skills: ["Java", "JavaScript", "HTML", "CSS"]
    };

    console.log(student19.skills[0]);
    console.log(student19.skills[2]);

    student19.skills.push("React");

    console.log(student19.skills);


    // 16. =========================== PRACTICAL STUDENT RESULT SYSTEM ===========================


    console.log("\n===== 16. STUDENT RESULT SYSTEM =====");

    let student20 = {
        name: "Abhi",

        subjects: {
            Java: 85,
            JavaScript: 90,
            DSA: 80
        },

        getTotal() {
            return Object.values(this.subjects)
                .reduce((total, marks) => total + marks, 0);
        },

        getAverage() {
            let marks = Object.values(this.subjects);

            return this.getTotal() / marks.length;
        }
    };

    console.log("Name:", student20.name);
    console.log("Subjects:", Object.keys(student20.subjects));
    console.log("Marks:", Object.values(student20.subjects));
    console.log("Total:", student20.getTotal());
    console.log("Average:", student20.getAverage());



    // 17.  =========================== COMMON MISTAKES AND FINAL EXAMPLES ===========================

    console.log("\n===== 17. COMMON MISTAKES =====");

    // Missing Property
    let user3 = {
        name: "Abhi"
    };

    console.log(user3.age); // undefined

    // Variable vs String Key
    let key2 = "name";

    console.log(user3[key2]);   // Abhi
    console.log(user3["key2"]); // undefined

    // Object Reference
    let first = {
        age: 20
    };

    let second = first;

    second.age = 25;

    console.log(first.age); // 25

    // Optional Chaining
    let user4 = {};

    console.log(user4.address?.city); // undefined

    // const Object
    const student21 = {
        name: "Abhi"
    };

    student21.name = "Rahul";

    console.log(student21.name); // Rahul
}
// operation1()









function operation2() {

    // 1.  ============================ OBJECT.CREATE() — PROTOTYPE ============================


    console.log("\n===== 1. OBJECT.CREATE =====");

    let animal = {
        eat() {
            console.log("Animal is eating");
        }
    };

    let dog = Object.create(animal);

    dog.name = "Tommy";

    console.log(dog.name);
    dog.eat();

    console.log(Object.getPrototypeOf(dog) === animal);
    // true

    // dog has its own name property.
    // eat() is inherited from animal.


    // 2. ============================ PROTOTYPE CHAIN ============================

    console.log("\n===== 2. PROTOTYPE CHAIN =====");

    let parent = {
        country: "India"
    };

    let child = Object.create(parent);

    child.name = "Abhi";

    console.log(child.name);       // Abhi
    console.log(child.country);    // India

    console.log(Object.hasOwn(child, "name"));    // true
    console.log(Object.hasOwn(child, "country")); // false

    console.log("country" in child); // true



    // 3.  ============================CONSTRUCTOR FUNCTIONS ============================

    console.log("\n===== 3. CONSTRUCTOR FUNCTIONS =====");

    function Student(name, age) {
        this.name = name;
        this.age = age;
    }

    Student.prototype.introduce = function () {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    };

    let s1 = new Student("Abhi", 20);
    let s2 = new Student("Rahul", 21);

    s1.introduce();
    s2.introduce();

    console.log(s1 instanceof Student); // true

    // The new keyword creates an instance and connects
    // its prototype to Student.prototype.



    // 4. ============================ GETTERS AND SETTERS ============================

    console.log("\n===== 4. GETTERS AND SETTERS =====");

    let user = {
        firstName: "Abhi",
        lastName: "Patel",

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        set fullName(value) {
            let parts = value.split(" ");

            this.firstName = parts[0];
            this.lastName = parts.slice(1).join(" ");
        }
    };

    console.log(user.fullName);

    user.fullName = "Rahul Sharma";

    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.fullName);

    // Getter: access like a property.
    // Setter: assign like a property.



    // 5. ============================ OBJECT.DEFINEPROPERTY() ============================

    console.log("\n===== 5. DEFINEPROPERTY =====");

    let product = {};

    Object.defineProperty(product, "price", {
        value: 1000,
        writable: false,
        enumerable: true,
        configurable: false
    });

    console.log(product.price);

    // product.price = 2000;
    // In non-strict mode, assignment silently fails.
    // In strict mode, it throws a TypeError.

    console.log(Object.getOwnPropertyDescriptor(product, "price"));



    // 6. ============================ PROPERTY DESCRIPTORS ============================


    console.log("\n===== 6. PROPERTY DESCRIPTORS =====");

    let account = {
        username: "abhi123",
        balance: 5000
    };

    console.log(
        Object.getOwnPropertyDescriptor(account, "username")
    );

    // Ordinary object-literal properties are generally:
    // writable: true
    // enumerable: true
    // configurable: true



    // 7. ============================ OBJECT KEYS, VALUES AND ENTRIES ============================


    console.log("\n===== 7. OBJECT TRANSFORMATIONS =====");

    let marks = {
        Java: 85,
        JavaScript: 90,
        DSA: 80
    };

    console.log(Object.keys(marks));
    console.log(Object.values(marks));
    console.log(Object.entries(marks));

    let doubledMarks = Object.fromEntries(
        Object.entries(marks).map(([subject, score]) => [
            subject,
            score * 2
        ])
    );

    console.log(doubledMarks);



    // 8. ============================ OBJECT DESTRUCTURING WITH REST ============================


    console.log("\n===== 8. ADVANCED DESTRUCTURING =====");

    let employee = {
        name: "Abhi",
        age: 20,
        department: "IT",
        salary: 50000
    };

    let { name, salary, ...otherDetails } = employee;

    console.log(name);
    console.log(salary);
    console.log(otherDetails);



    // 9.============================ SHALLOW COPY VS DEEP COPY============================


    console.log("\n===== 9. SHALLOW VS DEEP COPY =====");

    let original = {
        name: "Abhi",
        address: {
            city: "Prayagraj"
        }
    };

    // Shallow copy
    let shallowCopy = { ...original };

    shallowCopy.address.city = "Delhi";

    console.log(original.address.city); // Delhi

    // Deep copy for structured-cloneable data
    let original2 = {
        name: "Abhi",
        address: {
            city: "Prayagraj"
        }
    };

    let deepCopy = structuredClone(original2);

    deepCopy.address.city = "Lucknow";

    console.log(original2.address.city); // Prayagraj
    console.log(deepCopy.address.city);  // Lucknow

    // structuredClone supports many data types.
    // It does not clone functions or every possible object type.



    // 10.  ============================ OPTIONAL CHAINING ============================


    console.log("\n===== 10. OPTIONAL CHAINING =====");

    let student = {
        name: "Abhi",
        address: {
            city: "Prayagraj"
        }
    };

    console.log(student.address?.city);  // Prayagraj
    console.log(student.contact?.phone); // undefined

    // Optional method call
    let user2 = {};

    user2.greet?.(); // No error if greet is nullish.



    // 11.  ============================ NULLISH COALESCING============================


    console.log("\n===== 11. NULLISH COALESCING =====");

    let settings = {
        username: "",
        theme: null,
        fontSize: 0
    };

    console.log(settings.username ?? "Guest"); // ""
    console.log(settings.theme ?? "Light");    // Light
    console.log(settings.fontSize ?? 16);      // 0

    // ?? uses the fallback only for null or undefined.
    // Unlike ||, it preserves 0, false and "".



    // 12. ============================ SYMBOLS AS OBJECT KEYS ============================

    console.log("\n===== 12. SYMBOLS =====");

    let id = Symbol("id");

    let user3 = {
        name: "Abhi",
        [id]: 101
    };

    console.log(user3.name);
    console.log(user3[id]);

    console.log(Object.keys(user3));
    // ["name"]

    console.log(Object.getOwnPropertySymbols(user3));
    // [Symbol(id)]

    // Symbol-keyed properties are not returned by Object.keys().



    // 13. ============================ OBJECT.FREEZE()============================


    console.log("\n===== 13. OBJECT.FREEZE =====");

    let config = {
        appName: "MyApp",
        version: 1
    };

    Object.freeze(config);

    config.version = 2;
    config.mode = "dark";

    console.log(config);

    // Freeze prevents adding, deleting or changing
    // ordinary data properties, but is shallow.



    // 14.============================ OBJECT.SEAL() ============================


    console.log("\n===== 14. OBJECT.SEAL =====");

    let profile = {
        name: "Abhi",
        age: 20
    };

    Object.seal(profile);

    profile.age = 21;
    profile.city = "Delhi";
    delete profile.name;

    console.log(profile);

    // Existing writable properties can be updated.
    // New properties cannot be added and existing
    // properties cannot be deleted.



    // 15. ============================ PROTOTYPE INHERITANCE ============================

    console.log("\n===== 15. PROTOTYPE INHERITANCE =====");

    let vehicle = {
        start() {
            console.log("Vehicle started");
        }
    };

    let car = Object.create(vehicle);

    car.drive = function () {
        console.log("Car is moving");
    };

    car.start();
    car.drive();

    console.log(Object.getPrototypeOf(car) === vehicle);
    // true



    // 16. ============================ CLASSES AND PRIVATE FIELDS ============================


    console.log("\n===== 16. CLASSES AND PRIVATE FIELDS =====");

    class BankAccount {
        #balance;

        constructor(owner, balance) {
            this.owner = owner;
            this.#balance = balance;
        }

        deposit(amount) {
            if (amount <= 0) {
                throw new Error("Amount must be positive");
            }

            this.#balance += amount;
        }

        get balance() {
            return this.#balance;
        }
    }

    let account1 = new BankAccount("Abhi", 1000);

    account1.deposit(500);

    console.log(account1.owner);
    console.log(account1.balance);

    // console.log(account1.#balance);
    // SyntaxError: private fields cannot be accessed
    // outside the class body.



    // 17. ============================ STATIC METHODS============================


    console.log("\n===== 17. STATIC METHODS =====");

    class MathHelper {
        static square(number) {
            return number * number;
        }

        static add(a, b) {
            return a + b;
        }
    }

    console.log(MathHelper.square(5)); // 25
    console.log(MathHelper.add(10, 20)); // 30

    // Static methods belong to the class itself,
    // not to its instances.



    // 18.============================ OBJECT.GROUPBY()============================


    console.log("\n===== 18. OBJECT.GROUPBY =====");

    let people = [
        { name: "Abhi", role: "Student" },
        { name: "Rahul", role: "Developer" },
        { name: "Aman", role: "Student" },
        { name: "Ravi", role: "Developer" }
    ];

    if (typeof Object.groupBy === "function") {
        let groupedPeople = Object.groupBy(
            people,
            person => person.role
        );

        console.log(groupedPeople);
    } else {
        console.log("Object.groupBy is not supported in this runtime.");
    }

    // Object.groupBy is available in modern JavaScript runtimes.



    // 19.============================ COMPUTED PROPERTIES AND SPREAD OVERRIDING ============================


    console.log("\n===== 19. COMPUTED PROPERTIES =====");

    let dynamicKey = "score";

    let result = {
        name: "Abhi",
        [dynamicKey]: 90
    };

    console.log(result);

    let updatedResult = {
        ...result,
        score: 95
    };

    console.log(updatedResult);



    // 20. ============================ CHECKING OBJECT OWN PROPERTIES============================


    console.log("\n===== 20. OWN PROPERTIES =====");

    let parentObject = {
        country: "India"
    };

    let childObject = Object.create(parentObject);

    childObject.name = "Abhi";

    console.log("name" in childObject); // true
    console.log("country" in childObject); // true

    console.log(Object.hasOwn(childObject, "name")); // true
    console.log(Object.hasOwn(childObject, "country")); // false



    // 21. ============================ PRACTICAL EXAMPLE — PRODUCT MANAGEMENT ============================

    console.log("\n===== 21. PRODUCT MANAGEMENT =====");

    let inventory = [
        { name: "Laptop", price: 50000, stock: 5 },
        { name: "Mouse", price: 500, stock: 20 },
        { name: "Keyboard", price: 1500, stock: 10 }
    ];

    // Products costing more than 1000
    let expensiveProducts = inventory.filter(
        product => product.price > 1000
    );

    console.log(expensiveProducts);

    // Extract product names
    let productNames = inventory.map(
        product => product.name
    );

    console.log(productNames);

    // Calculate total inventory value
    let totalValue = inventory.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );

    console.log("Total inventory value:", totalValue);



}