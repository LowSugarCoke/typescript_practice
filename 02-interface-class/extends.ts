interface AccuntSystem {
    email: string;
    password: string;
    subscribed: boolean;
}

interface AccountPersonalInfo {
    nickname?: string;
    birth?: Date;
    gender?: Gender;
}

interface UserAccount extends AccuntSystem, AccountPersonalInfo { }

let accountMaxWell: UserAccount = {
    email: 'max@example.com',
    password: '<hashed-password>',
    subscribed: false,
    nickname: 'Maxwell',
    gender: Gender.Male,
};

