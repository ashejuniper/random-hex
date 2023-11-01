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
    let result = (Math.round(Math.random() * 0xFF)).toString(16);

    if (
        result.length < 2
    ) {
        result = `0${result}`;
    }

    return result;
}

function u16() {
    return `${u8()}${u8()}`;
}

function u32() {
    return `${u16()}${u16()}`;;
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
        return RandomHex[`u${x}`]();
    }
    catch (e) {
        let result = "";

        let i = 0;

        // 8-bit-aligned:
        for (
            i = i;
            i < x;
            i += 8
        ) {
            result += u8();
        }

        return result;
    }
}

function buffer(x) {
    return Buffer.from(
        hex(x),
        'hex'
    );
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
    buffer,
    int,
    float,
    hex,
    hyperURL,
    hyperGatewayURL,
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
