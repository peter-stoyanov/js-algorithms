var sortTestCase = require('./sort.testcase.js');
var bubbleSort = require('../../src/sorting/bubblesort.js').bubbleSort;
var timer = require('../../src/utils/timer');

// sortTestCase(bubbleSort, 'Bubble sort');
timer.logExecutionTime(sortTestCase, [bubbleSort, 'Bubble sort']);

