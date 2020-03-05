var bestCommonTypeExample = [ { a: 'A', b: 1, c: true }, { a: 'B', b: 1, c: true }
];
for (const value of bestCommonTypeExample) 
{
    console.log(value.a);
    console.log(value.b);
    console.log(value.c); 
}

interface DeviceMotionEvent {
    motionDescription: string;
}
// The existing DeviceMotionEvent has all of its existing properties
// plus our additional motionDescription property
function handleMotionEvent(e: DeviceMotionEvent) {
var acceleration = e.acceleration;
var description = e.motionDescription; }