const fetch = require('cross-fetch');

const getTests = async () => {
    let res;
    try {
        res = await fetch('http://localhost:2222/api/tests');
        res = await res.json();
        console.log(res)
    }
    catch(err) {
        console.log(err)
    }
};

const data = [
    {
        theme: 'Kelishik qo\'shimchalari',
        tests: [
            {
                question: 'Bosh kelishik qo\'shimchasi qaysi?',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 1
    },
    {
        theme: 'Olmoshlar mavzusi',
        tests: [
            {
                question: 'Olmosh nima',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 2
    },
    {
        theme: 'mavzu2 mavzu2',
        tests: [
            {
                question: 'Bosh kelishik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 3
    },
    {
        theme: 'mavzu3 mavzu3',
        tests: [
            {
                question: 'Bosh kelishik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 4
    },
    {
        theme: 'mavzu4 mavzu4',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 5
    },
    {
        theme: 'mavzu4 mavzu4',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 6
    },
    {
        theme: 'mavzu4 mavzu4',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 7
    },
    {
        theme: 'mavzu4 mavzu4',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 8
    },
    {
        theme: 'mavzu4 mavzu4',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 9
    },
    {
        theme: 'mavzu4 mavzu4',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 10
    },
    {
        theme: 'mavzu4 mavzu4',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 11
    },
    {
        theme: 'mavzu4 mavzu4',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 12
    },
    {
        theme: 'mavzu48989879878',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 13
    },
    {
        theme: 'mavzu48989879878',
        tests: [
            {
                question: 'Bosh kelijjjshik qo\'shimchasi qaysi',
                answers: [
                    {
                        variant: '-',
                        isTrue: true
                    },
                    {
                        variant: 'ning',
                        isTrue: false
                    },
                    {
                        variant: 'ga',
                        isTrue: false
                    },
                    {
                        variant: 'i',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 1',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
            {
                question: 'Savol 2',
                answers: [
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                    {
                        variant: 'to\'g\'ri javob',
                        isTrue: true
                    },
                    {
                        variant: 'noto\'g\'ri javob',
                        isTrue: false
                    },
                ]
            },
        ],
        num: 14
    }
];
module.exports = data;