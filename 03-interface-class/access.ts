type TUserAccount = {
    account: string;
    password: string;
    money: number;
}



interface AccountSystem {

    // users: TUserAccount[];

    // currentUser: TUserAccount | undefined;

    signIn(account: string, password: string): void
    signOut(): void

}

interface TransactionSystem {
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

interface ICashMachine extends AccountSystem, TransactionSystem { }

class CashMachine implements ICashMachine {
    private users: TUserAccount[] = [
        { account: 'Maxwell', password: '123', money: 12345 },
        { account: 'Martin', password: '456', money: 54321 },
        { account: 'Chairman Guo.', password: '789', money: 1000000000 },
    ]

    private currentUser: TUserAccount | undefined;

    // constructor(private users: TUserAccount[]) { };

    public signIn(account: string, password: string) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (
                user.account === account && user.password === password
            ) {
                this.currentUser = user;
                break;
            }
        }
    }

    public signOut(): void {
        this.currentUser = undefined;
    }

    public deposit(amount: number) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        } else {
            throw new Error('No user signed in!');
        }
    }

    public withdraw(amount: number) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        } else {
            throw new Error('No user signed in!');
        }
    }
}

function printAccountInfo(input: TUserAccount | undefined) {
    if (input === undefined) {
        console.log('No user found!');
    } else {
        console.log(`
        Current User: ${input.account}
        Money: ${input.money}`);
    }
}



const machine = new CashMachine();
console.log('Initialized:');
// printAccountInfo(machine.currentUser);


machine.signIn('Maxwell', '123');
console.log('Signed In:');
// printAccountInfo(machine.currentUser);

machine.withdraw(5000);
console.log('After Withdrawal: ');
// printAccountInfo(machine.currentUser);

machine.signOut();
console.log('Signed Out: ');
printAccountInfo(machine.currentUser);
