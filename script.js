const messages = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

const pickRandomMessage = num => {
    return Math.floor(Math.random() * num);
}

const personalMessage = [];

for (const prop in messages) {
    const msgId = pickRandomMessage(messages[prop].length);

    switch(prop) {
        case 'signInfo':
            personalMessage.push(`Your sign right now is a ${messages[prop][msgId]}.`);
            break;
        case 'fortuneOutput':
            personalMessage.push(`You are having: ${messages[prop][msgId]}.`);
            break;
        case 'advice':
            personalMessage.push(`You should: ${messages[prop][msgId]}.`);
            break;
        default:
            personalMessage.push('There is not enough info.');
    }
}

const displayMessage = arr => {
    console.log(arr.join('\n'));
}

displayMessage(personalMessage);