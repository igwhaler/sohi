var a = [];

console.time(1);
var _x = a.length ? a.join(' ') : 'none';
console.timeEnd(1);

console.time(2);
var _y = a.join(' ') || 'none';
console.timeEnd(2);

console.time(3);
var _z;
if (a.length) {
    _z = a.join(' ');
} else {
    _z = 'none';
}
console.timeEnd(3);
