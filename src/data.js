const questionData = [
  {
    id: 1,
    question: 'Rolex is a company that specializes in what type of product?',
    answers: [
      {
        text: 'Phone',
        correct: false,
      },
      {
        text: 'Watches',
        correct: true,
      },
      {
        text: 'Food',
        correct: false,
      },
      {
        text: 'Cosmetic',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: 'When did the website `Facebook` launch?',
    answers: [
      {
        text: '2004',
        correct: true,
      },
      {
        text: '2005',
        correct: false,
      },
      {
        text: '2006',
        correct: false,
      },
      {
        text: '2007',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Who played the character of harry potter in movie?',
    answers: [
      {
        text: 'Johnny Deep',
        correct: false,
      },
      {
        text: 'Leonardo Di Caprio',
        correct: false,
      },
      {
        text: 'Denzel Washington',
        correct: false,
      },
      {
        text: 'Daniel Red Cliff',
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: 'Who is The Net Ninja?',
    answers: [
      {
        text: 'A kung fu master',
        correct: false,
      },
      {
        text: 'A famous ninja',
        correct: false,
      },
      {
        text: 'A youtuber',
        correct: true,
      },
      {
        text: 'A movie character',
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: 'Most sold manga?',
    answers: [
      {
        text: 'Naruto',
        correct: false,
      },
      {
        text: 'Dragon ball Z',
        correct: false,
      },
      {
        text: 'Tokyo ghoul',
        correct: false,
      },
      {
        text: 'One piece',
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: `'OS' computer abbreviation usually means ?`,
    answers: [
      {
        text: 'Order of Significance',
        correct: false,
      },
      {
        text: 'Open Software',
        correct: false,
      },
      {
        text: 'Operating System',
        correct: true,
      },
      {
        text: 'Optical Sensor',
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      'Which is a type of Electrically-Erasable Programmable Read-Only Memory?',
    answers: [
      {
        text: 'Flash',
        correct: true,
      },
      {
        text: 'Flange',
        correct: false,
      },
      {
        text: 'Fury',
        correct: false,
      },
      {
        text: 'FRAM',
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: `Who developed Yahoo?`,
    answers: [
      {
        text: 'Dennis Ritchie & Ken Thompson',
        correct: false,
      },
      {
        text: 'David Filo & Jerry Yang',
        correct: true,
      },
      {
        text: 'Vint Cerf & Robert Kahn',
        correct: false,
      },
      {
        text: 'Steve Case & Jeff Bezos',
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: `	What does VVVF stand for?`,
    answers: [
      {
        text: 'Variant Voltage Vile Frequency',
        correct: false,
      },
      {
        text: 'Variable Velocity Variable Fun',
        correct: false,
      },
      {
        text: 'Very Very Vicious Frequency',
        correct: false,
      },
      {
        text: 'Variable Voltage Variable Frequency',
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: `What frequency range is the High Frequency band?`,
    answers: [
      {
        text: '100 kHz',
        correct: false,
      },
      {
        text: '1 GHz',
        correct: false,
      },
      {
        text: '30 to 300 MHz',
        correct: false,
      },
      {
        text: '3 to 30 MHz',
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question: `What is the relationship between resistivity r and conductivity s?`,
    answers: [
      {
        text: 'R = s2',
        correct: false,
      },
      {
        text: 'R = s',
        correct: false,
      },
      {
        text: 'R > s',
        correct: false,
      },
      {
        text: 'R = 1/s',
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question: `What does the term PLC stand for?`,
    answers: [
      {
        text: 'Programmable Lift Computer',
        correct: false,
      },
      {
        text: 'Program List Control',
        correct: false,
      },
      {
        text: 'Programmable Logic Controller',
        correct: true,
      },
      {
        text: 'Piezo Lamp Connector',
        correct: false,
      },
    ],
  },
];

const moneyPyramid = [
  { id: 1, amount: '$100' },
  { id: 2, amount: '$500' },
  { id: 3, amount: '$1000' },
  { id: 4, amount: '$5000' },
  { id: 5, amount: '$10000' },
  { id: 6, amount: '$16000' },
  { id: 7, amount: '$32000' },
  { id: 8, amount: '$64000' },
  { id: 9, amount: '$125000' },
  { id: 10, amount: '$250000' },
  { id: 11, amount: '$500000' },
  { id: 12, amount: '$1000000' },
];

export { questionData, moneyPyramid };
