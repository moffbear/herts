package org.herts.example;

import org.herts.common.annotation.HertsRpc;
import org.herts.common.context.HertsType;
import org.herts.common.service.HertsService;
import io.grpc.stub.StreamObserver;

@HertsRpc(value = HertsType.ServerStreaming)
public interface ServerStreamingRpcService extends HertsService {
    void test05(String id, final HelloRequest req, final StreamObserver<HelloResponse> responseObserver);
}