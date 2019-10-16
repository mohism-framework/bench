"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const bench = new index_1.default();
bench
    .add('+number', function () {
    +'12345';
})
    .add('Number.parseInt', function () {
    Number.parseInt('12345', 10);
})
    .run();
/**
 * 'name',
'options',
'async',
'defer',
'delay',
'initCount',
'maxTime',
'minSamples',
'minTime',
'id',
'fn',
'stats',
'times',
'_timerId',
'events',
'running',
'count',
'compiled',
'cycles',
'hz'
 */ 
