package org.herts.example.serversteaming;

import io.grpc.stub.StreamObserver;
import org.herts.common.service.HertsServerStreamingService;

public class ServerStreamingServiceImpl extends HertsServerStreamingService<ServerStreamingService> implements ServerStreamingService {
    @Override
    public void helloWorld(StreamObserver<String> responseObserver) {
        for (var i = 0; i < 10; i++) {
            responseObserver.onNext("hello world " + i);
        }
        responseObserver.onCompleted();
    }
}
