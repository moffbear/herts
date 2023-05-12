package org.herts.rpcclient.bidstreaming;

import io.grpc.stub.StreamObserver;
import org.herts.common.annotation.HertsRpc;
import org.herts.common.context.HertsType;
import org.herts.common.service.HertsService;
import org.herts.rpcclient.TestFoo;
import org.herts.rpcclient.TestHoo;

import java.util.Map;

@HertsRpc(value = HertsType.BidirectionalStreaming)
public interface TestBidStreamingRpcService extends HertsService {
    StreamObserver<String> test01(final StreamObserver<String> responseObserver);
    StreamObserver<TestFoo> test02(final StreamObserver<TestHoo> responseObserver);
    StreamObserver<Map<String, String>> test03(final StreamObserver<Map<String, String>> responseObserver);
}
