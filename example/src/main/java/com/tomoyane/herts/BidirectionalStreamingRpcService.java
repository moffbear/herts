package com.tomoyane.herts;

import com.tomoyane.herts.hertscommon.service.HertsService;
import io.grpc.stub.StreamObserver;

public interface BidirectionalStreamingRpcService extends HertsService {
    StreamObserver<HelloResponse> test04(final StreamObserver<HelloResponse> responseObserver);
}