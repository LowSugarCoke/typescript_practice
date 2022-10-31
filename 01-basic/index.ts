let MyName = "JackLee";
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

// Warning
// myName = null;
// age = true;
// hasPet = "Doggie & Kitty";

nothing = 'something';
nothingLiterally = 'Literally has something';

nothing = true;
nothingLiterally = 42;

nothing = 'can be anything!?';
nothingLiterally = 'Literally can be something crazy';

// any
let messageToSend;

messageToSend = 'Cat is afraid of cucumbers...';
messageToSend = 101101110101010101111;

// undefined
let absoluteNothing: undefined = undefined;
let literallyAbsoluteNothing: null = null;

// Warning
// absoluteNothing = 123;
// literallyAbsoluteNothing = 'I can't live in this variable now...'

// string
let canBeNullableString: string;
canBeNullableString = 'hello';
let myString = canBeNullableString;
// if canBeNullableString here, it will be warning
// canBeNullableString = 'hello';

// union
let absolutelyEitherNullOrString: string | null = null;
absolutelyEitherNullOrString = 'Assigned with strong...';
absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = 'Assigned with string, again...';



