package org.herts.rpc;

import org.herts.common.annotation.HertsRpcService;
import org.herts.common.context.HertsType;
import org.herts.common.service.HertsService;

import java.util.Map;

@HertsRpcService(value = HertsType.Unary)
public interface TestUnaryRpcService extends HertsService {
    String test01(String id, String value);
    boolean test02();
    Map<String, String> test03();
    boolean test100();
}
