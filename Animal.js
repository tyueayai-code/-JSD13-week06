export class Animal {
    constructor(name, species, symbol) {
        this.name = name;
        this.species = species;
        this.symbol = symbol;
        this.hunger = 50;
    }

    // เมธอดสำหรับอธิบายข้อมูลสัตว์
    describe() {
        return `${this.name} is a ${this.species}.`;
    }

    // เมธอดสำหรับเสียงร้อง
    makeSound() {
        return `${this.name} makes a sound!`;
    }

    askCommand(rl, zooAnimals, visitor, zooPath) {
        rl.question(
            "\n[l] Left | [r] Right | [i] Inspect | [d] Directory | [q] Quit\n> ",
            (answer) => {
                const command = answer.trim().toLowerCase();

                if (command === "q") {
                    console.log("Exiting the zoo. Goodbye!");
                    rl.close();
                } else if (command === "d") {
                    console.log("\nZoo directory");
                    console.table(zooAnimals);
                    this.askCommand(rl, zooAnimals, visitor, zooPath);
                } else if (command === "l") {
                    // ขยับไปทางซ้าย (ลดตำแหน่ง position)
                    if (visitor.position > 0) {
                        visitor.position--;
                    }
                    displayZooAndPrompt(rl, zooAnimals, visitor, zooPath);
                } else if (command === "r") {
                    // ขยับไปทางขวา (เพิ่มตำแหน่ง position)
                    if (visitor.position < zooPath.length - 1) {
                        visitor.position++;
                    }
                    displayZooAndPrompt(rl, zooAnimals, visitor, zooPath);
                } else if (command === "i") {
                    // ตรวจสอบตำแหน่งปัจจุบัน
                    inspectLocation(visitor, zooPath);
                    this.askCommand(rl, zooAnimals, visitor, zooPath);
                } else {
                    console.log("Invalid command. Please try again.");
                    this.askCommand(rl, zooAnimals, visitor, zooPath);
                }
            }
        );
    }
}

// ฟังก์ชันแสดงแผนผังซู (ดัดแปลงจากโค้ดที่คุณส่งมา)
export function displayZoo(zooName, zooPath, visitor) {
    const bannerRow = [`===${zooName}===`];
    const placesRow = zooPath.map((location) => location.symbol);
    const pathwayRow = zooPath.map(() => "⬜");
    pathwayRow[visitor.position] = "🧑";

    console.log("");
    console.log(bannerRow.join(""));
    console.log(placesRow.join(" — "));
    console.log(pathwayRow.join(" — "));
}

// ฟังก์ชันตรวจสอบสถานที่
export function inspectLocation(visitor, zooPath) {
    const location = zooPath[visitor.position];

    console.log(`\nYou are at: ${location.name}`);

    if (location.animal) {
        console.log(location.animal.describe());
        console.log(location.animal.makeSound());
    } else {
        console.log(location.description);
    }
}

// ฟังก์ชันสำหรับเรนเดอร์แผนผังใหม่ทุกครั้งที่มีการขยับ
export function displayZooAndPrompt(rl, zooAnimals, visitor, zooPath) {
    displayZoo("JS Terminal Zoo", zooPath, visitor);
    console.log(`\nYou are at: ${zooPath[visitor.position].name}`);
    zooAnimals[0].askCommand(rl, zooAnimals, visitor, zooPath);
}