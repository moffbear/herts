package com.tomoyane.herts.hertscore.core;

import com.tomoyane.herts.hertscommon.enums.RpcType;
public abstract class UnaryServiceCore extends HertsCoreBase {

    public UnaryServiceCore() {
        super(RpcType.Unary);
    }

    public void coreBaseMethod01() {
    }
}
