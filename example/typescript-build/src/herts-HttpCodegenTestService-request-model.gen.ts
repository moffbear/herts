// Don't edit this file because this file is generated by herts codegen.
import {CustomModel} from './herts-structure.gen'
import {User} from './herts-structure.gen'

export class IntegerFuncMethodRequest {
    private constructor(payloads: Array<IntegerFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<IntegerFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<IntegerFuncPayload>();
        return new IntegerFuncMethodRequest (payloads);
    };
}
export class DoubleClassFuncMethodRequest {
    private constructor(payloads: Array<DoubleClassFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<DoubleClassFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<DoubleClassFuncPayload>();
        return new DoubleClassFuncMethodRequest (payloads);
    };
}
export class ByteClassFuncMethodRequest {
    private constructor(payloads: Array<ByteClassFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<ByteClassFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<ByteClassFuncPayload>();
        return new ByteClassFuncMethodRequest (payloads);
    };
}
export class ShortClassFuncMethodRequest {
    private constructor(payloads: Array<ShortClassFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<ShortClassFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<ShortClassFuncPayload>();
        return new ShortClassFuncMethodRequest (payloads);
    };
}
export class LongClassFuncMethodRequest {
    private constructor(payloads: Array<LongClassFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<LongClassFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<LongClassFuncPayload>();
        return new LongClassFuncMethodRequest (payloads);
    };
}
export class FloatClassFuncMethodRequest {
    private constructor(payloads: Array<FloatClassFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<FloatClassFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<FloatClassFuncPayload>();
        return new FloatClassFuncMethodRequest (payloads);
    };
}
export class BooleanClassFuncMethodRequest {
    private constructor(payloads: Array<BooleanClassFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<BooleanClassFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<BooleanClassFuncPayload>();
        return new BooleanClassFuncMethodRequest (payloads);
    };
}
export class BooleanFuncMethodRequest {
    private constructor(payloads: Array<BooleanFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<BooleanFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<BooleanFuncPayload>();
        return new BooleanFuncMethodRequest (payloads);
    };
}
export class CharacterFuncMethodRequest {
    private constructor(payloads: Array<CharacterFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<CharacterFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<CharacterFuncPayload>();
        return new CharacterFuncMethodRequest (payloads);
    };
}
export class BigDecimalFuncMethodRequest {
    private constructor(payloads: Array<BigDecimalFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<BigDecimalFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<BigDecimalFuncPayload>();
        return new BigDecimalFuncMethodRequest (payloads);
    };
}
export class ListStrFuncMethodRequest {
    private constructor(payloads: Array<ListStrFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<ListStrFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<ListStrFuncPayload>();
        return new ListStrFuncMethodRequest (payloads);
    };
}
export class CustomModelFuncMethodRequest {
    private constructor(payloads: Array<CustomModelFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<CustomModelFuncPayload>;
    public static createRequest(
        arg0 : CustomModel,
    ) {
        const payloads = new Array<CustomModelFuncPayload>();
        const payload0 = new CustomModelFuncPayload ('arg0', arg0);
        payloads.push(payload0);
        return new CustomModelFuncMethodRequest (payloads);
    };
}
export class ArrayListFuncMethodRequest {
    private constructor(payloads: Array<ArrayListFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<ArrayListFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<ArrayListFuncPayload>();
        return new ArrayListFuncMethodRequest (payloads);
    };
}
export class CustomModelListFuncMethodRequest {
    private constructor(payloads: Array<CustomModelListFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<CustomModelListFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<CustomModelListFuncPayload>();
        return new CustomModelListFuncMethodRequest (payloads);
    };
}
export class HashMapFuncMethodRequest {
    private constructor(payloads: Array<HashMapFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<HashMapFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<HashMapFuncPayload>();
        return new HashMapFuncMethodRequest (payloads);
    };
}
export class CustomModelMapFuncMethodRequest {
    private constructor(payloads: Array<CustomModelMapFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<CustomModelMapFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<CustomModelMapFuncPayload>();
        return new CustomModelMapFuncMethodRequest (payloads);
    };
}
export class StringFuncMethodRequest {
    private constructor(payloads: Array<StringFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<StringFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<StringFuncPayload>();
        return new StringFuncMethodRequest (payloads);
    };
}
export class IntFuncMethodRequest {
    private constructor(payloads: Array<IntFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<IntFuncPayload>;
    public static createRequest(
        arg0 : number,
        arg1 : string,
    ) {
        const payloads = new Array<IntFuncPayload>();
        const payload0 = new IntFuncPayload ('arg0', arg0);
        payloads.push(payload0);
        const payload1 = new IntFuncPayload ('arg1', arg1);
        payloads.push(payload1);
        return new IntFuncMethodRequest (payloads);
    };
}
export class DoubleFuncMethodRequest {
    private constructor(payloads: Array<DoubleFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<DoubleFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<DoubleFuncPayload>();
        return new DoubleFuncMethodRequest (payloads);
    };
}
export class ByteFuncMethodRequest {
    private constructor(payloads: Array<ByteFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<ByteFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<ByteFuncPayload>();
        return new ByteFuncMethodRequest (payloads);
    };
}
export class ShortFuncMethodRequest {
    private constructor(payloads: Array<ShortFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<ShortFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<ShortFuncPayload>();
        return new ShortFuncMethodRequest (payloads);
    };
}
export class LingFuncMethodRequest {
    private constructor(payloads: Array<LingFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<LingFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<LingFuncPayload>();
        return new LingFuncMethodRequest (payloads);
    };
}
export class FloatFuncMethodRequest {
    private constructor(payloads: Array<FloatFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<FloatFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<FloatFuncPayload>();
        return new FloatFuncMethodRequest (payloads);
    };
}
export class CharFuncMethodRequest {
    private constructor(payloads: Array<CharFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<CharFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<CharFuncPayload>();
        return new CharFuncMethodRequest (payloads);
    };
}
export class BigIntFuncMethodRequest {
    private constructor(payloads: Array<BigIntFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<BigIntFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<BigIntFuncPayload>();
        return new BigIntFuncMethodRequest (payloads);
    };
}
export class DateFuncMethodRequest {
    private constructor(payloads: Array<DateFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<DateFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<DateFuncPayload>();
        return new DateFuncMethodRequest (payloads);
    };
}
export class UuidFuncMethodRequest {
    private constructor(payloads: Array<UuidFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<UuidFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<UuidFuncPayload>();
        return new UuidFuncMethodRequest (payloads);
    };
}
export class MapStrFuncMethodRequest {
    private constructor(payloads: Array<MapStrFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<MapStrFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<MapStrFuncPayload>();
        return new MapStrFuncMethodRequest (payloads);
    };
}
export class VoidFuncMethodRequest {
    private constructor(payloads: Array<VoidFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<VoidFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<VoidFuncPayload>();
        return new VoidFuncMethodRequest (payloads);
    };
}
export class ArrayFuncMethodRequest {
    private constructor(payloads: Array<ArrayFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<ArrayFuncPayload>;
    public static createRequest(
        arg0 : Array<string>,
    ) {
        const payloads = new Array<ArrayFuncPayload>();
        const payload0 = new ArrayFuncPayload ('arg0', arg0);
        payloads.push(payload0);
        return new ArrayFuncMethodRequest (payloads);
    };
}
export class ListFuncMethodRequest {
    private constructor(payloads: Array<ListFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<ListFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<ListFuncPayload>();
        return new ListFuncMethodRequest (payloads);
    };
}
export class MapFuncMethodRequest {
    private constructor(payloads: Array<MapFuncPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<MapFuncPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<MapFuncPayload>();
        return new MapFuncMethodRequest (payloads);
    };
}
export class CreateUserMethodRequest {
    private constructor(payloads: Array<CreateUserPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<CreateUserPayload>;
    public static createRequest(
        arg0 : User,
    ) {
        const payloads = new Array<CreateUserPayload>();
        const payload0 = new CreateUserPayload ('arg0', arg0);
        payloads.push(payload0);
        return new CreateUserMethodRequest (payloads);
    };
}
export class GetUsersMethodRequest {
    private constructor(payloads: Array<GetUsersPayload>) {
        this.payloads = payloads;
    }
    payloads: Array<GetUsersPayload>;
    public static createRequest(
    ) {
        const payloads = new Array<GetUsersPayload>();
        return new GetUsersMethodRequest (payloads);
    };
}

export class IntegerFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class DoubleClassFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class ByteClassFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class ShortClassFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class LongClassFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class FloatClassFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class BooleanClassFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class BooleanFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class CharacterFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class BigDecimalFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class ListStrFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class CustomModelFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class ArrayListFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class CustomModelListFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class HashMapFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class CustomModelMapFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class StringFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class IntFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class DoubleFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class ByteFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class ShortFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class LingFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class FloatFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class CharFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class BigIntFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class DateFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class UuidFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class MapStrFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class VoidFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class ArrayFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class ListFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class MapFuncPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class CreateUserPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
export class GetUsersPayload {
    constructor(keyName: string, value: any) {
        this.keyName = keyName;
        this.value = value;
    }
    private keyName: string;
    private value: any;
}
