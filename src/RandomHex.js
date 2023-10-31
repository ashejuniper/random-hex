function u1() {
    return (Math.round(Math.random() * 0b1)).toString(16);
}

function u2() {
    return (Math.round(Math.random() * 0b11)).toString(16);
}

function u4() {
    return (Math.round(Math.random() * 0xF)).toString(16);
}

function u8() {
    return (Math.round(Math.random() * 0xFF)).toString(16);
}

function u16() {
    return (Math.round(Math.random() * 0xFF_FF)).toString(16);
}

function u32() {
    return (Math.round(Math.random() * 0xFF_FF_FF_FF)).toString(16);
}

function u64() {
    return `${u32()}${u32()}`;
}

function u128() {
    return `${u32()}${u32()}${u32()}${u32()}`;
}

function u256() {
    return `${u32()}${u32()}${u32()}${u32()}${u32()}${u32()}${u32()}${u32()}`;
}

function u512() {
    return `${u256()}${u256()}`;
}

function u1024() {
    return `${u256()}${u256()}${u256()}${u256()}`;
}

function u2048() {
    return `${u256()}${u256()}${u256()}${u256()}${u256()}${u256()}${u256()}${u256()}`;
}

function u4096() {
    return `${u2048()}${u2048()}`;
}

function hex(x) {
    try {
        console.log(`RandomHex[\`u${x}\`]()`)
        return RandomHex[`u${x}`]();
    }
    catch (e) {
        console.log(e.toString());
    }
}

function int(x) {
    return Number.parseInt(
        hex(x),
        16
    );
}

function float(x) {
    return Number.parseFloat(
        hex(x),
        16
    );
}

function hyperURL() {
    return `hyper://${hex(256)}`;
}

function hyperGatewayURL() {
    return `https://${hex(256)}.hyper.scarzebra.com/`;
}

const RandomHex = {
    int,
    float,
    hex,
    u1,
    u2,
    u4,
    u8,
    u16,
    u32,
    u64,
    u128,
    u256,
    u512,
    u1024,
    u2048,
    u4096
};

module.exports = RandomHex;

console.log(hex(64));
console.log(hex(256));
console.log(int(4).toString(16));
console.log(int(4));
console.log(float(8).toString(16));
console.log(float(8));
console.log(2 / 8, 'bytes');

console.log(
    Number.parseInt(
        '1000',
        16
    )
);
