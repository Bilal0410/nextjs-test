"use client";

export default function Foo() {
    const names = [
        { firstName: "Ola", lastName: "Nordmann" },
        { firstName: "John", lastName: "Doe" },
        { firstName: "Mario", lastName: "Rossi" },
        { firstName: "Jan", lastName: "Jansen" },
    ];
    
    const combinedNames = names.map((person) => {
        return `${person.firstName} ${person.lastName}`;
    });

    console.log(combinedNames);

    return <div>Foo</div>
}

const foo = [5, 5, 5, 10];
const sumOfValues = foo.reduce((total, value) => (total += value));

const products = [
    { title: "Milk", price: 25.0},
    { title: "Milk", price: 25.0},
    { title: "Milk", price: 25.0},
    { title: "Milk", price: 25.0},
];

const totalCost = products.reduce(
    (total, currentProduct) => (total += currentProduct.
        price),
        0
);

console.log('Total Cost:', totalCost);
