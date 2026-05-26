// //dz1
// class SimpleMarker {
//     constructor(color, inkPercentage) {
//         this.color = color;
//         this.inkPercentage = inkPercentage;
//     }

//     print(text) {
//         let result = '';
//         for (let i = 0; i < text.length; i++) {
//             if (this.inkPercentage <= 0) {
//                 break;
//             }
//             result += text[i];
//             if (text[i] !== ' ') {
//                 this.inkPercentage -= 0.5;
//             }
//         }
//         document.write(`<p style="color: ${this.color}; margin: 0;">${result}</p>`);
//     }
// }

// class RefillableMarker extends SimpleMarker {
//     refill(amount) {
//         this.inkPercentage += amount;
//         if (this.inkPercentage > 100) {
//             this.inkPercentage = 100;
//         }
//     }
// }

// const marker = new RefillableMarker('red', 2);
// marker.print('Hello World! This text is too long for two percent.');
// marker.refill(50);
// marker.print('Now the marker is refilled and can print way more text!');

// //dz2
// class ExtendedDate extends Date {
//     getDateText() {
//         const months = [
//             'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
//             'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
//         ];
//         return `${this.getDate()} ${months[this.getMonth()]}`;
//     }

//     isFutureOrCurrent() {
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const checkDate = new Date(this.getTime());
//         checkDate.setHours(0, 0, 0, 0);
//         return checkDate >= today;
//     }

//     isLeapYear() {
//         const year = this.getFullYear();
//         return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//     }

//     getNextDate() {
//         const next = new ExtendedDate(this.getTime());
//         next.setDate(this.getDate() + 1);
//         return next;
//     }
// }

// const myDate = new ExtendedDate(2026, 4, 26); 

// console.log(`Дата текстом: ${myDate.getDateText()}`);
// console.log(`Майбутня або поточна: ${myDate.isFutureOrCurrent()}`);
// console.log(`Високосний рік: ${myDate.isLeapYear()}`);

// const nextDate = myDate.getNextDate();
// console.log(`Наступна дата: ${nextDate.getDateText()}`);

//dz3
class Employee {
    constructor(name, position, department) {
        this.name = name;
        this.position = position;
        this.department = department;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = '<table>';
        html += '<thead><tr><th>Ім\'я</th><th>Посада</th><th>Відділ</th></tr></thead>';
        html += '<tbody>';
        this.employees.forEach(emp => {
            html += `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.department}</td></tr>`;
        });
        html += '</tbody></table>';
        return html;
    }
}

class StyledEmpTable extends EmpTable {
    getStyles() {
        return `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-family: Arial, sans-serif;
                    margin-top: 20px;
                }
                th, td {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                }
                tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
            </style>
        `;
    }

    getHtml() {
        return this.getStyles() + super.getHtml();
    }
}

const bankEmployees = [
    new Employee('Олександр', 'Менеджер', 'Кредитний відділ'),
    new Employee('Марія', 'Касир', 'Операційна каса'),
    new Employee('Дмитро', 'Аналітик', 'Департамент ризиків')
];

const styledTable = new StyledEmpTable(bankEmployees);
document.write(styledTable.getHtml());