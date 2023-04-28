package org.herts.example.client;

import org.herts.example.ClientStreamingRpcService;
import org.herts.example.HelloRequest;
import org.herts.example.HelloResponse;
import org.herts.common.logger.HertsLogger;
import org.herts.rpcclient.HertsRpcClient;
import org.herts.rpcclient.HertsRpcClientBuilder;
import org.herts.rpcclient.HertsRpcClientInterceptBuilder;

import io.grpc.stub.StreamObserver;

import java.util.logging.Logger;

public class ClientStreamingExample {
    private static final Logger logger = HertsLogger.getLogger(ClientStreamingExample.class.getSimpleName());

    public static void run() {
        HertsRpcClient client = HertsRpcClientBuilder
                .builder("localhost", 9000)
                .secure(false)
                .registerHertsRpcInterface(ClientStreamingRpcService.class)
                .interceptor(HertsRpcClientInterceptBuilder.builder(new GrpcClientInterceptor()).build())
                .connect();

        ClientStreamingRpcService service = client.createHertRpcService(ClientStreamingRpcService.class);
        var res = service.test10(new StreamObserver<>() {
            @Override
            public void onNext(HelloResponse req) {
                logger.info(String.format("Got message at %d, %d", req.getCode(), req.getTimestamp()));
            }
            @Override
            public void onError(Throwable t) {
                t.printStackTrace();
                logger.info("Error. "  + t.getMessage());
            }
            @Override
            public void onCompleted() {
                logger.info("onCompleted.");
            }
        });

        for (int i = 0; i < 10; i++) {
            var r = new HelloRequest();
            r.setNumber(10000);
            res.onNext(r);
        }

        res.onCompleted();
        logger.info("Done");
        client.getChannel().shutdown();
    }

}
