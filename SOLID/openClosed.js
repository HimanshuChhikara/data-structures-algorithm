
// The Open-Closed Principle is the "O" in SOLID and states:
// "Software entities should be open for extension but closed for modification."
// What it means:

// Open for Extension: You should be able to add new functionality or behavior
// Closed for Modification: You shouldn't need to change existing, working code

// Why it matters:

// Reduces risk of introducing bugs in existing code
// Makes systems more maintainable and scalable
// Promotes code reusability
// Follows the principle of "don't touch working code"

class SaveToDB {
    save() {
        throw new Error("Save method must be implemented");
    }
}

class SaveToMongoDB extends SaveToDB {
    save() {
        console.log("Saving to MongoDB");
    }
}

class SaveToCasandraDB extends SaveToDB {
    save() {
        console.log("Saving to CasandraDB");
    }
}

