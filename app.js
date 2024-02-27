let inputData = [];
let optionData = [];

const sortValues = () => {
    process.stdout.write('Hello!Enter 10 words or digits deviding them in spaces: ' + '\n');
    process.stdin.on('data', data => {
        const trimmedData = data.toString().trim();

        if (!inputData.length) {
            inputData = [...(trimmedData.split(' '))];
            process.stdout.write('How would you like to sort values:' + '\n'
                + '1.Words by name (from A to Z)' + '\n'
                + '2.Show digits from the smallest.' + '\n'
                + '3.Show digits from the biggest' + '\n'
                + '4.Show words from smallest length' + '\n'
                + '5.Show unique words' + '\n'
                + '6.Show unique values' + '\n'
                + 'To exit the program enter `exit`' + '\n'
                + '\n' + 'Select (1-6) and press ENTER:');
        } else {
            if (+trimmedData === 1) {
                sortAlphabet(inputData);
                reset();

            }
            else if (+trimmedData === 2) {
                sortNumAscendic(inputData);
                reset();
            }
            else if (+trimmedData === 3) {
                sortNumDescenic(inputData);
                reset();
            }
            else if (+trimmedData === 4) {
                sortByWordsLength(inputData);
                reset();
            }
            else if (+trimmedData === 5) {
                filterUniqueWords(inputData);
                reset();
            }
            else if (+trimmedData === 6) {
                filterUniqueVals(inputData);
                reset();
            }
            else if (trimmedData.toLowerCase() === 'exit') {
                console.log('\n' + 'Goodbye! See you later :)');
                process.exit();
            }
        }
    });
};

function filterByNums(array) {
    return array.filter(item => !isNaN(+item))
}

function filterByWord(array) {
    return array.filter(item => isNaN(+item))
}

function sortAlphabet(array) {
    const sortedData = array.filter(item => isNaN(+item)).sort((a, b) => a.localeCompare(b));
    console.log(sortedData);
}

function sortNumAscendic(array) {
    const sortedData = array.filter(item => !isNaN(+item)).sort((a, b) => +a - +b)
    console.log(sortedData);
}

function sortNumDescenic(array) {
    const sortedData = array.filter(item => !isNaN(+item)).sort((a, b) => +b - +a)
    console.log(sortedData);
}

function sortByWordsLength(array) {
    const sortedData = array.filter(item => isNaN(+item)).sort((a, b) => a.length - b.length)
    console.log(sortedData);
}

function filterUniqueWords(array) {
    const filteredData = filterByWord(array).reduce((acc, word) => {
        if (!acc.includes(word)) acc.push(word);
        return acc;
    }, [])
    console.log(filteredData)
}
function filterUniqueVals(array) {
    const filteredData = array.reduce((acc, word) => {
        if (!acc.includes(word)) acc.push(word);
        return acc;
    }, [])
    console.log(filteredData)
}

function reset() {
    inputData = [];
    process.stdout.write('Hello!Enter 10 words or digits deviding them in spaces: ' + '\n')
}

sortValues();