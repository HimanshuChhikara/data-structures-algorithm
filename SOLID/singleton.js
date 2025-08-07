class DatabaseConnection {
    constructor() {
        if(DatabaseConnection.instance) {
            return DatabaseConnection.instance
        }

        this.connection = null;
        this.isConnected = false;
        DatabaseConnection.instance = this;
    }

    connect() {
        if(!this.isConnected) {
            this.isConnected = true;
            this.connection = "Connected"
        }
        return this.connection
    }
}


const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2)