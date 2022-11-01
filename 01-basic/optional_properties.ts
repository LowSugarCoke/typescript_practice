enum Gender { Male, Female, Other };

// type AccountInfo = {
//     account: string,
//     password: string,
//     nickname: string,
//     birth: Date,
//     gender: Gender,
//     subscribed: boolean
// };

// let accountMaxwell: AccountInfo = {
//     account: 'nordic.wyvern',
//     password: '<hashed-password',
//     subscribed: false
// };

type AccountInfo = {
    account: string,
    password: string,
    nickname?: string,
    birth?: Date,
    gender?: Gender,
    subscribed: boolean
};

let accountMaxwell: AccountInfo = {
    account: 'nordic.wyvern',
    password: '<hashed-password>',
    subscribed: false
};

