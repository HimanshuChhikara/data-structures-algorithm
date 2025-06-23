// ===== 1. CLOSURES & LEXICAL SCOPING =====

// Closure: Inner function has access to outer function's variables
function outerFunction(x) {
    // Outer function's variable
    let outerVar = x;
    
    return function innerFunction(y) {
        // Inner function can access outerVar
        return outerVar + y;
    };
}

const addFive = outerFunction(5);
console.log("=== CLOSURES ===");
console.log(addFive(10)); // 15 - closure maintains access to outerVar

// Practical closure example: Module pattern
const counterModule = (function() {
    let count = 0; // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();

console.log(counterModule.increment()); // 1
console.log(counterModule.getCount()); // 1

// ===== 2. HOISTING & TEMPORAL DEAD ZONE =====

console.log("\n=== HOISTING ===");

// Variables declared with var are hoisted and initialized with undefined
console.log(hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted!";

// Function declarations are fully hoisted
console.log(hoistedFunction()); // "I'm hoisted too!"
function hoistedFunction() {
    return "I'm hoisted too!";
}

// let/const are hoisted but not initialized (Temporal Dead Zone)
try {
    console.log(notInitialized); // ReferenceError
} catch(e) {
    console.log("Error:", e.message);
}
let notInitialized = "Now I'm initialized";

// ===== 3. PROTOTYPES & INHERITANCE =====

console.log("\n=== PROTOTYPES ===");

// Constructor function
function Animal(name) {
    this.name = name;
}

// Adding method to prototype
Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override method
Dog.prototype.speak = function() {
    return `${this.name} barks`;
};

const dog = new Dog("Rex", "Labrador");
console.log(dog.speak()); // "Rex barks"
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

// ===== 4. ADVANCED OBJECTS & DESCRIPTORS =====

console.log("\n=== OBJECT DESCRIPTORS ===");

const obj = {};

// Define property with descriptor
Object.defineProperty(obj, 'readOnlyProp', {
    value: 'Cannot change this',
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(obj.readOnlyProp); // "Cannot change this"
obj.readOnlyProp = 'New value'; // Silently fails in non-strict mode
console.log(obj.readOnlyProp); // Still "Cannot change this"

// Getter and setter
Object.defineProperty(obj, 'computed', {
    get() {
        return this._value || 0;
    },
    set(val) {
        this._value = val * 2;
    }
});

obj.computed = 5;
console.log(obj.computed); // 10

// ===== 5. ASYNC PROGRAMMING PATTERNS =====

console.log("\n=== ASYNC PATTERNS ===");

// Promise chaining vs async/await
function fetchData(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data for ${id}`), 100);
    });
}

// Traditional Promise chaining
fetchData(1)
    .then(data => {
        console.log("Promise chain:", data);
        return fetchData(2);
    })
    .then(data => console.log("Promise chain:", data));

// Async/await (cleaner)
async function fetchAllData() {
    try {
        const data1 = await fetchData(1);
        console.log("Async/await:", data1);
        const data2 = await fetchData(2);
        console.log("Async/await:", data2);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchAllData();

// Parallel execution
async function fetchParallel() {
    const [data1, data2, data3] = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ]);
    console.log("Parallel:", data1, data2, data3);
}

fetchParallel();

// ===== 6. GENERATORS & ITERATORS =====

console.log("\n=== GENERATORS ===");

// Generator function
function* numberGenerator() {
    let i = 0;
    while (i < 3) {
        yield i++;
    }
}

const gen = numberGenerator();
console.log(gen.next()); // {value: 0, done: false}
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: undefined, done: true}

// Infinite generator
function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacciGenerator();
console.log("Fibonacci:", fib.next().value, fib.next().value, fib.next().value); // 0 1 1

// Custom iterator
const customIterable = {
    data: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                }
                return { done: true };
            }
        };
    }
};

console.log("Custom iterator:", [...customIterable]); // [1, 2, 3, 4, 5]

// ===== 7. SYMBOLS & METADATA =====

console.log("\n=== SYMBOLS ===");

// Creating symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false - symbols are always unique

// Using symbols as object keys
const obj2 = {
    [sym1]: 'value1',
    normalProp: 'value2'
};

console.log(obj2[sym1]); // 'value1'
console.log(Object.keys(obj2)); // ['normalProp'] - symbols not enumerable

// Well-known symbols
const customObj = {
    items: [1, 2, 3],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => ({
                value: this.items[index++],
                done: index > this.items.length
            })
        };
    }
};

console.log([...customObj]); // [1, 2, 3]

// ===== 8. PROXY & REFLECTION =====

console.log("\n=== PROXY & REFLECT ===");

const target = {
    name: 'John',
    age: 30
};

const proxy = new Proxy(target, {
    get(obj, prop) {
        console.log(`Getting property: ${prop}`);
        return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        if (prop === 'age' && value < 0) {
            throw new Error('Age cannot be negative');
        }
        return Reflect.set(obj, prop, value);
    },
    has(obj, prop) {
        if (prop.startsWith('_')) {
            return false; // Hide private properties
        }
        return Reflect.has(obj, prop);
    }
});

console.log(proxy.name); // Logs "Getting property: name" then "John"
proxy.age = 25; // Logs "Setting age to 25"

// ===== 9. ADVANCED ARRAY METHODS =====

console.log("\n=== ADVANCED ARRAY METHODS ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Reduce for complex operations
const result = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.even.push(num);
    } else {
        acc.odd.push(num);
    }
    return acc;
}, { even: [], odd: [] });

console.log("Grouped:", result);

// FlatMap
const nested = [[1, 2], [3, 4], [5, 6]];
console.log("FlatMap:", nested.flatMap(arr => arr.map(x => x * 2))); // [2, 4, 6, 8, 10, 12]

// Array.from with mapping
const squares = Array.from({ length: 5 }, (_, i) => (i + 1) ** 2);
console.log("Squares:", squares); // [1, 4, 9, 16, 25]

// ===== 10. MEMORY MANAGEMENT & WEAK REFERENCES =====

console.log("\n=== WEAK REFERENCES ===");

// WeakMap - keys are weakly referenced
const weakMap = new WeakMap();
let keyObj = { id: 1 };

weakMap.set(keyObj, 'associated data');
console.log(weakMap.get(keyObj)); // 'associated data'

// WeakSet
const weakSet = new WeakSet();
weakSet.add(keyObj);
console.log(weakSet.has(keyObj)); // true

// When keyObj is garbage collected, entries are automatically removed

// ===== 11. ADVANCED FUNCTION TECHNIQUES =====

console.log("\n=== ADVANCED FUNCTIONS ===");

// Function memoization
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Cache hit!');
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const expensiveOperation = memoize((n) => {
    console.log(`Computing for ${n}`);
    return n * n * n;
});

console.log(expensiveOperation(5)); // Computing for 5, then 125
console.log(expensiveOperation(5)); // Cache hit!, then 125

// Function composition
const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);
const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

const add1 = x => x + 1;
const multiply2 = x => x * 2;
const square = x => x * x;

const composedFn = compose(square, multiply2, add1);
const pipedFn = pipe(add1, multiply2, square);

console.log("Composed (5):", composedFn(5)); // square(multiply2(add1(5))) = square(12) = 144
console.log("Piped (5):", pipedFn(5)); // square(multiply2(add1(5))) = square(12) = 144

// ===== 12. ERROR HANDLING PATTERNS =====

console.log("\n=== ERROR HANDLING ===");

// Custom error classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'NetworkError';
        this.statusCode = statusCode;
    }
}

// Error handling with async/await
async function processUserData(userData) {
    try {
        if (!userData.email) {
            throw new ValidationError('Email is required', 'email');
        }
        
        // Simulate network request
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(userData)
        }).catch(() => {
            throw new NetworkError('Network request failed', 500);
        });
        
        return response;
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`Validation error in ${error.field}: ${error.message}`);
        } else if (error instanceof NetworkError) {
            console.log(`Network error (${error.statusCode}): ${error.message}`);
        } else {
            console.log('Unexpected error:', error.message);
        }
        throw error; // Re-throw if needed
    }
}

// ===== 13. PERFORMANCE OPTIMIZATION TECHNIQUES =====

console.log("\n=== PERFORMANCE OPTIMIZATION ===");

// Debouncing
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttling
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const debouncedLog = debounce(console.log, 300);
const throttledLog = throttle(console.log, 300);

// Lazy evaluation
function lazyMap(array, mapFn) {
    let index = 0;
    return {
        next() {
            if (index < array.length) {
                return { value: mapFn(array[index++]), done: false };
            }
            return { done: true };
        },
        [Symbol.iterator]() {
            return this;
        }
    };
}

const lazySquares = lazyMap([1, 2, 3, 4, 5], x => {
    console.log(`Squaring ${x}`);
    return x * x;
});

console.log("Taking first 2 lazy squares:");
const iterator = lazySquares[Symbol.iterator]();
console.log(iterator.next().value); // Squaring 1, then 1
console.log(iterator.next().value); // Squaring 2, then 4

console.log("\n=== CONCEPTS SUMMARY ===");
console.log("✓ Closures & Lexical Scoping");
console.log("✓ Hoisting & Temporal Dead Zone");
console.log("✓ Prototypes & Inheritance");
console.log("✓ Object Descriptors & Property Control");
console.log("✓ Advanced Async Patterns");
console.log("✓ Generators & Iterators");
console.log("✓ Symbols & Metadata Programming");
console.log("✓ Proxy & Reflection");
console.log("✓ Advanced Array Methods");
console.log("✓ Memory Management & Weak References");
console.log("✓ Function Composition & Memoization");
console.log("✓ Advanced Error Handling");
console.log("✓ Performance Optimization Techniques");